import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { MakeUpService } from '../service/make-up.service';
import { makeUp } from '../model/makeUp.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
   MakeUp!:makeUp[];
   AllMakeUp ! : makeUp[];
   nomMakeUp!: string ;
  searchTerm!:string ;
  constructor(private MakeUpService :MakeUpService) { }

  ngOnInit(): void {
    this.MakeUpService.listeMakeUp().subscribe(make =>{
    console.log(make);
   this.MakeUp=make ; });

  }
  rechercherMake(){
    this.MakeUpService.rechercherParNom(this.nomMakeUp).
    subscribe(prods => {
    this.MakeUp = prods;
    console.log(prods)});
    }
    onKeyUp(filterText : string){
      this.MakeUp = this.AllMakeUp.filter(item => item.nomMakeUp!.toLowerCase().includes(filterText));
      }
      
}
  

