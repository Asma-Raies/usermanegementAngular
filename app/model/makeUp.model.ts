import { Marque } from "./marque.model";
import { Image } from "./image.model";
export  class makeUp {
    referenceMakeUp! : number ;
    nomMakeUp?: string ;
    prixMakeUp ?: number ;
    quantite? : number;
    marque!:Marque ;
    image! : Image;
    imageStr!:string;
    images!: Image[];

    
    
}