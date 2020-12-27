import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var google;

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

	@ViewChild('MAP') googleMap: ElementRef;

	coordinates = {};

    latitude = 42.710767;
    longitude = 23.377591;
	map: any;

	mapOptions = {
		center: null,
		zoom: 15
	};

	marker;

	isBrowser = false;

	ngAfterViewInit() {
		this.mapInitializer();
	}

	// COMPONENT METHODS
	mapInitializer() {
		if(!google) {
			return;
		}
		this.coordinates = new google.maps.LatLng(this.latitude, this.longitude);
		this.mapOptions.center = this.coordinates;
		this.map = new google.maps.Map(this.googleMap.nativeElement, this.mapOptions);
		this.marker = new google.maps.Marker({
			position: this.coordinates,
			clickable: true,
			map: this.map,
		});
		this.marker.setMap(this.map);
	}
}