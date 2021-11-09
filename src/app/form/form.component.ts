import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  factura = {
    nombre: '',
    nit: ''
  }

  stock = [
    {id: 0, cel: 'Galaxy Z Fold3 5G', cost: 1699},
    {id: 1, cel: 'Galaxy S10+', cost: 1165},
    {id: 2, cel: 'Samsung A80', cost: 772},
    {id: 3, cel: 'Samsung A70', cost: 377},
    {id: 4, cel: 'Samsung A50', cost: 332},

    {id: 5, cel: 'iPhone 13 Pro MAX', cost: 1454},
    {id: 6, cel: 'iPhone 13', cost: 1050},
    {id: 7, cel: 'iPhone 11', cost: 934},
    {id: 8, cel: 'iPhone XR', cost: 819},
    {id: 9, cel: 'iPhone SE (2020)', cost: 564},

    {id: 10, cel: 'Mi 11', cost: 643},
    {id: 11, cel: 'POCO F2 Pro', cost: 576},
    {id: 12, cel: 'Mi 10T Pro', cost: 548},
    {id: 13, cel: 'Redmi Note 10 Pro', cost: 300},
    {id: 14, cel: 'POCO X3 NFC', cost: 221}
  ];

  selected: string = '';

  control: boolean = false;

  Incost: number = 0;
  des: number = 0;
  subt: number = 0;
  des2: number = 0;
  subt2: number = 0;
  total: number = 0;

  celulares =[{cel: '', cost:0}];

  addProducto () {
    var index = this.stock.findIndex(x => x.cel === this.selected);
    var celsl = findObj(this.stock,index);
    if(celsl!=undefined){
      this.celulares.push (celsl);
    }
    
  }

  deleteProducto (index: number){
    this.celulares.splice(index,1);
  }

  calcular(){
    var s = 0;
    this.celulares.forEach((e) => {
      s = s + e.cost;
    });
    this.Incost = s;
    this.des = s * 0.1;
    this.subt = this.Incost - this.des;
    if(this.celulares.length >= 3){
      this.control = true;
      this.des2 = this.subt * 0.15;
      this.subt2 = this.subt - this.des2;
      this.total = this.subt2;
    }else{
      this.total = this.subt;
    }
  }

}


function findObj(stock: { id: number; cel: string; cost: number; }[], index: number) {
  var s;
  stock.forEach((e) => {
      if (e.id === index) {
        s=e;
      }
    });
  return s;

}

