import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin Users',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Wick',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Wick',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default users