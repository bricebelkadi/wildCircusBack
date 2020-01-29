import 'reflect-metadata';

import express from 'express';
import loaders from './loaders';

import { TicketController } from './controller/ticket.controller';
import { ArtistController } from './controller/artist.controller';
import { CircusController } from './controller/circus.controller';
import { CustomerController } from './controller/customer.controller';
import { PerformanceController } from './controller/performance.controller';
import { ShowController } from './controller/show.controller';
import { SpecialtyController } from './controller/specialty.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    ArtistController(app);
    CircusController(app);
    CustomerController(app);
    PerformanceController(app);
    ShowController(app);
    SpecialtyController(app);
    TicketController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
