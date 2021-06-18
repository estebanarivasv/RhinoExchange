import { TransactionModel } from "./transaction.model";

interface IWallet {
    id: number
    transactions: Array<TransactionModel>;
    total: number;
    address: string;
    balance: number;        // In BTC
}

export class WalletModel implements IWallet {

    constructor(
        public id: number,
        public transactions: Array<TransactionModel>,
        public total: number,
        public address: string,
        public balance: number) { }

}