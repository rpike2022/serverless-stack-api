import AWS from "aws-sdk";
const client = new AWS.DynamoDB.DocumentClient();
export default {
    get: (param)    => client.get(param).promise(),
    put: (param)    => client.put(param).promise(),
    query: (param)  => client.query(param).promise(),
    update: (param) => client.update(param).promise(),
    delete: (param) => client.delete(param).promise(),
};