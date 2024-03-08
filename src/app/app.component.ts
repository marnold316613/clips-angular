import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { NavComponent } from "./nav/nav.component";
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserModule, NavComponent,AuthModalComponent]
})
export class AppComponent {
  title = 'clips';
}
