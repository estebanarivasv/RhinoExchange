import { TransactionModel } from "./transaction.model";

interface IWallet {
    id?: number;
    name: string;
    transactions: Array<TransactionModel>;
    address: string;
    balance: number;        // In BTC
}

export class WalletModel implements IWallet {

    constructor(
        public name: string,
        public address: string,
        public balance: number,
        public transactions: Array<TransactionModel>,
        public id?: number
    ) { }

}