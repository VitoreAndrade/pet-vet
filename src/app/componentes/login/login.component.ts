import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input() href: string = ''

  icons = {
    lock: faLock,
    user: faUser
  } 

  constructor(private router: Router){}
  navigateToRedefinirSenha (){
    this.router.navigate(['/redefinir-senha'])
  }
}
