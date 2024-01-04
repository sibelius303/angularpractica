import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrar: boolean = true;

  onChangeMostral(){
    if(this.mostrar){
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
    
  }

  title = 'Hola mundo en angular';
}
