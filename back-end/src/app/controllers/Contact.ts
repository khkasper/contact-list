import {Request, Response} from 'express';
import Controller, {RequestWithBody, ResponseError} from '.';
import ContactService from '../services/Contact';
import {Contact} from '../interfaces';
import HttpStatusCodes from "../utils/HttpStatusCodes";

class ContactController extends Controller<Contact> {
  private readonly _route: string;

  constructor(
    public service = new ContactService(),
    route = '/contacts',
  ) {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: RequestWithBody<Contact>,
    res: Response<Contact | ResponseError>,
  ): Promise<typeof res> => {
    const {body} = req;
    const contact = await this.service.create(body);

    if (!contact) return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({error: this.errors.INTERNAL_SERVER_ERROR});

    if ('error' in contact) return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({error: contact.error});

    return res.status(HttpStatusCodes.CREATED).json(contact);
  };

  read = async (
    _req: Request,
    res: Response<Contact[] | ResponseError>,
  ): Promise<typeof res> => {
    const contacts = await this.service.read();
    return res.status(HttpStatusCodes.OK).json(contacts);
  };

  update = async (
    req: Request<{ id: string, obj: Contact }>,
    res: Response<Contact | ResponseError>,
  ): Promise<typeof res> => {
    const {id} = req.params;
    const contact = await this.service.update(id, req.body);
    return contact
      ? res.status(HttpStatusCodes.OK).json(contact)
      : res.status(HttpStatusCodes.NOT_FOUND).json({error: this.errors.NOT_FOUND});
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Contact | ResponseError>,
  ): Promise<typeof res> => {
    const {id} = req.params;
    const contact = await this.service.delete(id);
    return contact
      ? res.status(HttpStatusCodes.NO_CONTENT).json()
      : res.status(HttpStatusCodes.NOT_FOUND).json({error: this.errors.NOT_FOUND});
  };
}

export default ContactController;
