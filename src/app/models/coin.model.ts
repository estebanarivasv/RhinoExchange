interface ICoin {
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    id: string
}

export class CoinModel implements ICoin {

    constructor(
        public symbol: string,
        public name: string,
        public image: string,
        public current_price: number,
        public id: string
    ) {

    }


}