import { PerformanceRepository } from '../repository/performance.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class PerformanceService extends AbstractService{

    protected repository = getCustomRepository(PerformanceRepository);

    getAllWithRelations() {
        return this.repository.find({relations: ['show', 'specialty']})
    }

    getOnePerformance(id: number) {
        return this.repository.findOne(id, {relations: ['artists', 'artists.specialty', 'show', 'specialty']})
    }

    async putAnArray(obj: any[]) {
        for (const perf of obj) {
            await this.repository.update(perf.id, perf);
        }
        return;
    }

    async getPerformanceOfShow(id: number) {
        return this.repository.createQueryBuilder('performance').
        leftJoinAndSelect('performance.show', 'show').
        leftJoinAndSelect('performance.specialty', 'specialty').
        leftJoinAndSelect('performance.artists', 'artist').
        where('performance.show.id = :id', {id}).
        orderBy('performance.startTime', 'ASC').
        getMany();
    }

    async update(idElement: number, element: any) {
        await this.repository.update(idElement, element);
        return this.repository.findOne(idElement, {relations: ['artists', 'artists.specialty', 'show', 'specialty']});
    }


}
