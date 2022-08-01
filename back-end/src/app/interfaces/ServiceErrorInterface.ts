import {ZodError} from "zod";

export interface ServiceError {
  error: ZodError;
}
