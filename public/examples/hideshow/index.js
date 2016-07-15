new Vue({
    el: '#app',
    data: {
        oneIsVisible: true,
        twoIsRendered: true
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
