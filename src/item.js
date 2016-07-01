import Vue from 'vue';
import Component from 'vue-class-component';
import HtmlTpl from './item.tpl';

@Component({
    template: HtmlTpl,
    props: ['item']
})
export class Item {
    // return initial data
    data() {
        return {
            mytext: 'sample!!!'
        };
    }
}
