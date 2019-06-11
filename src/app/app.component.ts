import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormArray, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  precio: number = 690;
  selectedPersona = 2;
  totalPrecioN: number = 0;
  totalPrecioA: number = 0;
  numeroPersonasTotal: number[]; 
  
  data: any[];
  forma : FormGroup;
  formaB : FormGroup;

  constructor(){
    this.numeroPersonasTotal = [ 1, 2, 3, 4, 5, 6, 7 ];
    console.log(this.precio, this.selectedPersona);
  }

  ngOnInit() {

    this.forma = new FormGroup( {
      forma_control : new FormControl('')
      }
    );

    this.formaB = new FormGroup( {
      formaB_control : new FormControl('')
      }
    );
  
    
    console.log(this.precio, this.selectedPersona);
  }
  
  totalPrecio(persona: number) {
    this.totalPrecioA = this.precio * persona;
  }
  
  // guardarReserva() {
  //   this.fs.saveReserva(this.forma.value);
  //   console.log(this.forma.value);
  // }

  setTotalPrecisioN(selectedPersonaN: number) {
    console.log(selectedPersonaN);
    this.totalPrecioN = this.precio * selectedPersonaN;
 }
}
