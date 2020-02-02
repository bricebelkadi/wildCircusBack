import { Application, Router, Response, Request } from 'express';
import { commonController } from '../core/abstract.controller';
import { ArtistService } from '../services/artist.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ArtistController = (app: Application) => {

    const service = new ArtistService();

    let router: Router = Router();

    router.get('/rest/performance/:id', async (req: Request, res: Response) => {
        const idPerf = parseInt(req.params.id, 10);
        res.send(await service.getRestArtist(idPerf));
    })


    router = commonController(service, router);

    app.use('/artist', router);
};
