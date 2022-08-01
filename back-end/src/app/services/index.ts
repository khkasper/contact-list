import {ZodError} from 'zod';
import {Model} from '../interfaces';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  protected constructor(protected model: Model<T>) {
  }

  create = async (obj: T): Promise<T | null | ServiceError> =>
    this.model.create(obj);

  read = async (): Promise<T[]> => this.model.read();

  update = async (id: string, obj: T): Promise<T | null | ServiceError> =>
    this.model.update(id, obj);

  delete = async (id: string): Promise<T | null | ServiceError> =>
    this.model.delete(id);
}

export default Service;
