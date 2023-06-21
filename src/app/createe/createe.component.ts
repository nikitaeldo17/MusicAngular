import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin/model/Admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-createe',
  templateUrl: './createe.component.html',
  styleUrls: ['./createe.component.css']
})
export class CreateeComponent {
admin:Admin=new Admin();
constructor(private adminservice:AdminService,private route:Router){}
onSubmit(){
  this.saveMusic;
  console.log(this.admin);
}
saveMusic(){
  this.adminservice.saveMusic(this.admin).subscribe(data=>{ 
    this.gotoMusicList();},
    error=>console.log(error));
}
gotoMusicList(){
  this.route.navigate(['/retrieve']);
}
  

}
