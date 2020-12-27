import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'Error-Page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss']
})

export class ErrorPageComponent {

	constructor(
		private router: Router
	) {}

	goBack(): void {
		this.router.navigate(['']);
	}

	statusCode: number = 404;
}