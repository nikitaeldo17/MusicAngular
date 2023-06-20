import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  admin:Admin=new Admin();
  constructor(private adminService:AdminService,private route:Router){

  }

  ngOnInit():void{

  }
  onSubmit(){
    this.saveMusic();
    console.log(this.admin);
  }

  saveMusic() {
   
    this.adminService.saveMusic(this.admin).subscribe(data=>
      {
        this.gotoMusicList();
      },
      error=>console.log(error));
  }   
  gotoMusicList() {
    this.route.navigate(['/retrieve']);
  }
    


}

