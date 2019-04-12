import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:8000/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQzYTE2N2I1YTc5ZmYyNTkwMjcxMTZmYWU2YWNhZjM2MDJiNTIxOTYzODFjMzE4OTEwMmJlM2Y2ZTY3NzcwZjQ2MmY2ZWU4Njg4NTkxNjgyIn0.eyJhdWQiOiIxIiwianRpIjoiZDNhMTY3YjVhNzlmZjI1OTAyNzExNmZhZTZhY2FmMzYwMmI1MjE5NjM4MWMzMTg5MTAyYmUzZjZlNjc3NzBmNDYyZjZlZTg2ODg1OTE2ODIiLCJpYXQiOjE1NTUwODg0NzUsIm5iZiI6MTU1NTA4ODQ3NSwiZXhwIjoxNTg2NzEwODc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.U5D-EEdAPM7zz8vxgKcna4Pj1noLhkfV7uWnlkaOE2qKTQ1pikMmO3wqfjxuteyh8xfUgY14LpT9S6syIMEYGQKJgJbv5HmCQGnf0Fy-O524b3HXhMtT9pJw-_vZGwq4j_MUlOB5ZLHaBdP0qCzjG16UGFIGlwQSwB-vBf3cGzv2ALV_JHuf-1Y94Rbngg3rXCOQ6jfCl2qhvIr_6UrvQyQIEktcGYi7-rblA8DWl_Mx3CZrFEI76gFMbGxNzOzezsFAzdPrUbLSNmjbbUeTVo6OrJRJvs5YUckF6PDgKP6LiOjboBUX2yagM9MAX6F_W-mIub6je9-O2vMsTlAh1_3BkWG-SFLra28o_txmv2hFpnWNUPHjGuZsw5nPYAA_8ryoMd5Rs67wAaSAY59lLgkxDlLs_471vwOjwSxKqLWQl6G2l-jcglCcSfqJgwHEKZeY8z2BY9Vd_c2qy3kLm5hbPYrDzMGDDxqVQMWJnvf8FfTIUfvDbycTdZ2J8TbKgPSjKA_u-lYAMMsz0_eXWMnrgpl9485o9mrhmhgFYEUmiBsdoNeVNaxcMiFZJuWAj8xJcIlqoG3g8guVNa5Zx7_21l01ON2zAttrJ2b0qHj8Gn46FzxOVYg0PTKAy84u_mPtRo8pgQlRbyEf1caO2IG6HTLQWZDynN9Pp3SU8Eo',
  })
};

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private http: HttpClient
	) { }

	getProducts(): Observable<any> {
	  return this.http.get(endpoint + '/products', httpOptions).pipe(
	    map(this.extractData));
	}

	getProduct(id): Observable<any> {
	  return this.http.get(endpoint + '/products/'+id, httpOptions).pipe(
	    map(this.extractData));
	}

	login(user): Observable<any> {
	  return this.http.post(endpoint + '/auth/login', JSON.stringify(user), httpOptions).pipe(
	    tap((user)=> console.log('login')),
	    catchError(this.handleError<any>('updateProduct'))
	  );
	}

	storeProduct (product): Observable<any> {
		console.log(product);
	  return this.http.post(endpoint + '/products', JSON.stringify(product), httpOptions).pipe(
	    tap((product)=> console.log(product)),
	    catchError(this.handleError<any>('updateProduct'))
	  );
	}

	updateProduct (id, product): Observable<any> {
		console.log(product);
	  return this.http.put(endpoint + '/products/' + id, JSON.stringify(product), httpOptions).pipe(
	    tap((product)=> console.log(product)),
	    catchError(this.handleError<any>('updateProduct'))
	  );
	}

	deleteProduct (id): Observable<any> {
	  return this.http.delete<any>(endpoint + '/products/' + id, httpOptions).pipe(
	    tap(_ => console.log(`deleted product id=${id}`)),
	    catchError(this.handleError<any>('deleteProduct'))
	  );
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		//return Observable.throw(error);
	}

	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
}
