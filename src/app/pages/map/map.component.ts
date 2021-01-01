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
			const marker = new google.maps.Marker({
				position: { lat: this.latitude, lng: this.longitude },
				map,
				title: "Hello World!",
				icon: {
					url: '/assets/logo3.png',
					scaledSize: new google.maps.Size(150, 100), // scaled size
					origin: new google.maps.Point(0,0), // origin
					anchor: new google.maps.Point(0, 0) // anchor
				}
			});
			marker.addListener("click", () => {
				infowindow.open(map, marker);
			});
			const contentString =
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Zero Waste Office</h1>' +
			'<div id="bodyContent">' +
			"<p><b></b>, MORE INFO WILL BE ADDED" +
			"</div>" +
			"</div>";

			const infowindow = new google.maps.InfoWindow({
			content: contentString,
			});
		});
	}
}