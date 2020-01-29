import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Artist } from './artist.entity';
import { Performance } from './performance.entity';

@Entity('specialty')
export class Specialty {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    title!: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    description!: string;

    @OneToMany(type => Artist, artist => artist.specialty)
    artists!: Artist[];

    @OneToMany(type => Performance, performance => performance.specialty)
    performances!: Performance[];

}
