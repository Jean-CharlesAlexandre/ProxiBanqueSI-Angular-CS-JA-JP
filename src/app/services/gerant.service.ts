import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Conseiller } from '../model/conseiller';
import { Gerant } from '../model/gerant';


@Injectable({
    providedIn: 'root'
})
export class GerantService {

    // endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080/ProxiBanqueSI/gerants';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getConseillers(): Observable<Conseiller[]> {
        return this.http.get<Conseiller[]>(this.endpoint + '/conseillers', this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getConseiller(id): Observable<Conseiller> {
        return this.http.get<Conseiller>(this.endpoint + '/conseillers/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getGerant(id): Observable<Gerant> {
        return this.http.get<Gerant>(this.endpoint + '/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
