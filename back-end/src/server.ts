import CustomRouter from './routes/Router';
import App from './app';
import ContactController from './app/controllers/Contact';
import {Contact} from './app/interfaces';

const server = new App();

const contactController = new ContactController();

const contactRouter = new CustomRouter<Contact>();
contactRouter.addRoute(contactController);

server.addRouter(contactRouter.router);

export default server;
