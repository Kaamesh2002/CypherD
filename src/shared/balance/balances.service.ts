import { Injectable } from '@nestjs/common';
import {Balances} from './balances.model';

@Injectable()
export class BalancesService{
    insertBalances:Balances[]=[];
}
