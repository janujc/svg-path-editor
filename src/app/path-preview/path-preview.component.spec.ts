import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathPreviewComponent } from './path-preview.component';

describe('PathPreviewComponent', () => {
  let component: PathPreviewComponent;
  let fixture: ComponentFixture<PathPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathPreviewComponent);
    component = fixture.componentInstance;
    component.x = 0;
    component.y = 0;
    component.width = 1;
    component.height = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
