import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent implements OnInit {

  username: string =''
  today =Date.now();
 
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.username = this.userService.username;

  }

}



