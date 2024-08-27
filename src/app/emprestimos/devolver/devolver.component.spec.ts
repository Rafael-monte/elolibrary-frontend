import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverComponent } from './devolver.component';

describe('DevolverComponent', () => {
  let component: DevolverComponent;
  let fixture: ComponentFixture<DevolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
