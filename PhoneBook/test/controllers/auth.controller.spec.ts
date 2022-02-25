import request from 'supertest';

import app from '../../src/app';
import UserFactory from '../factories/user.factory';
import { connect } from '../../src/typeorm';

describe('Auth API', () => {
    beforeAll(async () => {
        await connect();
    });

    it('Sign in', async () => {
        const user = await UserFactory();
        const actual = await request(app)
            .post('/api/auth/signin')
            .send({ email: user.emailAddress, password: '12345'});
        expect(actual.status).toBe(201);
    });

    it('Sign up', async () => {
        const actual = await request(app)
          .post('/api/auth/signup')
          .send({ email: 'test@regster.com', password: '12345' });
        expect(actual.status).toBe(201);
    });
});
