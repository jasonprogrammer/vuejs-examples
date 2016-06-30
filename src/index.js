import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
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
        alert('greeting: ' + this.msg);
    }
}

// new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!'
//     }
// })
