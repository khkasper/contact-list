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
    .string({
      required_error: 'Mobile is required',
    }),
  email: z
    .string({
      required_error: 'E-mail is required',
    })
    .email({
      message: 'Must be a valid email',
    }),
  url: z
    .string()
    .url({
      message: 'Must be a valid URL',
    })
});

type Contact = z.infer<typeof ContactSchema>;

export {Contact, ContactSchema};
