import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signUp',
    component: SignUpComponent,
    data: { animation: 'animationOne' },
  },
  { path: 'signIn', component: SignInComponent, data: { animation: 'animationTwo' } },
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
