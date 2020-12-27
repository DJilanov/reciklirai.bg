import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ZeroWasteComponent } from './zero-waste.component';

const ComponentRoutes: Routes = [
	{
		path: '', component: ZeroWasteComponent
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
		ZeroWasteComponent
	],
	exports: [
		ZeroWasteComponent
	]
})



export class ZeroWasteModule {}