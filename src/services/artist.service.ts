import { ArtistRepository } from '../repository/artist.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { PerformanceRepository } from '../repository/performance.repository';
import { Artist } from '../entity/artist.entity';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class ArtistService extends AbstractService {

    protected repository = getCustomRepository(ArtistRepository);
    protected perfRepository = getCustomRepository(PerformanceRepository);


    async getRestArtist(id: number) {
        const result = await this.perfRepository.findOne(id, {relations : ['artists']});
        const newResult = result?.artists;
        const restArtist = await this.repository.find({relations : ['specialty']});
        const restArtistId: number[] = restArtist.map(x => x.id);
        if (newResult) {
            for (const artist of newResult) {
                const index = restArtistId.indexOf(artist.id);
                if (index > -1) { restArtist.splice(index, 1); }
            }
        }
        return restArtist;
    }
}
