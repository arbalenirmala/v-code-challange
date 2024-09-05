import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addComma',
    standalone: true
})
export class AddCommaPipe implements PipeTransform {

    transform(value: number): string {
        if (isNaN(value)) return ''; // Return empty string if value is not a number

        const numStr = value.toString();
        const parts = numStr.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return parts.join('.');
    }

}
