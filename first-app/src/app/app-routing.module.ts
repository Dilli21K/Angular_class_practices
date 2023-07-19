import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { PipeComponent } from './pipe/pipe/pipe.component';
import { LikeComponent } from './component/like/like.component';
import { StudentComponent } from './component/student/student.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AccordianComponent } from './component/accordian/accordian.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  {
    path: 'customer-dashboard',
    loadChildren: () =>
      import('./component/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },

  // { path: '', redirectTo: '/details', pathMatch: 'full' },
  // { path: 'details', component: DetailsComponent },
  // { path: 'pipe', component: PipeComponent },
  // { path: 'like', component: LikeComponent },
  // { path: 'student', component: StudentComponent },
  // { path: 'accordian', component: AccordianComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
