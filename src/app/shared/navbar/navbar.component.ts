import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isAuth = false;
  inputKeyword = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated().subscribe({
      next: (isAuthenticated) => {
        this.isAuth = isAuthenticated;
      },
      error: (error) => {
        console.error('Error al verificar autenticación:', error);
      },
      complete: () => {
        console.log('Verificación de autenticación completada.');
      },
    });
  }

  login() {
    this.router.navigate(['/auth/login']);
  }
}
