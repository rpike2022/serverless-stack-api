import * as uuid from "uuid";
//import AWS from "aws-sdk";
import handler from "./libs/handler-lib";
import dynamoDB from "./libs/dynamodb-lib";

//const dynamoDB = new AWS.DynamoDB.DocumentClient();
/*export async function main(event, context) {
    //--- Grab the request here ----
    const reqData = JSON.parse(event.body);
*/
export const main = handler( async(event, context) => {
    const reqData = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: "123",
            noteId: uuid.v1(),
            content: reqData.content,
            attachment: reqData.attachment,
            createdAt: Date.now(),
        }
    };
    await dynamoDB.put(params);
    return params.Item;
});
/*try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify( { error: "Error: " + err.message } ),
        };
    }
}*/