import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Circus } from './circus.entity';
import { Performance } from './performance.entity';

@Entity('show')
export class Show {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'timestamp', nullable: true})
    date!: Date;

    @Column({type: 'varchar', length: 255, nullable: false, default: 'Show'})
    title!: string;

    @ManyToOne(type => Circus, circus => circus.shows)
    circus!: Circus;

    @OneToMany(type => Performance, performance => performance.show, {cascade: true})
    performances!: Performance[];
}
