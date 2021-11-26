import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AlertModel } from 'src/app/models/alert.model';
declare var $: any;

@Component({
  selector: 'app-si-no',
  templateUrl: './si-no.component.html',
  styleUrls: ['./si-no.component.scss'],
})
export class SiNoComponent implements OnInit, AfterViewInit {
  @Input() alerta!: AlertModel;

  @Output() OK = new EventEmitter();
  @Output() CANCELAR = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    $('.modal').modal();
    
    $('.modal').modal({'dismissible':false});
    $('.modal').modal('open');
  }

  ok() {
    $('.modal').modal('close');
    this.alerta={...this.alerta, estado:false, titulo:'', mensaje:'', metodoCancelar:''};
    this.OK.emit(this.alerta);
  }

  cancelar() {
    $('.modal').modal('close');
    this.alerta={...this.alerta, estado:false, titulo:'', mensaje:'', metodoOK:''};
    this.CANCELAR.emit(this.alerta);
  }

 
}
