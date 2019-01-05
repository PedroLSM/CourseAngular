import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlepipe'
})
export class TitlePipe implements PipeTransform {
    transform(text: string, args?: any) {
        let textArray = text.toLowerCase().split(' ');
        textArray.forEach((tx, i) => {
            tx = tx.charAt(0).toUpperCase() + tx.slice(1);
            if(i > 0 && (tx === "Of" || tx === 'The' || tx === 'In')){
                tx = tx.toLowerCase();
            }
            textArray[i] = tx;
        });
        return textArray.join(" ");
    }
}