import Vue from '../src/vue-2.0.0-beta.1/dist/vue';

new Vue({
    el: '#app',
    data: {
        person: {
            first: 'Bob',
            last: 'Smith'
        }
    },
    methods: {
        changePerson: function() {
            this.person = {
                first: 'Betty',
                last: 'Williams'
            };
        }
    }
});
