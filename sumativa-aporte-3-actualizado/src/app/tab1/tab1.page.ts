import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  si = [
    { 
      title:"ARE YOU LIVE", 
      desc:"Estan en busqueda de daniel, pero no lo encuentran porque es tan pequeño que bueno se les dificulta",
      img:"https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"}, 
    {
      title:"Boly?", 
      desc:"¡Hola! En las noticias de hoy, el Club San Martín ha comenzado su actividad de Vóley Recreativo. Este espacio está abierto para todos aquellos que quieran practicar este deporte, independientemente de su edad ", 
      img:"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2020/09/30/jonathan-galindo-el-espeluznante-goofy-humano-que-propone-retos-virales-muy-peligrosos.jpeg"}, 
    {
      title:"Blue Label sensacion en los jovenes", 
      desc:"El mejor del mundo, el Blue Label de Johnnie Walker. Un Johnnie Walker etiqueta negra lo tomo, pero cuando es algo especial un Blue Label. Es un elixir (sic). Y el otro es un whisky: uno se toma, el otro se saborea. El etiqueta negra para tomar fuerte después de las seis y el Blue Label para cualquier hora dicen ahora los jovenes", 
      img:"https://m.media-amazon.com/images/I/61kW7nB0ogL._AC_UF894,1000_QL80_.jpg"
    }
  ]
  
  constructor() {}

}
