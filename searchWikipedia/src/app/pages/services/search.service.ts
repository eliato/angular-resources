import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SearchService {
    constructor( private readonly http: HttpClient){}

    api = 'https://en.wikipedia.org/w/api.php'

    search(term : string):Observable<any>{
    const params = {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: term,
        utf8: '1',
        origin: '*'
    }
    return this.http.get<any>(this.api, { params });
    }
}