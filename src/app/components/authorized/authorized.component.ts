import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  code = '';
  token = '';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.code = data['code'];
      const code_verifier = this.tokenService.getVerifier();
      this.tokenService.removeVerifier();
      this.accessToken(this.code, code_verifier);
    });
  }

  accessToken(code: string, code_verifier: string) {
    this.authService.getAccessToken(code, code_verifier).subscribe(
      data => {
        this.tokenService.setTokens(data.access_token, data.refresh_token);
        this.router.navigate(['']);
      },
      error => {
        console.log('error when taking token:', error);
      },
      () => {

      }
    );
  }

}
