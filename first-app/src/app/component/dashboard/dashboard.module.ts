import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { FooterComponent } from '../footer/footer.component';
import { LikeComponent } from '../like/like.component';
import { PipeComponent } from 'src/app/pipe/pipe/pipe.component';
import {
  DecrementPipe,
  IncrementPipe,
  SumPipe,
} from 'src/app/pipe/custom/custom.pipe';
import { TimerComponentComponent } from '../timer-component/timer-component.component';
import { TimerServiceService } from 'src/app/service/timer-service.service';
import { VisibilityDirective } from '../directive/visibility.directive';
import { FormComponent } from '../form/form.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { BookDetailsComponent } from '../data-sharing/book-details/book-details.component';
import { BookListComponent } from '../data-sharing/book-list/book-list.component';
import { DataParentComponent } from '../data-sharing-task/data-parent/data-parent.component';
import { ContactInfoComponent } from '../data-sharing-task/contact-info/contact-info.component';
import { WorkInfoComponent } from '../data-sharing-task/work-info/work-info.component';
import { PersonalInfoComponent } from '../data-sharing-task/personal-info/personal-info.component';
import { MaterialModule } from '../shared/material/material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    DetailsComponent,
    FooterComponent,
    LikeComponent,
    PipeComponent,
    SumPipe,
    IncrementPipe,
    DecrementPipe,
    TimerComponentComponent,
    VisibilityDirective,
    DataParentComponent,
    ContactInfoComponent,
    WorkInfoComponent,
    PersonalInfoComponent,
    FormComponent,
    FormTemplateComponent,
    BookDetailsComponent,
    BookListComponent,
  ],
  providers: [TimerServiceService],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class DashboardModule {}
