var Vue = require('../src/vue-2.0.0-beta.1/dist/vue');

new Vue({
    el: '#app',
    data: {
        people: [{
            first: 'Joe',
            last: 'Satriani'
        },{
            first: 'Steve',
            last: 'Vai'
        }]
    }
});
