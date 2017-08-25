import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

//Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DataService {

    constructor(public http:Http) {
        console.log("Data Service Connected")
    }

    getPosts() {
        return this.http.get("https://wintermute.design/api/characters")
            .map( res => res.json() )
    }
}
