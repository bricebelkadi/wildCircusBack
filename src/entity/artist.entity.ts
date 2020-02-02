import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Specialty } from './specialty.entity';
import { Performance } from './performance.entity';

@Entity('artist')
export class Artist {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 50, nullable: false})
    firstname!: string;

    @Column({type: 'varchar', length: 50, nullable: false})
    lastname!: string;

    @Column({type: 'varchar', length: 50, nullable: false})
    artistName!: string;

    @ManyToOne(type => Specialty, specialty => specialty.artists)
    specialty!: Specialty;

    @ManyToMany(type => Performance, performance => performance.artists)
    performances!: Performance[];
}
