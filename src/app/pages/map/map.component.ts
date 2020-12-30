import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Loader } from "@googlemaps/js-api-loader"

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
		const loader = new Loader({
			apiKey: "AIzaSyAyKG7uNPA9WC33YXov96Q4clFkiftc2fk",
			version: "weekly",
		  });
		  
		  loader.load().then(() => {
			const map = new google.maps.Map(this.googleMap.nativeElement as HTMLElement, {
			  center: { lat: this.latitude, lng: this.longitude },
			  zoom: this.mapOptions.zoom,
			});
			new google.maps.Marker({
				position: { lat: this.latitude, lng: this.longitude },
				map,
				title: "Hello World!",
			});
		});
	}
}