import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(array: any[],[SortBy,Dir] : any)
  {
    array.sort((a: any, b: any) =>
    {
      if (a[SortBy] > b[SortBy]) {
        return 1 * Dir;//we switch ascending and descending by multiply x -1
      }
      if (a[SortBy] < b[SortBy]) {
        return -1 * Dir;//we switch ascending and descending by multiply x -1
      }
      return 0;
    });
    return array;
  }

}
