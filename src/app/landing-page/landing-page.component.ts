import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  slides = [
    { 'image': 'https://s1.1zoom.me/b5147/716/Underwater_diving_Water_Cave_Uniform_552377_1920x1080.jpg' },
    { 'image': 'https://www.novascotia.com/sites/default/files/2019-05/SurfingatLawrencetown-1920x1080.jpg' },
    { 'image': 'https://www.wallpapers13.com/wp-content/uploads/2018/02/Beach-Koh-Lao-Lading-island-An-Thailand-Beautiful-woman-in-bikini-sitting-on-wooden-swing-summer-wallpaper-for-Desktop-2880X1800.jpg' },
    { 'image': 'https://www.10wallpaper.com/wallpaper/1366x768/1609/Girl_beach_surfing_sun_sea-Fitness_photo_wallpaper_1366x768.jpg' },
    { 'image': 'https://www.greeka.com/photos/cyclades/milos/sports/hero/milos-sports-1920.jpg' }];

  constructor() {

  }

  ngOnInit(): void {
  
  }

}
