import Vue from 'vue';
import Component from 'vue-class-component';
import AppTemplate from './app.tpl';
import {Item} from './item';

@Component({
    template: AppTemplate,
    components: {
        'item': Item
    }
})
class App {
    // return initial data
    data() {
        return {
            msg: 123
        };
    }

    el() {
        return '#app';
    }

    ready() {
        this.greet();
    }

    // method
    greet() {
        // alert('greeting: ' + this.msg);
    }
}

// mount
new App({
    el: '#el'
})
