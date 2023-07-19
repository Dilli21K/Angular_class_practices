import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from '../details/details.component';
import { PipeComponent } from 'src/app/pipe/pipe/pipe.component';
import { LikeComponent } from '../like/like.component';
import { StudentComponent } from '../student/student.component';
import { AccordianComponent } from '../accordian/accordian.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { BookDetailsComponent } from '../data-sharing/book-details/book-details.component';
import { CustomDirective } from '../directive/custom.directive';
import { SampleComponent } from '../directive/sample/sample.component';
import { FormComponent } from '../form/form.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { DataParentComponent } from '../data-sharing-task/data-parent/data-parent.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      { path: 'details', component: DetailsComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'like', component: LikeComponent },
      { path: 'student', component: StudentComponent },
      { path: 'accordian', component: AccordianComponent },
      { path: 'data-share', component: BookDetailsComponent },
      { path: 'custom-directive', component: SampleComponent },
      { path: 'template-driven', component: FormComponent },
      { path: 'data-share-task', component: DataParentComponent },
      { path: 'reactive-form', component: FormTemplateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
