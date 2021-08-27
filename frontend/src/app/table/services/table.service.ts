import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TableService {
    private apiUrl = 'http://localhost:5000/movies?';

    constructor(private http: HttpClient) { }

    get(query = "") {
        return this.http.get<any[]>(this.apiUrl + query);
    }
}