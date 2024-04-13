import { Component, ViewChild } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private database:Database) {
  }
  ngOnInit(){
    const route = ref(this.database, "botones/btn1");
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn1 = valores_db;
    });
    const route1 = ref(this.database, "botones/btn2");
    object(route1).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn2 = valores_db;
    });
    const route2 = ref(this.database, "botones/btn3");
    object(route2).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn3 = valores_db;
    });
    const route3 = ref(this.database, "botones/btn4");
    object(route3).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn4 = valores_db;
    });
    const route4 = ref(this.database, "botones/btn5");
    object(route4).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn5 = valores_db;
    });
    const route5 = ref(this.database, "botones/btn6");
    object(route5).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.btn6 = valores_db;
    });
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  btn1:boolean=false;
  btn2:boolean=false;
  btn3:boolean=false;
  btn4:boolean=false;
  btn5:boolean=false;
  btn6:boolean=false;
  active:any;
  btn1click(){
    this.active = 1;
    this.isModalOpen = true;
  }
  btn2click(){
    this.active = 2;
    this.isModalOpen = true;
  }
  btn3click(){
    this.active = 3;
    this.isModalOpen = true;
  }
  btn4click(){
    this.active = 4;
    this.isModalOpen = true;
  }
  btn5click(){
    this.active = 5;
    this.isModalOpen = true;
  }
  btn6click(){
    this.active = 6;
    this.isModalOpen = true;
  }
}
