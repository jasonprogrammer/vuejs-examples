import Vue from 'vue';
import Component from 'vue-class-component';
import AppTemplate from './app.tpl';

@Component({template: AppTemplate})
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
