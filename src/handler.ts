import { LambdaFunctionURLHandler } from 'aws-lambda';
import { getSecretKey } from './';

export const webhook: LambdaFunctionURLHandler = async (event) => {
  console.log(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
      secretKey: getSecretKey(),
      timestamp: new Date().toISOString(),
    }),
  };
};
