import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {

    @Output() featureSelectect = new EventEmitter<string>();

    onSelect(feature: string) {

        this.featureSelectect.emit(feature);    
    }




}