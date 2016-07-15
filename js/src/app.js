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
            menu: {
                items: [{
                    title: 'Home'
                },{
                    title: 'FAQ'
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
