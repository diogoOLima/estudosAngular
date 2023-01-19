import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor:  number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir(){
    console.log('Solicitada nova transferência')
    // console.log('Valor: ', this.valor);
    // console.log("Destino: ", this.destino);
    // this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    const valorEmitir : Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    });
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
