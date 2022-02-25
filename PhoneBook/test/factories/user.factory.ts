import { Users } from '../../src/entities/Users';
import UserService from '../../src/services/UserService';
import crypto from 'crypto';

const UserFactory = async (args = {}): Promise<Users> => {
    const userService = new UserService;
    const password = '12345';

    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.createHmac('sha512', salt).update(password).digest('base64');

    return await userService.createUser({
        emailAddress: 'test@example.com',
        password: salt + '$' + hash,
        verified: true,
        ...args,
    });
}

export default UserFactory;
