import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, validar:boolean=true): string {
    if (validar){
      return '*'.repeat(value.length);
    }else{
      return value
    }

  }

}
