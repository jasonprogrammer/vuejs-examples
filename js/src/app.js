import Vue from 'vue';
import Component from 'vue-class-component';
import AppTemplate from './app.tpl';
import {Menu} from './menu';

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
