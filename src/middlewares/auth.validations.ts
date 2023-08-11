import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const BearedToken = authorization?.split(' ')[1];
    jwt.verify(BearedToken, process.env.JWT_SECRET || 'secret');
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authValidation;