import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLinkFieldComponent } from './shared-link-field.component';

describe('SharedLinkFieldComponent', () => {
  let component: SharedLinkFieldComponent;
  let fixture: ComponentFixture<SharedLinkFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLinkFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLinkFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
