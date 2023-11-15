import { Component, OnInit } from '@angular/core';
import { MakeUpService } from '../service/make-up.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styles: [
  ]
})
export class ListeMarqueComponent implements OnInit {
marque !:Marque[];
updatedMarq : Marque = {"idMarq":0,"nomMarq":""};
ajout: boolean =true; 


  constructor(private makeUpService : MakeUpService) { }

  ngOnInit(): void {
    this.chargerMarque();
  }



  


  chargerMarque(){
    this.makeUpService.listeMarque().
 subscribe(marq => {this.marque = marq;
  }
  );}


    marqueUpdated(marq:Marque){
      
    console.log("marque updated event",marq);
    this.makeUpService.ajouterMarque(marq).
     subscribe( ()=> this.chargerMarque());
    }
    
    updateMarq(cat:Marque) {
      this.updatedMarq=cat;
      this.ajout=false;
      }
      
}
