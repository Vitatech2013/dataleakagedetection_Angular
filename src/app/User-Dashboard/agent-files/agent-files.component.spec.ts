import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentFilesComponent } from './agent-files.component';

describe('AgentFilesComponent', () => {
  let component: AgentFilesComponent;
  let fixture: ComponentFixture<AgentFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
