import { z } from 'zod';

const IdSchema = z
  .string()
  .length(24, { message: 'Id must have 24 hexadecimal characters' })
  .regex(
    /^([A-Fa-f0-9]{24})$/,
    { message: 'Id must have 24 hexadecimal characters' },
  );

export default IdSchema;
