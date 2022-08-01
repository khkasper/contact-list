import {NextFunction, Request, Response} from 'express';
import ErrorMessages from './ErrorMessages';
import HttpStatusCodes from "./HttpStatusCodes";

const ErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return res
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .send({message: ErrorMessages.INTERNAL_SERVER_ERROR}).end();
};

export default ErrorMiddleware;
