import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RedefinirSenhaComponent } from './componentes/redefinir-senha/redefinir-senha.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PetVetComponent } from './componentes/pet-vet/pet-vet.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ProdutoServicoComponent } from './componentes/produto-servico/produto-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RedefinirSenhaComponent,
    PetVetComponent,
    CabecalhoComponent,
    ProdutoServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
