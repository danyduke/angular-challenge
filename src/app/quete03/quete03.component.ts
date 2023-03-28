import { Component } from '@angular/core';

@Component({
  selector: 'app-quete03',
  templateUrl: './quete03.component.html',
  styleUrls: ['./quete03.component.css'],
})
export class Quete03Component {
  isAdmin: boolean = true;
  changeStatus() {
    this.isAdmin = !this.isAdmin;
  }
}
