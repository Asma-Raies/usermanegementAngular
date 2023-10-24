import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role.model';
import { MakeUpService } from '../service/make-up.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  newRole = new Role ();
  message :string ="";
  
  
  newIdMarq!:number ;
  newRole! :Role ;
  
    constructor(
                private usersService : MakeUpService ,
                 private router : Router) { }
  
    ngOnInit(): void {
      }
    addRole(){
      //this.newMakeUp.marque = this.marque.find(marq => marq.idMarq == this.newIdMarq)!;
  this.newRole
   
        this.MakeUpService
        .ajouterProduitsMakeUP(this.newMakeUp)
        .subscribe((prod) => {
      
        
        this.router.navigate(['makeUp']);
        });
        }
      
}
