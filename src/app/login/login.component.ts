import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from '../services/token/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}
  authService: any;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router, private keycloakService: KeycloakService
    , private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);

        this.reloadPage();
        console.log(this.loginService.decodeToken(this.tokenStorage.getToken()))
      },
      err => {
        console.log(err)
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
