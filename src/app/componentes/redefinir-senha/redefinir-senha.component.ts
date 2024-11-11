import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.css'
})
export class RedefinirSenhaComponent {

  constructor(private router: Router){}

  icons = {
    rightLong: faRightLong,
    leftLong: faLeftLong
  }

  navigateToLogin(){
    this.router.navigate([''])
  }
}
