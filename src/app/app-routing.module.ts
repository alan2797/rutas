import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { ComponenteTresComponent } from './componente-tres/componente-tres.component';
import { HijoAComponent } from './hijo-a/hijo-a.component';
import { HijoBComponent } from './hijo-b/hijo-b.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'uno',
    component: ComponenteUnoComponent,
    children: [
      {
        path: 'hijo-a',
        component: HijoAComponent,
      },
      {
        path: 'hijo-b',
        component: HijoBComponent,
      },
    ],
  },
  {
    path: 'dos/:id',
    component: ComponenteDosComponent,
  },
  {
    path: 'tres',
    component: ComponenteTresComponent,
  },
  {
    path: 'login/',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
