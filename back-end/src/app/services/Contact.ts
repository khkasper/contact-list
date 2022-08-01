import {Contact, ContactSchema} from '../interfaces';
import Service, {ServiceError} from '.';
import ContactModel from '../models/Contact';
import IdSchema from "../schema/idSchema";

class ContactService extends Service<Contact> {
  constructor(public model = new ContactModel()) {
    super(model);
  }

  create = async (obj: Contact): Promise<Contact | ServiceError | null> => {
    const parsed = ContactSchema.safeParse(obj);

    if (!parsed.success) return {error: parsed.error};

    return this.model.create(obj);
  };

  read = async (): Promise<Contact[] | ServiceError> => this.model.read();

  update = async (
    id: string,
    obj: Contact,
  ): Promise<Contact | ServiceError | null> => {
    const parsedId = IdSchema.safeParse(id);

    if (!parsedId.success) return {error: parsedId.error};

    return this.model.update(id, obj);
  };

  delete = async (id: string): Promise<Contact | null | ServiceError> => {
    const parsedId = IdSchema.safeParse(id);

    if (!parsedId.success) return {error: parsedId.error};

    return this.model.delete(id);
  };
}

export default ContactService;
