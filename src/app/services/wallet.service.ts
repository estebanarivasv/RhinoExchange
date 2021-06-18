import { Injectable } from '@angular/core';
import { TransactionModel } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }
  
  getWalletData() { }
  
  // TODO: Validate if wallet name exists.
  createWallet() { }
  
  deleteWallet() { }
  
  addTransaction(transaction: TransactionModel) { }
  
  modifyTransaction(index: number) { }
  
  deleteTransaction(index: number) { }

  getAllWallets() {}
  
}
