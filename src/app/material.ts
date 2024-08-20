import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatTableModule],
    exports:[MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatTableModule],
})


export class MaterialModule {
    
}
