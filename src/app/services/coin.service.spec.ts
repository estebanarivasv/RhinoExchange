import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CoinService } from './coin.service';

describe('CoinService', () => {
  let service: CoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(CoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data on console', () => {
    
    expect(service.getAvailableCoinsList()).toBeTruthy()
  });
});
