import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NishanthComponent } from './nishanth.component';

describe('NishanthComponent', () => {
  let component: NishanthComponent;
  let fixture: ComponentFixture<NishanthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NishanthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NishanthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
