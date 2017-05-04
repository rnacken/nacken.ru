import { Component, OnInit }            from '@angular/core';
import { SiteService }                  from './site.service';
import { Subscription }                 from 'rxjs/Subscription';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    {{content}}
    <site-nav [content]="siteContent"></site-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [SiteService]
})
export class AppComponent implements OnInit{
    subscription: Subscription;
    
    constructor(private siteService: SiteService) {}
    
    title: string = 'Nacken.ru portfolio';
    
    siteContent: Object;
    
    private getSiteContent(): void {
        this.siteService.getSiteContent().then(siteContent => this.siteContent = siteContent);
    }
    
    ngOnInit(): void{
        this.getSiteContent();
    } 
}

