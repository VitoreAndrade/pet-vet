import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RedefinirSenhaComponent } from './componentes/redefinir-senha/redefinir-senha.component';
import { PetVetComponent } from './componentes/pet-vet/pet-vet.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, 
{
  path: 'redefinir-senha',
  component: RedefinirSenhaComponent
},
{
  path: 'pet-vet',
  component: PetVetComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
