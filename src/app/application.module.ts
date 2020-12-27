import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';

import { CommonModule, Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { ApplicationComponent } from './application.component';
import { ApplicationRouter } from './application.routing';

@NgModule({
	declarations: [
		ApplicationComponent
	],
	providers: [
		Location,
		SharedModule,
		Title,
		Meta
	],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'ng-universal-demystified'
		}),
		ApplicationRouter,
		BrowserModule,
		CommonModule,
		CoreModule,
		SharedModule
	],
	bootstrap: [
		ApplicationComponent
	]
})

export class AppServerModule {}