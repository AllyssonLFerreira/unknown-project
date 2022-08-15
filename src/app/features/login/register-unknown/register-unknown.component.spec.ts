import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUnknownComponent } from './register-unknown.component';

describe('RegisterUnknownComponent', () => {
  let component: RegisterUnknownComponent;
  let fixture: ComponentFixture<RegisterUnknownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUnknownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
