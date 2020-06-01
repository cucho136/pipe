import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nombre:string="Capitan America";
   nombre2:string="jeSUs mIGUel HerRerA DiaZ";
   arreglo:number[]=[1,2,3,4,5,6,7,8,9,10];
   PI:number = Math.PI;
   porcentaje:number=0.1234;
   salario:number=1234.5;
   fecha:Date= new Date();
   idioma:string ='es';
   videoUrl:string="https://www.youtube.com/embed/ZHCWuNBZexs";
   activar:boolean=true;

   valorPromesa = new Promise<string>((resolve) =>{
     setTimeout(()=>{
       resolve("llego la data");
     },4500);
   })

   heroe={
     nombre:"logan",
     edad:500,
     clave:'wolverine',
     direccion:{
       calle:"primera",
       casa:20
     }
   }
}
