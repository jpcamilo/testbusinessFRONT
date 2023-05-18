import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    /** Formulario. */
    public formUser!: FormGroup;

    /** id. */
    private id! : number;

    /** List of Users */
    public listUsr!:User[];

    /** Message Error */
    public Error:number =0 ;    

    constructor(private readonly userService: UserService) {
    this.formUser = new FormGroup({
      idUser: new FormControl([])
    });
    this.id=0;
   }


public search(){
this.id = this.formUser.controls['idUser'].value;

if (this.id == 0) {
  this.userService.getListUsers().subscribe({
    next: (listTmpUsr: User[]) => {
      this.listUsr = listTmpUsr;
      this.Error = 1;
  },
  error :() => {
    this.Error = 2;
  }
});
}else{
  this.userService.getUser(this.id.toString()).subscribe({
    next: (listTmpUsr: User) => {
      this.listUsr = [];
      this.listUsr.push(listTmpUsr);
      this.Error = 1;
    },
    error :() => {
      this.Error = 2;
    }
  });
}
}

}
