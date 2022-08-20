import { Request, Response, NextFunction } from 'express';

import { Error } from '../interfaces';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode ? res.statusCode : 500;  
  
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

export default errorMiddleware;