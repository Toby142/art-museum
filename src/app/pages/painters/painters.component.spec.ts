import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintersComponent } from './painters.component';

describe('PaintersComponent', () => {
  let component: PaintersComponent;
  let fixture: ComponentFixture<PaintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
