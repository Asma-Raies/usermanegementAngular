import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { makeUp } from '../model/makeUp.model';
import { MakeUpService } from '../service/make-up.service';
@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
makeup ! :makeUp [];
marque ! : Marque[];
idMarq !:number ;

  constructor(private MakeUpService :MakeUpService) { }

  ngOnInit(): void {
    this.MakeUpService.listeMarque().
    subscribe(marq => {this.marque = marq;
     }
     );}
  

   OnChange(){
    /*console.log(this.idMarq)
    this.makeup=this.MakeUpService.rechercherParMarque(this.idMarq);*/
    this.MakeUpService.rechercherParCategorie(this.idMarq).subscribe(make => {this.makeup=make});
    console.log(this.makeup);
   }
   chargerMakeUp(){
    this.MakeUpService.listeMakeUp().subscribe(make => {
      console.log(make);
      this.makeup=make ; 
    });
  
  } 
  supprimerMakeUp(m : makeUp){
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.MakeUpService.supprimerMakeUP(m.referenceMakeUp!).subscribe(() => {
      console.log("produit supprimé");
      this.chargerMakeUp();
      //this.router.navigate(['makeUp']);
});
  }
}
  
