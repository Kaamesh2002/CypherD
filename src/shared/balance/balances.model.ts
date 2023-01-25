export class Balances{
    constructor(
        public name:string ,
        public symbol:string, 
        public decimals:number, 
        public contractAddress:string,
        public contractDecimals:number,
        public logo:string,
        public balance:number,
        public balanceInUSD:number){}
}
