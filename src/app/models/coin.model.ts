interface ICoin {
    id: string,
    symbol: string,
    name: string
    image?: {
        thumb: string
        small: string
        large: string
    },
    marketData?: {
        currentPrice: {};
    }
}

export class CoinModel implements ICoin {

    constructor(
        public id: string,
        public symbol: string,
        public name: string,
        public image: { thumb: string; small: string; large: string; },
        public marketData: { currentPrice: {} }
    ) {

    }
    

}