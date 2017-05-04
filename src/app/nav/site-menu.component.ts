import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from '../site.service';


@Component({
  selector: 'site-menu',
  template: `
    <div class="site-nav__menu">
        <ul>
            <li (mouseenter)="changeDropdown($event, 'about')" (mouseleave)="changeDropdown($event, false)" class="site-nav__menu__link">About</li><!--
            --><li (mouseenter)="changeDropdown($event, 'projects')" (mouseleave)="changeDropdown($event, false)" class="site-nav__menu__link">Projects</li><!--
            --><li (mouseenter)="changeDropdown($event, 'contact')" (mouseleave)="changeDropdown($event, false)" class="site-nav__menu__link">Contact</li>
        </ul>
    </div>`,
    styles: [`
        .site-nav__menu {
            position: absolute;
            width: 100%;
            bottom: 40px;
            text-align: center;
        }
        .site-nav__menu > ul {
            display: inline-block;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .site-nav__menu > ul > .site-nav__menu__link {
            display: inline-block;
            padding: 1em 2em;
        }
    `]
    })
export class SiteMenuComponent implements OnInit {

    @Input('content') content: Object;
    
    constructor(private siteService: SiteService) { 
    }

    private changeDropdown(event: Event, navLink: string|boolean = false){
        setTimeout(() => this.siteService.setDropdown(navLink), 100);
    }

    ngOnInit(): void {
        
    }
}





