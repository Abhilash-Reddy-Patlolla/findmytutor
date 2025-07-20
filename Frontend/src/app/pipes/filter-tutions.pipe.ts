import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTuitions',
  standalone: true
})
export class FilterTuitionsPipe implements PipeTransform {
  transform(items: any[], search: string): any[] {
    if (!search) return items;

    search = search.toLowerCase();
    return items.filter(t => 
      t.subject?.toLowerCase().includes(search) ||
      t.location?.toLowerCase().includes(search)
    );
  }
}
