import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarInfo: any[] = [
    {
      id: 1,
      pathName: '/customer-dashboard/details',
      label: 'Display Content -Binding & Event handling',
    },
    {
      id: 2,
      pathName: '/customer-dashboard/pipe',
      label: 'Inbuild - Custom Pipe',
    },
    { id: 3, pathName: '/customer-dashboard/like', label: 'Review Star -task' },
    { id: 3, pathName: '/customer-dashboard/student', label: 'Student' },
    { id: 4, pathName: '/customer-dashboard/accordian', label: 'Accordian' },
    {
      id: 5,
      pathName: '/customer-dashboard/data-share',
      label: 'Data Sharing',
    },
    {
      id: 6,
      pathName: '/customer-dashboard/custom-directive',
      label: 'Custom Directive',
    },
    {
      id: 7,
      pathName: '/customer-dashboard/template-driven',
      label: 'Template Driven',
    },
    {
      id: 8,
      pathName: '/customer-dashboard/data-share-task',
      label: 'Data Sharing Task',
    },
    {
      id: 9,
      pathName: '/customer-dashboard/reactive-form',
      label: 'Reactive Form',
    },
  ];
}
