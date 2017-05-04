import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from '../site.service';


@Component({
  selector: 'site-nav',
  template: `
    <site-dropdown [content]="content"></site-dropdown>
    <site-menu></site-menu>
    `
    })
export class SiteNavComponent implements OnInit {

    @Input('content') content: Object;
    
    constructor(private siteService: SiteService) { 
    }

    ngOnInit(): void {
        
    }
}



