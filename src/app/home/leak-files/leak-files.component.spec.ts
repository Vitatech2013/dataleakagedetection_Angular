import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakFilesComponent } from './leak-files.component';

describe('LeakFilesComponent', () => {
  let component: LeakFilesComponent;
  let fixture: ComponentFixture<LeakFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeakFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeakFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
