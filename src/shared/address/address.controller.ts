import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController{
    constructor(private readonly addressService:AddressService){}
    @Post()
    addAddress(
        @Body('address')prodadd:string,
        @Body('balances')prodbal:string,
        @Body('totalBalanceInUSD')prodbalusd:number
    ):{address:string}{
        const generatedaddress = this.addressService.insertAddress(
            prodadd,
            prodbal,
            prodbalusd
        );
        return {address:generatedaddress};
    }
    @Get()
    getAddress(){
        return this.addressService.getAddress();
    }
}