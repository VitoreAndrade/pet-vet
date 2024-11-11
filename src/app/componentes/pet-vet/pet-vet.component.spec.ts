import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVetComponent } from './pet-vet.component';

describe('PetVetComponent', () => {
  let component: PetVetComponent;
  let fixture: ComponentFixture<PetVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetVetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
