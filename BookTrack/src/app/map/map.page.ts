import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx'; 
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  places : Array<any>;
  constructor(private geolocation : Geolocation) { }


  
  getUserPosition(){
    this.options = {
        enableHighAccuracy : false
    };

    // this.addMap(33.788083, -84.304317);
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;      
        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
  }

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.getBookStores(latLng).then((results : Array<any>)=>{
      this.places = results;
      for(let i = 0 ;i < results.length ; i++)
      {
        this.createMarker(results[i]);
        
      }
    },(status)=>console.log(status));
  }

  getBookStores(latLng){
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location : latLng,
      radius : 8047 ,
      types: ["book_store"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK){
              resolve(results);    
            }
            else{
              reject(status);
            }
        }); 
    });
  }

  createMarker(place){
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location,
    label: place.name
    });
  }

  async centerOnShop(placeID){
    console.log("clicked!" + placeID);


  }
  ngOnInit() {
    this.getUserPosition();
  }

}
