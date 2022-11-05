import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmofadasComponent } from './almofadas.component';

describe('AlmofadasComponent', () => {
  let component: AlmofadasComponent;
  let fixture: ComponentFixture<AlmofadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmofadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmofadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
