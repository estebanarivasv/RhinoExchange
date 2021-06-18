interface Wallet {
    id: number
    transactions: Array<Transaction>;
    total: number;
    address: string;
    balance: number;        // In BTC
}