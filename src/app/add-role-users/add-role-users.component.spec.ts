import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleUsersComponent } from './add-role-users.component';

describe('AddRoleUsersComponent', () => {
  let component: AddRoleUsersComponent;
  let fixture: ComponentFixture<AddRoleUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
