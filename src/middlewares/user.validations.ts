import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';

const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({
      message: '"userId" is required',
    });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({
      message: '"userId" must be a number',
    });
  }
  if (!await UserModel.findOne({ where: { id: userId } })) {
    return res.status(404).json({
      message: '"userId" not found',
    });
  }
  
  next();
};

export default userValidation;