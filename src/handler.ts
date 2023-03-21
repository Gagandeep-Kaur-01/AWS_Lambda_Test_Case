import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const hellohandler = async (): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: 'hello world',
    };
};