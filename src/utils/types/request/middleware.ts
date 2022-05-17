import { NextFunction, Request, Response } from 'express';
import { InternalError } from '../error/errors';

export type ErrorRequestHandler = (
  error: InternalError,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type NotFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
