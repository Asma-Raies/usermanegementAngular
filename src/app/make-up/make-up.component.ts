import { Component, OnInit } from '@angular/core';
import {makeUp} from '../model/makeUp.model';
import { AuthService } from '../service/auth.service';
import { MakeUpService } from '../service/make-up.service';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {
 MakeUp?: makeUp[];

  constructor(private MakeUpService : MakeUpService,
    public authService: AuthService) {
   // this.MakeUp =MakeUpService.listeMakeUp ();
  

   }

  ngOnInit(): void {
    this.chargerMakeUp();
  }
  chargerMakeUp(){
    this.MakeUpService.listeMakeUp().subscribe(prods => {
      this.MakeUp = prods;
      this.MakeUp.forEach((prod) => {
      prod.imageStr = 'data:' + prod.images[0].type + ';base64,' +prod.images[0].image;
      });
      });
      }
        
      
  
  
  supprimerMakeUp(m : makeUp){
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.MakeUpService.supprimerMakeUP(m.referenceMakeUp).subscribe(() => {
      console.log("produit supprimé");
      this.chargerMakeUp();
      //this.router.navigate(['makeUp']);
});

  }

}
