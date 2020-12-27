import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionsComponent } from './questions.component';

const ComponentRoutes: Routes = [
	{
		path: '', component: QuestionsComponent
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
		QuestionsComponent
	],
	exports: [
		QuestionsComponent
	]
})



export class QuestionsModule {}