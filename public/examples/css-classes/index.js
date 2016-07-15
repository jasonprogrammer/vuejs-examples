new Vue({
    el: '#app',
    computed: {
        opinion: function() {
            if(!this.name) {
                return '';
            }
            this.resultClasses = {
                error: false,
                success: false
            };

            if(this.name.toLowerCase() == 'bob') {
                this.resultClasses.error = true;
                return this.name + ' is not so great.';
            }

            this.resultClasses.success = true;
            return this.name + ' is an incredible person.';
        }
    },
    data: {
        name: '',
        resultClasses: {
            error: false,
            success: false
        }
    },
    methods: {
        showOne: function() {
            this.oneIsVisible = !this.oneIsVisible;
        },
        showTwo: function() {
            this.twoIsRendered = !this.twoIsRendered;
        }
    }
});
