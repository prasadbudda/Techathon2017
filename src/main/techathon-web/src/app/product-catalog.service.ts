import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
 import 'rxjs/add/operator/map';
 
@Injectable()
export class ProductCatalogService {
  private productsListApiUrl = 'http://localhost:8180/api/v1/products'; 
 
  constructor(private http: Http) { }
  getData() {
    return this.http.get(this.productsListApiUrl)
    .map((res:Response) => res.json());
  }
}