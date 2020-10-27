import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryPageComponent } from './pantry-page.component';

describe('PantryPageComponent', () => {
  let component: PantryPageComponent;
  let fixture: ComponentFixture<PantryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
