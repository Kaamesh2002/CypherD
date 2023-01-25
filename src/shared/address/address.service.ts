import { Injectable } from '@nestjs/common';
import {Address} from './address.model';

@Injectable()
export class AddressService{
    address:Address[]=[];
}