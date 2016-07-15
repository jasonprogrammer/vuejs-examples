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
