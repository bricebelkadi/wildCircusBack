import { createConnection } from 'typeorm';
import { Ticket } from '../entity/ticket.entity';
import { Artist } from '../entity/artist.entity';
import { Circus } from '../entity/circus.entity';
import { Customer } from '../entity/customer.entity';
import { Performance } from '../entity/performance.entity';
import { Show } from '../entity/show.entity';
import { Specialty } from '../entity/specialty.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.TEMPLATE_DB_HOST,
    port: parseInt(process.env.TEMPLATE_DB_PORT || '3306', 10),
    username: process.env.TEMPLATE_DB_USER,
    password: process.env.TEMPLATE_DB_PASS,
    database: 'checkpoint4',
    entities: [
        Ticket,
        Artist,
        Circus,
        Customer,
        Performance,
        Show,
        Specialty,
    ],
    synchronize: true,
});
};
