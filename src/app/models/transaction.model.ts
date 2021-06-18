enum TransactionType {
    sell,
    buy
}

interface Transaction {
    from: Coin;
    to: Coin;
    amount: number;
    address: string;
    timestamp: number;
    type: TransactionType
}