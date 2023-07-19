import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataParentComponent } from './data-parent.component';

describe('DataParentComponent', () => {
  let component: DataParentComponent;
  let fixture: ComponentFixture<DataParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataParentComponent]
    });
    fixture = TestBed.createComponent(DataParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
