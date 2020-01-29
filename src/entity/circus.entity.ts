import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Show } from './show.entity';
import { Performance } from './performance.entity';

@Entity('circus')
export class Circus {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    title!: string;

    @Column({type: 'decimal', nullable: true})
    X!: string;

    @Column({type: 'decimal', nullable: true})
    Y!: string;

    @OneToMany(type => Ticket, ticket => ticket.circus)
    tickets!: Ticket[];

    @OneToMany(type => Show, show => show.circus)
    shows!: Show[];

    @OneToMany(type => Performance, performance => performance.circus)
    performances!: Performance[];
}
