import { Component } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.development';
import { MaterialModule } from '../../material/material-module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-component',
  imports: [
    MaterialModule,
    MatCardModule
  ],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {
  username: string;

  constructor(private menuService: MenuService){

  }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const token = sessionStorage.getItem(environment.TOKEN_NAME);
    const decodedToken = helper.decodeToken(token);

    this.username = decodedToken.sub;

    this.menuService.getMenusByUser(this.username).subscribe(data => {
      this.menuService.setMenuChange(data);
    });
  }
}
