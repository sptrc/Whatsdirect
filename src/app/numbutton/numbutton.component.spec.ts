import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbuttonComponent } from './numbutton.component';

describe('NumbuttonComponent', () => {
  let component: NumbuttonComponent;
  let fixture: ComponentFixture<NumbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
