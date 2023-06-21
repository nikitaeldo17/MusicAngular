import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeComponent } from './createe.component';

describe('CreateeComponent', () => {
  let component: CreateeComponent;
  let fixture: ComponentFixture<CreateeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
