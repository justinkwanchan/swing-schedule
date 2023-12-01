"use strict";

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();

const retrieveEventDetails = (event) => {
    const {
        eventName,
        startDate,
        startTime,
        endTime,
        repeated,
        repeatedUntil,
        weekOf,
        details,
        location,
        price,
        user
    } = JSON.parse(event.body);

    return {
        pk: 'EVENTS',
        eventName: eventName,
        startDate: startDate,
        startTime: startTime,
        endTime: endTime,
        repeated: repeated,
        repeatedUntil: repeatedUntil,
        weekOf: weekOf,
        details: details,
        location: location,
        price: price,
        user: user
    };
}

module.exports.createEvent = async (event) => {

    const eventObj = retrieveEventDetails(event);
    eventObj.sk = `${uuidv4()}#MAIN`;

    const createParams = {
        TableName: process.env.TableName,
        Item: eventObj
    };

    await docClient.put(createParams).promise();

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

module.exports.updateEvent = async (event) => {

    const eventObj = retrieveEventDetails(event);
    eventObj.sk = JSON.parse(event.body).id;

    const updateParams = {
        TableName: process.env.TableName,
        Item: eventObj
    };

    await docClient.update(updateParams).promise();

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

module.exports.query = async (event) => {

    const id = JSON.parse(event.body).id;

    const updateParams = {
        TableName: process.env.TableName,
        KeyConditionExpression: 'pk = EVENTS and sk = :sk',
        ExpressionAttributeValues: {
            ':sk': id
        }
    };

    const res = await docClient.query(updateParams).promise();

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