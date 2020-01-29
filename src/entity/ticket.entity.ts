import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Circus } from './circus.entity';

@Entity('ticket')
export class Ticket {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @ManyToOne(type => Circus, circus => circus.tickets)
    circus!: Circus;

    @Column({type: 'varchar', length: 15, nullable: false})
    color!: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    icon!: string;

    @ManyToMany(type => Customer, customer => customer.tickets)
    customers!: Customer[];

}
