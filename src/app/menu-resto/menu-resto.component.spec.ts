import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestoComponent } from './menu-resto.component';

describe('MenuRestoComponent', () => {
  let component: MenuRestoComponent;
  let fixture: ComponentFixture<MenuRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
