import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCookieComponent } from './liste-cookie.component';

describe('ListeCookieComponent', () => {
  let component: ListeCookieComponent;
  let fixture: ComponentFixture<ListeCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
