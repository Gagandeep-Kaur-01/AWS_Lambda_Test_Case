import { expect } from 'chai';
import { describe, it } from 'mocha';
import { hellohandler } from '../handler';

describe('handler', () => {
  it('should return a greeting', async () => {

    const response = await hellohandler();

    expect(response).to.deep.equal({
      statusCode: 200,
      body: 'hello world',
    });
  });
});


