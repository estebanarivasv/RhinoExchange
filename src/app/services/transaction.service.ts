import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  createTransaction() { }
  
  deleteTransaction(timestamp: string) { }
  
  modifyTransaction(timestamp: string) { }

  getAvailableCurrencies() {
    const URL = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"

    this.http.get(URL).subscribe(data => {
      console.log(data)
    })

  }
}
