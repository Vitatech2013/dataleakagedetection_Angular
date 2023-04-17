import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorFilesComponent } from './distributor-files.component';

describe('DistributorFilesComponent', () => {
  let component: DistributorFilesComponent;
  let fixture: ComponentFixture<DistributorFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
