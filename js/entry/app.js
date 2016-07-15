import Vue from 'vue';
// var Vue = require('../src/vue-2.0.0-beta.1/dist/vue');
import Component from 'vue-class-component';
import AppTemplate from '../src/app.tpl';
import {Menu} from '../src/menu';

@Component({
    template: AppTemplate,
    components: {
        'menu': Menu
    }
})
class App {
    data() {
        return {
            msg: 123,
            menu: {
                items: [{
                    title: 'Home'
                }]
            }
        };
    }

    el() {
        return '#app';
    }
}

// mount
new App({})
