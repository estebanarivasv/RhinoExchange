import { TransactionModel } from "./transaction.model";

interface IWallet {
    id: number;
    name: string;
    transactions: Array<TransactionModel>;
    address: string;
    balance: number;        // In BTC
}

export class WalletModel implements IWallet {

    constructor(
        public id: number,
        public name: string,
        public transactions: Array<TransactionModel>,
        public address: string,
        public balance: number) { }

}