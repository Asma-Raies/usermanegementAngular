import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitMakeUpComponent } from './update-produit-make-up/update-produit-make-up.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarqueComponent } from './liste-marque/liste-marque.component';
import {HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { SearchFiltePipe } from './search-filte.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { TokenInterceptor } from './service/token.interceptor';
import { ListeusersComponent } from './liste-users/liste-users.component';
import { AddRoleUsersComponent } from './add-role-users/add-role-users.component';
import { AddRoleComponent } from './add-role/add-role.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeUpComponent,
    AddProduitComponent,
    UpdateProduitMakeUpComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    
    ListeMarqueComponent,
         UpdateMarqueComponent,
         LoginComponent,
         ForbiddenComponent,
         SearchFilterPipe,
         ListeusersComponent,
         AddRoleUsersComponent,
         AddRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
