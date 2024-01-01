import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionComponent } from './peticion.component';

describe('PeticionComponent', () => {
  let component: PeticionComponent;
  let fixture: ComponentFixture<PeticionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeticionComponent]
    });
    fixture = TestBed.createComponent(PeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
