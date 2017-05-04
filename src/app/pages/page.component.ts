import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from './../site.service';


@Component({
  selector: 'page',
  template: `
    <div class="site-page">
        site content
    </div>`,
    styles: [`
    `]
    })
export class PageComponent implements OnInit {

    //@Input('content') content: Object;
    
    constructor(private siteService: SiteService) { 
    }

    ngOnInit(): void {
        
    }
}





