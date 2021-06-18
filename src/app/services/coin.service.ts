import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  // For exchange
  getAvailableCoinsList() {
    const URL = "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
    this.http.get(URL).subscribe(data => {
      console.log(data)
      return true
    })
  }
  
  getCoinVsCurrencyComparison(coinId: string, currencyId: string) {
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currencyId + "&ids=" + coinId + "&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    this.http.get(URL).subscribe(data => {
      console.log(data)
    })
  }
  

  getCoinData(coinSymbol: string) {
    const URL = "https://api.coingecko.com/api/v3/coins/" + coinSymbol + "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
    this.http.get(URL).subscribe(data => {
      console.log(data)
    })
  }
}
