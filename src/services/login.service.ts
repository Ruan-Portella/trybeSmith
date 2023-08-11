import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

const SECRET = process.env.JWT_SECRETE || 'secret';

const login = async (user: { username: string, 
  password: string }): Promise<{ status: 400 | 401 | 200, message: string }> => {
  if (!user.username || !user.password) {
    return { status: 400, message: '"username" and "password" are required' };
  }
  
  const findUser = await UserModel.findOne({ where: { username: user.username } });

  if (!findUser || !bcrypt.compareSync(user.password, findUser.dataValues.password)) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = jwt.sign({ id: findUser.dataValues.id, username: user.username }, SECRET);
  return { status: 200, message: token };
};

export default { login };