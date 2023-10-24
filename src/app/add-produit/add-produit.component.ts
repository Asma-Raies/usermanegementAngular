import { Component, OnInit } from '@angular/core';
import { makeUp } from '../model/makeUp.model';
import { MakeUpService } from '../service/make-up.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newMakeUp = new makeUp ();
message :string ="";
marques ! :Marque [];
uploadedImage!: File;
imagePath: any;

newIdMarq!:number ;
newMarque ! :Marque ;

  constructor(
              private MakeUpService : MakeUpService ,
               private router : Router) { }

  ngOnInit(): void {
    this.MakeUpService.listeMarque().
    subscribe(marq => {this.marques = marq;
     }
     );}
  addProduitMakeUP(){
    //this.newMakeUp.marque = this.marque.find(marq => marq.idMarq == this.newIdMarq)!;

    this.newMakeUp.marque = this.marques.find(cat => cat.idMarq
      == this.newIdMarq)!;
      this.MakeUpService
      .ajouterProduitsMakeUP(this.newMakeUp)
      .subscribe((prod) => {
      this.MakeUpService
      .uploadImageProd(this.uploadedImage,
      this.uploadedImage.name,prod.referenceMakeUp)
      .subscribe((response: any) => {}
      );
      this.router.navigate(['makeUp']);
      });
      }
    
    
      onImageUpload(event: any) {
        this.uploadedImage = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = (_event) => { this.imagePath = reader.result; }
        }
        
  }


