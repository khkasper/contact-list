import {Request, Response} from 'express';
import Service from '../services';
import ErrorMessages from "../utils/ErrorMessages";

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ErrorMessages;

  protected constructor(protected service: Service<T>) {
  }

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract read(
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res>;

  abstract update(
    req: Request<{ id: string, obj: T }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;

  abstract delete(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;
}

export default Controller;
