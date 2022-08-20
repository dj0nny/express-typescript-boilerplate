import { Request, Response, NextFunction } from 'express';

const emoji: Array<string> = [
  '🚀',
  '🌎',
  '👾',
];

export const getAllEmoji = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    emoji,
  });
}
