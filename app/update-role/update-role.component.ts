import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from '../model/role.model';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  @Input()
  role ! : Role ;
  @Input()
  ajout!:boolean
  @Output()
   RoleUpdated= new EventEmitter<Role>();
  
  
    constructor() { }
  
    ngOnInit(): void {
      console.log("ngOnInit du composant UpdateRole ",this.role);
    }
    saveRole(){
  this.RoleUpdated.emit(this.role);
  
    }
  
  }
  
