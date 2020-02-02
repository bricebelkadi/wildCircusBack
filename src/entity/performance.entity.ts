import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { Artist } from './artist.entity';
import { Show } from './show.entity';
import { Specialty } from './specialty.entity';

@Entity('performance')
export class Performance {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @ManyToMany(type => Artist, artist => artist.performances, {cascade: true})
    @JoinTable()
    artists!: Artist[];

    @Column({ type: 'int', nullable: true, default: 0 })
    startTime!: number;

    @Column({ type: 'int', nullable: true, default: 0 })
    duration!: number;

    @ManyToOne(type => Show, show => show.performances)
    show!: Show;

    @ManyToOne(type => Specialty, specialty => specialty.performances)
    specialty!: Specialty;
}
