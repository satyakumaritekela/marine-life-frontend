import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotService } from './../../services/spot.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {

  searchword: any;
  spots:any[];

  constructor(private router: Router, private SpotService: SpotService) { }

  ngOnInit(): void {

    this.SpotService.getAllSpots().subscribe((data)=>{
      console.log(data)
      this.spots=data
    })
  }
  viewDoctor(id){
    this.router.navigate(['/spot',id])
  }

}
