import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity('customer')
export class Customer {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    firstname!: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    lastname!: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    icon!: string;

    @ManyToMany(type => Ticket, ticket => ticket.customers)
    @JoinTable()
    tickets!: Ticket[];
}
