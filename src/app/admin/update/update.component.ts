import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  musicId: number = 0;
  admin: any;
 
   constructor(private adminService:AdminService,private route:ActivatedRoute,private router:Router){
 
   }
 
   ngOnInit():void{
    this.musicId=this.route.snapshot.params['id'];
    this.adminService.getMusicById(this.musicId).subscribe((admin)=>{this.admin=admin;},(error)=>{console.log("message",error);});
 
   }
  
 
   saveUpdatedMusic(): void {
     this.adminService.saveMusic(this.admin).subscribe(
       (data) => {
        this.gotoMusicList();
      
       },
       (error) => {
         console.log('Error updating music:', error);
       }
     );
   }
   gotoMusicList() {
    this.router.navigate(['retrieve']);
  }
  }


