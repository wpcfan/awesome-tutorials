import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'trimSpace'
})
export class TrimSpacePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return value.replace(/ /g, '');
  }
}