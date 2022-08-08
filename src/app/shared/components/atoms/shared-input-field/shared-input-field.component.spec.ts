import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInputFieldComponent } from './shared-input-field.component';

describe('SharedInputFieldComponent', () => {
  let component: SharedInputFieldComponent;
  let fixture: ComponentFixture<SharedInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedInputFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
