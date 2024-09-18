import { Component, OnInit } from '@angular/core';
import { ViaCepService } from '../services/viacep.service';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})

export class HomePage  {
cep: string = '';
uf: string = '';
cidade: string = '';
logradouro: string = '';
resultado: any;
resultado2: any;
constructor(private viaCepService: ViaCepService) {}
buscarCep() {
this.viaCepService.buscarCep(this.cep).subscribe((dados) => {
  this.resultado = dados;
  }, (erro) => {
  console.error('Erro ao buscar CEP', erro);
}
);
}
buscarEndereco() {
this.viaCepService.buscarEndereco(this.uf, this.cidade,
this.logradouro).subscribe(
(dados) => {
this.resultado2 = dados;
},
(erro) => {
console.error('Erro ao buscar endereço', erro);
}
);
}
}
