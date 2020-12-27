import { RouterModule, Routes } from '@angular/router';

const ApplicationRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'map',
		loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule)
	},
	{
		path: 'zero-waste',
		loadChildren: () => import('./pages/zero-waste/zero-waste.module').then(m => m.ZeroWasteModule)
	},
	{
		path: 'questions',
		loadChildren: () => import('./pages/questions/questions.module').then(m => m.QuestionsModule)
	},
	{
		path: 'for-us',
		loadChildren: () => import('./pages/for-us/for-us.module').then(m => m.ForUsModule)
	},
	{
		path: '**',
		loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule)
	}
];

export const ApplicationRouter = RouterModule.forRoot(ApplicationRoutes, { scrollPositionRestoration: 'top' });