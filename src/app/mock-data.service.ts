import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    constructor(private http: HttpClient) { }

    // Simulate fetching data from a backend API
    fetchData(): Observable<any[]> {
        return this.http.get<any>('../assets/mock-data.json');

    }
}
