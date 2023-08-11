import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const token = await loginService.login(req.body);
  if (token.status !== 200) {
    return res.status(token.status).send({ message: token.message });
  }
  res.status(token.status).json({ token: token.message });
};

export default {
  login,
};