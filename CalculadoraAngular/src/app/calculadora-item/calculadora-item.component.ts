import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-item',
  templateUrl: './calculadora-item.component.html',
  styleUrls: ['./calculadora-item.component.scss']
})
export class CalculadoraItemComponent implements OnInit {

  constructor() {
    var InputValueReal:number;
  }

  ngOnInit(): void {
  }

  onKey(event:any) {
    const inputValue = event.target.value;
    // console.log(inputValue);
    var keyCode = event.code || event.key;
    if (keyCode == 'Enter'){
      this.setResult();
    }
  }

  setResult(){
    let resp = this.getResult();
    if(resp){
      //@ts-ignore
      document.getElementById('answerInput').value = resp;
      //@ts-ignore
      document.getElementById('answerInput').classList.remove("invalid");
    } else {
      //@ts-ignore
      document.getElementById('answerInput').classList.add("invalid");
    }
  }

  empty(){
    //@ts-ignore
    document.getElementById('answerInput').value = "";
  }

  is_numeric(str:string){
    return /^\d+$/.test(str) || str==".";
  }
 
  is_space(str:string){
    return /\s/.test(str);
  }

  is_operation(str:string){
    if(str == "+" || str == "-" || str == "/" || str == "*"){
      return true;
    } else{
      return false;
    }
  }

  getResult(){
    //@ts-ignore
    var value:string = document.getElementById('answerInput').value;
    var values:any = [];
    var operations:any = [];
    var lastIsValue:boolean = false;
    var correct:boolean = true;
    var order = ["*","/","+","-"];
    for (const c of value) {
      if(!this.is_space(c)){
        if(this.is_numeric(c)){
          if(lastIsValue){
            values[values.length-1] = values[values.length-1]+c;
          } else {
            values.push(c);
            lastIsValue=true;
          }
        } else if(this.is_operation(c) && lastIsValue){
          operations.push(c);
          lastIsValue=false;
        } else {
          correct = false;
        }
        // console.log(values);
        // console.log(operations);
      }
    }

    if(correct && lastIsValue) {

      for (const o of order) {

        for(var i = 0; i < operations.length; i++) {

          var item = operations[i];
          if(item == o){
            values[i] = this.calculate(+values[i], item, +values[i+1])?.toString();
            values.splice(i+1, 1);
            operations.splice(i, 1);
            i--;
          }

        }

      }
      return values[0];

    } else {
      return false;
    }
  }

  calculate(value1:number, ope:string, value2:number){
    if(ope == "+"){
      return value1 + value2;
    } else if(ope == "-"){
      return value1 - value2;
    } else if(ope == "*"){
      return value1 * value2;
    } else if(ope == "/"){
      return value1 / value2;
    }
  }

  setValue(value:string){
    //@ts-ignore
    document.getElementById('answerInput').value = document.getElementById('answerInput').value + value;
  }

}
