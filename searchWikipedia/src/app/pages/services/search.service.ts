import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pluck } from "rxjs";

interface WikiResponse {
    query: {
        search: Article[]
    }
}

export interface Article {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
}

@Injectable({providedIn: 'root'})
export class SearchService {
    constructor( private readonly http: HttpClient){}

    api = 'https://en.wikipedia.org/w/api.php'

    search(term : string):Observable<Article[]>{
    const params = {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: term,
        utf8: '1',
        srlimit: 15,
        origin: '*'
    }
    return this.http.get<WikiResponse>(this.api, { params })
    .pipe(
        pluck('query', 'search')
    );
    }
}