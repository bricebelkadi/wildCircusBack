import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Artist } from './artist.entity';
import { Circus } from './circus.entity';
import { Show } from './show.entity';
import { Specialty } from './specialty.entity';

@Entity('performance')
export class Performance {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @ManyToMany(type => Artist, artist => artist.performances)
    artists!: Artist[];

    @ManyToOne(type => Circus, circus => circus.performances)
    circus!: Circus;

    @Column({type: 'timestamp', nullable: true})
    startTime!: number;

    @Column({type: 'timestamp', nullable: true})
    endTime!: number;

    @ManyToOne(type => Show, show => show.performances)
    show!: Show;

    @ManyToOne(type => Specialty, specialty => specialty.performances)
    specialty!: Specialty;
}
