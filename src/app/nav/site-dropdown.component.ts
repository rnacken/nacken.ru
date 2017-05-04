import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SiteService } from '../site.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
    selector: 'site-dropdown',
    template: `
    <div 
        [ngClass]="{'dropdown-shown': dropdownShown}" 
        (mouseenter)="setOnDropdown(true)" 
        (mouseleave)="setOnDropdown(false)" 
        class="site-dropdown">
            <div [innerHtml]="innerHtml">{{content}}</div>
    </div>
        `,
    styles: [`
        .site-dropdown {
            position: absolute;
            display: inline-block;
            bottom: 100px;
            left: 40%;
            
            padding: 1em;
            color: black;
            
            background-color: white;
            box-shadow: 1px 1px 5px #333;
            
            opacity: 0;
            -webkit-transition: all 200ms;
            transition: all 200ms;
        }
        .dropdown-shown {
            opacity: 1;
        }
    `]
    })
export class SiteDropdownComponent implements OnInit, OnDestroy {
    
    private onDropdown: boolean = false;
    private dropdownContent: string;   
    private dropdownShown: boolean = false;
    private innerHtml: string;
    
    @Input('content') content: Object;
    
    subscription: Subscription;

    setOnDropdown(onDropdown: boolean){
        if (this.dropdownShown){
            this.onDropdown = onDropdown;
            this.dropdownShown = onDropdown;
        }
    }
    constructor(private siteService: SiteService) { 
        // subscribe to subject
        this.subscription = this.siteService.subject$.subscribe(dropdownContent => {
            if (!this.onDropdown){ 
                // user is currently off the dropdown, so hide/change it
                if (dropdownContent === false){
                    this.dropdownShown = false;
                    this.dropdownContent = '';
                } else { 
                    this.dropdownShown = true;
                    this.dropdownContent = dropdownContent;
                    
                    // update dropdown content
                    this.innerHtml = this.content[dropdownContent];
                }
            } 
        });
    }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}



