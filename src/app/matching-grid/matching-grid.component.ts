import { Component } from '@angular/core';
import { userList, UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-grid',
  templateUrl: './matching-grid.component.html',
  styleUrls: ['./matching-grid.component.css']
})
export class MatchingGridComponent {
  users = new UserList();
}
