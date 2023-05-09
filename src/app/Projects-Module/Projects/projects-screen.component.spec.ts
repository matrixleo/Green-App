import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsScreenComponent } from './projects-screen.component';

describe('ProjectsScreenComponent', () => {
  let component: ProjectsScreenComponent;
  let fixture: ComponentFixture<ProjectsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
