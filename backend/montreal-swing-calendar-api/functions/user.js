"use strict";

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.signup = async (event) => {
  const { email, password } = JSON.parse(event.body);
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const queryParams = {
    TableName: process.env.TableName,
    KeyConditionExpression: 'pk = :hkey',
    ExpressionAttributeValues: {
      ':hkey': `USER#${email}`
    }
  };

  const res = await docClient.query(queryParams).promise();

  if (res.Items.length !== 0) {
    return {
      statusCode: 409,
      body: JSON.stringify(
        {
          message: `User with email ${email} already exists.`,
        },
        null,
        2
      ),
    };
  }

  const createParams = {
    TableName: process.env.TableName,
    Item: {
      pk: `USER#${email}`,
      sk: `INFORMATION`,
      password: hashedPassword
    }
  };

  await docClient.put(createParams).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `User with email ${email} successfully created.`,
      },
      null,
      2
    ),
  };
};

module.exports.login = async (event) => {
  const { email, password } = JSON.parse(event.body);

  const queryParams = {
    TableName: process.env.TableName,
    KeyConditionExpression: 'pk = :hkey',
    ExpressionAttributeValues: {
      ':hkey': `USER#${email}`
    }
  };

  const res = await docClient.query(queryParams).promise();

  if (res.Items.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          message: `No user with email ${email} exists`,
        },
        null,
        2
      ),
    };
  }

  const hash = res.Items[0].password;

  const result = await bcrypt.compare(password, hash);

  if (result) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Successfully logged in`,
        },
        null,
        2
      ),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify(
        {
          message: `Incorrect password.`,
        },
        null,
        2
      ),
    };
  }
}