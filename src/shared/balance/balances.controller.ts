import { Body, Controller, Get, Post } from '@nestjs/common';
import { BalancesService } from './balances.service';


@Controller('balances')
export class BalancesController{
    constructor(private readonly addressService:BalancesService){}
    @Post()
    addAddress(
        @Body('name')prodname:string,
        @Body('symbol')prodsys:string,
        @Body('decimal')proddec:number,
        @Body('contractAddress')prodcadd:string,
        @Body('contractDecimals')prodcdec:string,
        @Body('logo')prodlogo:number,
        @Body('balance')prodbal:string,
        @Body('balanceInUSD')prodbalusd:number
    ):{balances:string}{
        const generatedbalances = this.addressService.insertBalances(
            prodname,
            prodsys,
            proddec,
            prodcadd,
            prodcdec,
            prodlogo,
            prodbal,
            prodbalusd
        );
        return {balances:generatedbalances};
    }
    @Get()
    getAddress(){
        return this.addressService.getBalances();
    }
}
