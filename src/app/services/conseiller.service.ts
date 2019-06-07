import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Conseiller } from '../model/conseiller';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConseillerService {

    endpoint = 'http://localhost:3000';
    // endpoint = 'http://localhost:8080/ProxiBanqueSI';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    createClient(client: Client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getClient(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + id)
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

    deleteClient(id) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateClient(id, client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/' + id, JSON.stringify(client), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
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
