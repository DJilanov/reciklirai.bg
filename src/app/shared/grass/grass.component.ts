import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-grass',
	templateUrl: './grass.component.html',
	styleUrls: ['./grass.component.scss']
})

export class GrassComponent {
	_blades = [];
	
	@Input() set blades(value: number) {
		this._blades = new Array(value);
	}

	@Input() size = 'small';
	@Input() top = 0;
	@Input() full = false;
}