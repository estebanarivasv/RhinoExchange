import { CoinModel } from "./coin.model";


interface ITransaction {
    fromCoin: CoinModel;
    toCoin: CoinModel;
    amountSpent: number;
    amountReceived: number;
    timestamp: string;
    type: string
}

export class TransactionModel implements ITransaction {

    constructor(
        public fromCoin: CoinModel,
        public toCoin: CoinModel,
        public amountSpent: number,
        public amountReceived: number,
        public timestamp: string,
        public type: string
    ) { }


}