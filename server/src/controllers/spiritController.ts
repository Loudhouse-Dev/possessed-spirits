import prisma from '../db';
import { Request, Response } from 'express';


export const getSpirits = async(_req: Request, res: Response) => {
  const cocktails = await prisma.recipe.findMany();
  res.json(cocktails)
}
