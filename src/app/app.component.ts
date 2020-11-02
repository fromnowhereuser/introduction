import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public title = 'introduction';
  // public subtitle = 'how to code with angular';

  public title = undefined;
  public text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, quo?';
  public color = 'red';
  public imagepath = 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=1612396800&v=beta&t=S9-bYCNGo75A5Q2Q3qzId2H5l4Vt7t-FuJJT1rzOtwE';
  public hidden = false;
  public users = new Array<User>();


  constructor() {
    setTimeout(() => {
      this.title = {
        main: 'introduction',
        subtitle: 'how to code with angular'
      }
    }, 0);
    this.users.push(new User("john", "microsoft"))
  }

  public addUser(
    event: MouseEvent,
    p1: string, p2: string
  ) {
    this.users.push(new User(p1, p2));

  }


}
