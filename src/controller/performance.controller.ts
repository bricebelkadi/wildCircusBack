import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/abstract.controller';
import { PerformanceService } from '../services/performance.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PerformanceController = (app: Application) => {

    const service = new PerformanceService();

    let router: Router = Router();

    router.get('/', async (req: Request, res: Response) => {
        res.send(await service.getAllWithRelations())
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        res.send(await service.getOnePerformance(id));
    });

    router.put('/', async (req: Request, res: Response) => {
        res.send(await service.putAnArray(req.body));
    });

    router.get('/show/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        res.send(await service.getPerformanceOfShow(id));
    });

    router.put('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const formData = req.body;
        res.send(await service.update(id, formData));
    });




    router = commonController(service, router);

    app.use('/performance', router);
};
