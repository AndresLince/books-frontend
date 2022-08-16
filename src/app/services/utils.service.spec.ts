import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';

import { UtilsService } from './utils.service';

var localStorageMock = (function() {
  var store:any = {};
  return {
    getItem: function(key: any) {
      return store[key];
    },
    setItem: function(key:any, value:any) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key:any) {
      delete store[key];
    }
  };
})();


describe('UtilsService', () => {
  let service: UtilsService;
  let storage: any
  let configService: ConfigService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService
      ]
    });
    service = TestBed.inject(UtilsService);
    configService = TestBed.inject(ConfigService)
    storage = {}
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
        return storage[key] ? storage[key] : null
    })
    spyOn(localStorage, 'setItem').and.callFake((key: string, value:string) => {
        return storage[key] = value
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get token should return an empty string', () => {
    const token = service.token;
    expect(token).toBe('')
  })

  it('get token should return the token', () => {
    const tokenValue = 'token'
    //localStorage.setItem(configService.getConfig('token_key'), tokenValue)
    storage[configService.getConfig('token_key')] = tokenValue
    const token = service.token;
    expect(token).toBe(tokenValue)
  });
});
