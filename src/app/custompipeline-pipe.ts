import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipeline'
})
export class CustompipelinePipe implements PipeTransform {

  transform(value: string, values: string[]): string {
    return value.length > 0 ? values.join(', ') : 'No values provided';
  }
}
