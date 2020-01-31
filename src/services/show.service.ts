import { ShowRepository } from '../repository/show.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class ShowService extends AbstractService{

    protected repository = getCustomRepository(ShowRepository);

    getAllWithRelations() {
        return this.repository.find({relations: ['circus', 'performances', 'performances.specialty']})
    }

    async update(idElement: number, element: any) {
        await this.repository.update(idElement, element);
        return this.repository.findOne(idElement, {relations: ['circus', 'performances', 'performances.specialty']});
    }



}
