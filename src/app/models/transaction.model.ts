import { CoinModel } from "./coin.model";

enum TransactionType {
    sell,
    buy
}

interface ITransaction {
    from: CoinModel;
    to: CoinModel;
    amount: number;
    senderAddress: string;
    recieverAddress: string;
    timestamp: string;
    type: TransactionType
    supportedCurrencies: []
}

export class TransactionModel implements ITransaction {

    constructor(
        public from: CoinModel,
        public to: CoinModel,
        public amount: number,
        public senderAddress: string,
        public recieverAddress: string,
        public timestamp: string,
        public type: TransactionType,
        public supportedCurrencies: []
    ) { }


}