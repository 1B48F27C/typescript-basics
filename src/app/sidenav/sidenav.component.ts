import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, Input } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() currName: string;

  mobileQuery: MediaQueryList;
  currentContent: string;

  items: {};

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.items = [
            {
              label: 'Dashboard'
            },
            {
              label: 'Basic Concepts',
              items: [
                {
                  label: 'Basic types',
                  routerLink: "basictypes"
                },
                {
                  label: 'Variable Declarations',
                  routerLink: "variables"
                },
                {
                  label: 'Interfaces',
                  routerLink: "interfaces"
                },
                {
                  label: 'Classes',
                  routerLink: "classes"
                },
                {
                  label: 'Functions',
                  routerLink: "functions"
                },
                {
                  label: 'Generics',
                  routerLink: "generics"
                },
                {
                  label: 'Enums',
                  routerLink: "enums"
                },
                {
                  label: 'Manipulations with Types',
                  routerLink: "manipulations"
                },
                {
                  label: 'Symbols',
                  routerLink: "symbols"
                },
                {
                  label: 'Iterators and Generators',
                  routerLink: "iterators"
                },
                {
                  label: 'Namespaces and Modules',
                  routerLink: "modules"
                },
                {
                  label: 'Decorators',
                  routerLink: "decorators"
                }
              ]
            },
            {
              label: 'Samples',
              items: []
            }
        ];
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
