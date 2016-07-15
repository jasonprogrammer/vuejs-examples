new Vue
({
    el: '#my-container',
    methods: {
        onSubmit: function (evt) {
            alert(this.firstName);
            var button = evt.target;
        }
    },
    data: {
        firstName: '',
        myValue: ''
    }
});

