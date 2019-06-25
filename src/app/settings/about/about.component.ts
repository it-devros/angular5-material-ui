import { Component, OnInit, ElementRef } from '@angular/core'

declare var $: any
declare var google: any

@Component({
  selector: 'app-settings-about-cmp',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    let myLatlng = new google.maps.LatLng(40.748817, -73.985428)
    const mapOptions = {
      zoom: 8,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
    }
    let map = new google.maps.Map(document.getElementById('regularMap'), mapOptions)
    let marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Regular Map!'
    })
    marker.setMap(map)
  }
}
