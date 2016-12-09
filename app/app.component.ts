import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: '[my-app]',
  templateUrl: '../../app/app.component.html'
})

export class AppComponent implements OnInit{
    constructor(private _elRef: ElementRef){}

    ngOnInit():any {
      jQuery(this._elRef.nativeElement).find('#menu').mmenu({
					extensions				: [ 'effect-slide-menu', 'shadow-page', 'shadow-panels' ],
					keyboardNavigation 		: true,
					screenReader 			: true,
					counters				: true,
					navbar 	: {
						title	: 'Menu'
					},
					navbars	: [
						{
							position	: 'top',
							content		: [ 'searchfield' ]
						}, {
							position	: 'top',
							content		: [
								'prev',
								'title',
								'close'
							]
						}, {
							position	: 'bottom',
							content		: [
								'<a href="http://mmenu.frebsite.nl/wordpress-plugin.html" target="_blank">WordPress plugin</a>'
							]
						}
					]
				});
    }
 }
