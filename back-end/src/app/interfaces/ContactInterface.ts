import {z} from 'zod';

const ContactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(2, {
      message: 'Name must be 2 or more characters long',
    }),
  mobile: z
    .number({
      required_error: 'Mobile is required',
      invalid_type_error: 'Mobile must be a number',
    }),
  email: z
    .string({
      required_error: 'E-mail is required',
    })
    .email({
      message: 'Must be a valid email',
    }),
});

type Contact = z.infer<typeof ContactSchema>;

export {Contact, ContactSchema};
