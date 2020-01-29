import { Customer } from './../entity/customer.entity';
import {EntityRepository, Repository} from 'typeorm';
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requete sql)
 */

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

}
