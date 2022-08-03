import { Schema, model as createModel, Document } from 'mongoose';
import { Contact } from '../interfaces';
import MongoModel from './MongoModel';

interface ContactDocument extends Contact, Document {
}

const contactSchema = new Schema<ContactDocument>({
  name: String,
  mobile: String,
  email: String,
  url: String,
}, { versionKey: false });

class ContactModel extends MongoModel<Contact> {
  constructor(public model = createModel('ContactList', contactSchema)) {
    super(model);
  }
}

export default ContactModel;
