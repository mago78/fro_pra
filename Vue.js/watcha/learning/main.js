const app = Vue.createApp({
    data:() => ({
        message: 'Hello',
        km: 0,
        m: 0,
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'}
        ]
    }),
    
    watch:{
        message: function(newValue, oldValue){
            console.log('new: %s, old: %s', newValue, oldValue)
        },
        km: function(value){
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m: function(value){
            this.km = value / 1000
            this.m = value
        },
        colors:{
            handler: function(newValue, oldValue){
                console.log('Update')
            },
            deep: true
        }
    },
    methods:{
        onClick: function(event){
            this.colors[1].name = 'White'
        }
    }
});
app.mount('#app')