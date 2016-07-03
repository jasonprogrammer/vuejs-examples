import Vue from 'vue';
import Component from 'vue-class-component';
import HtmlTpl from './menu.tpl';

@Component({
    template: HtmlTpl,
    props: ['menu']
})
export class Menu {
    // return initial data
    data() {
        return {
            // menu: {
            //      items: []
            // }
        };
    }
}
