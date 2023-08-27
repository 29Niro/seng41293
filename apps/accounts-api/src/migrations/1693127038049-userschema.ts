import { getDb } from '../migrations-utils/database.helpers';
import bcrypt from 'bcryptjs';

const USER_COLLECTION = 'users';

export const up = async () => {
  const db = await getDb();
  const collection = db.collection(USER_COLLECTION);

  const hashedPassword = await bcrypt.hash('123456', 10);

  collection.insertOne({
    password: hashedPassword,
    username: 'niro@gmail.com',
    roles: ['ADMIN'],
    status: 'ACTIVE',
  });
};

export const down = async () => {
  const db = await getDb();
  db.dropCollection(USER_COLLECTION);
};
