import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAngularComponent } from './modulo-angular.component';

describe('ModuloAngularComponent', () => {
  let component: ModuloAngularComponent;
  let fixture: ComponentFixture<ModuloAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
