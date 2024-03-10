import { Component } from '@angular/core';
import { UserModule } from "../user.module";

@Component({
    selector: 'app-auth-modal',
    standalone: true,
    templateUrl: './auth-modal.component.html',
    styleUrl: './auth-modal.component.css',
    imports: [UserModule]
})
export class AuthModalComponent {

}
