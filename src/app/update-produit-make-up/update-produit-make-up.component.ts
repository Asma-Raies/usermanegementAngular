import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MakeUpService } from '../service/make-up.service';
import { makeUp } from '../model/makeUp.model';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-update-produit-make-up',
  templateUrl: './update-produit-make-up.component.html',
  styles: [
  ]
})
export class UpdateProduitMakeUpComponent implements OnInit {
  currentProduit = new makeUp();
  marques!:Marque[];
  updatedMarqId!:number ;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
             private MakeUpService : MakeUpService) { }

  ngOnInit(): void {  
 
 this.MakeUpService.consulterProduitMakeUp(this.activatedRoute.snapshot.params['id']).subscribe( mak => {
  this.currentProduit= mak;
  this.updatedMarqId=mak.marque.idMarq; 
 });
 
 this.MakeUpService.listeMarque().
 subscribe(marq => {this.marques = marq;
  }
  );}
  updateMakeUp()
  { //console.log(this.currentProduit);
 // this.currentProduit.marque=this.MakeUpService.consulterMarque(this.updatedMarqId)
 this.currentProduit.marque = this.marques.find(cat => cat.idMarq == 
  this.updatedMarqId)!;
  this.MakeUpService
  .updateMakeUp(this.currentProduit)
  .subscribe((prod) => {
  this.router.navigate(['makeUp']);
  });

  

 
  }
  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
    onAddImageProduit() {
      this.MakeUpService.uploadImageProd(this.uploadedImage,this.uploadedImage.name,this.currentProduit.referenceMakeUp).subscribe( (img : Image) => {
      this.currentProduit.images.push(img);
      });
      }
      supprimerImage(img: Image){
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.MakeUpService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images 
        const index = this.currentProduit.images.indexOf(img, 0);
        if (index > -1) {
        this.currentProduit.images.splice(index, 1);
        }
        });
        }
        
}
