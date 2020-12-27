import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ForUsComponent } from './for-us.component';

const ComponentRoutes: Routes = [
	{
		path: '', component: ForUsComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		RouterModule.forChild(ComponentRoutes)
	],
	declarations: [
		ForUsComponent
	],
	exports: [
		ForUsComponent
	]
})



export class ForUsModule {}