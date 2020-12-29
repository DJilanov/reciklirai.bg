import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GrassComponent } from './grass/grass.component';
import { MaterialModule } from '../material-module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		TranslateModule,
		MaterialModule
	],
	declarations: [
		HeaderComponent,
		FooterComponent,
		GrassComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		MaterialModule,
		GrassComponent
	]
})

export class SharedModule {}