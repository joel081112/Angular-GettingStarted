//a service is an ordinary class until we register it with an angular injector
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    //this can be called anywhere in the application
    //better tree shaking than old service details
    providedIn: 'root'
})
export class ProductService {
    //to point to an http webserver just use the appropriate url given for the api
    private productUrl = 'api/products/products.json';

    //encapsulate the http in a service
    constructor(private http: HttpClient) { }
    //then expose it in an observable
    getProducts(): Observable<IProduct[]> {
        //observer responds to three types of notifications
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }//this wont do anything till we subscribe

    private handleError(err: HttpErrorResponse){
        let errorMessage = '' ;
        if(err.error instanceof ErrorEvent){
            // A client-side or network error occurred. Handle it accordingly
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else{
            // the backend returned an unsuccessful response code
            // the response bodu may contain clues as to waht went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
        
    }
}//end class