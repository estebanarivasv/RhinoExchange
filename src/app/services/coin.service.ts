import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinModel } from '../models/coin.model';



@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  getAvailableCoinIds(): Observable<Array<string>> {
    const URL = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    return this.http.get<Array<string>>(URL);
  }

  getMarketByTargetCoin(coinSymbol: string): Observable<Array<CoinModel>> {
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + coinSymbol + "&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    return this.http.get<Array<CoinModel>>(URL);
  }
  
}
