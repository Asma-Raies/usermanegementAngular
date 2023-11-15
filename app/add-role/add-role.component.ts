import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role.model';
import { MakeUpService } from '../service/make-up.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role !:Role[];
  updatedRole: Role = {"role_id":0,"role":""};
  ajout: boolean =true; 
  
  
    constructor(private authService:AuthService) { }
  
    ngOnInit(): void {
      this.chargerRole();
    }
  
  
  
    
  
  
    chargerRole(){
      this.authService.ListOfRoles().subscribe(rol => {this.role = rol;
    }
    );}
  
  
      RoleUpdated(rol:Role){
        
      console.log("Role updated event",rol);
      this.authService.ajouterRole(rol).
       subscribe( ()=> this.chargerRole());
      }
      
      updateRole(cat:Role) {
        this.updatedRole=cat;
        this.ajout=false;
        }
        
  }
  
