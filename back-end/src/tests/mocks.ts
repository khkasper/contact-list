import { Types } from 'mongoose';

export const validContact = {
  _id: new Types.ObjectId().toString(),
  name: 'Contact List',
  mobile: '55999999999',
  email: 'email@email.com',
  url: 'https://contact-list.com',
};

export const coverageContact = {
  name: 'Contact List',
  mobile: '55999999999',
  email: 'email@email.com',
  url: 'https://contact-list.com',
};

export const updatedContact = {
  _id: validContact._id.toString(),
  name: 'Contact List Updated',
  mobile: '55998888888',
  email: 'email@email.com',
  url: 'https://contact-list.com',
};

export const noNameContact = {
  mobile: '55999999999',
  email: 'email@email.com',
  url: 'https://contact-list.com',
};

export const noMobileContact = {
  name: 'Contact List',
  email: 'email@email.com',
  url: 'https://contact-list.com',
};

export const noEmailContact = {
  name: 'Contact List',
  mobile: '55999999999',
  url: 'https://contact-list.com',
};

export const noUrlContact = {
  name: 'Contact List',
  mobile: '55999999999',
  email: 'email@email.com',
};
