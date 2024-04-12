"use strict";

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const dayjs = require('dayjs')

const retrieveEventDetails = (event) => {
    const {
        id,
        eventName,
        startDateTime,
        endDateTime,
        repeated,
        repeatedUntil,
        cancelled,
        weekOf,
        details,
        location,
        price,
        email
    } = JSON.parse(event.body);

    return {
        pk: `EVENT#${id}`,
        sk: `WEEKOF#${weekOf}`,
        eventName: eventName,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
        repeated: repeated,
        repeatedUntil: repeatedUntil,
        cancelled: cancelled,
        weekOf: weekOf,
        details: details,
        location: location,
        price: price,
        email: email
    };
}

module.exports.createEvent = async (event) => {

    const eventObj = retrieveEventDetails(event);
    console.log(JSON.stringify(eventObj));

    let params = {
        TableName: process.env.TableName,
        Item: eventObj
    };

    await docClient.put(params).promise();

    /**
     * This next block should be fine at this scale.
     * For better scaling and resilence, it could be relegated to a background
     * task via SQS, EventBridge, or Step Functions.
     */
    if (eventObj.repeated) {
      let startDateTime = dayjs(eventObj.startDateTime);
      let endDateTime = dayjs(eventObj.endDateTime);
      let weekOf = dayjs(eventObj.weekOf);
      const repeatedUntil = dayjs(eventObj.repeatedUntil);
      
      startDateTime = startDateTime.add(1, 'week');
      endDateTime = endDateTime.add(1, 'week');
      weekOf = weekOf.add(1, 'week');
      
      while (repeatedUntil.isAfter(startDateTime)) {
        eventObj.startDateTime = startDateTime.toISOString();
        eventObj.endDateTime = endDateTime.toISOString();
        eventObj.weekOf = weekOf.toISOString();
        eventObj.sk = `WEEKOF#${weekOf.toISOString()}`;

        params.Item = eventObj;
    
        await docClient.put(params).promise();

        startDateTime = startDateTime.add(1, 'week');
        endDateTime = endDateTime.add(1, 'week');
        weekOf = weekOf.add(1, 'week');
      }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: `Event successfully created.`,
          },
          null,
          2
        ),
      };
};

module.exports.queryEvent = async (event) => {

  const { id, weekOf } = JSON.parse(event.body);

  const params = {
      TableName: process.env.TableName,
      KeyConditionExpression: 'pk = :pk and sk = :sk',
      ExpressionAttributeValues: {
          ':pk': `EVENT#${id}`,
          ':sk': `WEEKOF#${weekOf}`
      }
  };

  const res = await docClient.query(params).promise();

  if (res.Items.length === 0) {
      return {
          statusCode: 404,
          body: JSON.stringify(
          {
              message: `No event found`,
          },
          null,
          2
          ),
      }
  }

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          event: res.Items[0]
        },
        null,
        2
      ),
    };
};

module.exports.queryOccurrencesByEvent = async (event) => {
  const { id } = JSON.parse(event.body);

  const params = {
    TableName: process.env.TableName,
    KeyConditionExpression: 'pk = :pk ',
    ExpressionAttributeValues: {
        ':pk': `EVENT#${id}`,
    }
  };

  const res = await docClient.query(params).promise();

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          events: res.Items
        },
        null,
        2
      ),
    };
};

module.exports.queryEventsByWeekOf = async (event) => {
  const { weekOf } = JSON.parse(event.body);

  const params = {
    TableName: process.env.TableName,
    KeyConditionExpression: 'sk = :sk ',
    ExpressionAttributeValues: {
        ':sk': `WEEKOF#${weekOf}`,
    },
    IndexName: 'WEEKOF_GSI'
  };
  
  const res = await docClient.query(params).promise();

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          events: res.Items
        },
        null,
        2
      ),
    };
}

module.exports.queryEventsByUser = async (event) => {
  const { email } = JSON.parse(event.body);

  const params = {
    TableName: process.env.TableName,
    KeyConditionExpression: 'email = :email ',
    ExpressionAttributeValues: {
        ':email': email,
    },
    IndexName: 'EMAIL_GSI'
  };
  
  const res = await docClient.query(params).promise();

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          events: res.Items
        },
        null,
        2
      ),
    };
}

module.exports.updateEvent = async (event) => {

  const eventObj = retrieveEventDetails(event);

  const params = {
      TableName: process.env.TableName,
      Item: eventObj
  };

  await docClient.update(params).promise();

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Event successfully updated.`,
        },
        null,
        2
      ),
    };
};

module.exports.updateOccurrencesByEvent = async (event) => {
  const eventObj = this.retrieveEventDetails(event);

  const res = await queryOccurrencesByEvent(JSON.stringify({
    id: eventObj.id
  }));

  const events = JSON.parse(res.body);

  /**
   * For the scale of this project, we don't have to worry about trying to parallelize this for efficiency.
   * We'll assume it works well for error-handling too.
   * 
   * TODO: Actually handle errors here via try/catch shenanigans.
   */
  for (let event of events) {
    await this.updateEvent(JSON.stringify({
      id: eventObj.id,
      eventName: eventObj.eventName,
      startDate: eventObj.startDate,
      startTime: eventObj.startTime,
      endDate: eventObj.endDate,
      endTime: eventObj.endTime,
      repeated: eventObj.repeated,
      repeatedUntil: eventObj.repeatedUntil,
      weekOf: event.weekOf,
      details: eventObj.details,
      location: eventObj.location,
      price: eventObj.price,
      user: eventObj.user
    }))
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Events successfully updated.`,
      },
      null,
      2
    ),
  };
}

