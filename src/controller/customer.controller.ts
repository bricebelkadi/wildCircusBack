import { Application, Router } from 'express';
import { commonController } from '../core/abstract.controller';
import { CustomerService } from '../services/customer.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CustomerController = (app: Application) => {

    const service = new CustomerService();

    let router: Router = Router();
    router = commonController(service, router);

    app.use('/customer', router);
};
