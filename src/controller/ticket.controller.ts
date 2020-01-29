import { Application, Router } from 'express';
import { commonController } from '../core/abstract.controller';
import { TicketService } from '../services/ticket.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TicketController = (app: Application) => {

    const service = new TicketService();

    let router: Router = Router();
    router = commonController(service, router);

    app.use('/ticket', router);
};
