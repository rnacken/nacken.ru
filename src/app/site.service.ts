import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';

import { Subject }      from 'rxjs/Subject';

import { SITE }         from './site-content';

@Injectable()
export class SiteService {
    
    private subject = new Subject<any>();
    subject$ = this.subject.asObservable();
    
    setDropdown(navLink: string|boolean){
        // sets the dropdown to false (no dropdown) or some content, use observable.
        this.subject.next(navLink);
    }

    // for now, I use a promise to get some static data; this can be rebuild with an observable as well.
    getSiteContent(): Promise<any> {
        return Promise.resolve(SITE);
    }
}