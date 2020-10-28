import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanCircleComponent } from './span-circle.component';

describe('SpanCircleComponent', () => {
  let component: SpanCircleComponent;
  let fixture: ComponentFixture<SpanCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
