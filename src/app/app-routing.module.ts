import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RedefinirSenhaComponent } from './componentes/redefinir-senha/redefinir-senha.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, 
{
  path: 'redefinir-senha',
  component: RedefinirSenhaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
