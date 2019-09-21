import { HomePage } from './home';
import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/** lazy load */
@NgModule({

    declarations:[HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})

export class HomeModule{

}