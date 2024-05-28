import { Component } from "@angular/core";

@Component({
    selector:'mc-loading',
    template:`<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
    styleUrls:['./loading.component.scss']
})
export class LoadingComponent{}