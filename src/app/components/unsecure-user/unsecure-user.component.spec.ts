import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsecureUserComponent } from './unsecure-user.component';

describe('UnsecureUserComponent', () => {
  let component: UnsecureUserComponent;
  let fixture: ComponentFixture<UnsecureUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsecureUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsecureUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
