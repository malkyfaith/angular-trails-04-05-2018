import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule],
})
export class MyCustomMaterialModule {

}
