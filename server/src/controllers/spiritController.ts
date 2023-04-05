import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';


interface IBaseError {
  message: string;
  status: number;
}

const baseError: IBaseError = {
  message: 'An error occurred in in the controller function',
  status: 400,
};

export const getSpirits = async(req: Request, res: Response ) => {
  
}

export default spiritController;