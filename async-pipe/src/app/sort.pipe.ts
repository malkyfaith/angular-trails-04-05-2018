import { Pipe } from "@angular/core";


@Pipe({
    name: "sort"
})
export class SortPipe {
    transform(array: Array<any>, args: string): Array<any> {
        console.log(array);
        array.sort((a: any, b: any) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        console.log(array);
        return array;
    }
}