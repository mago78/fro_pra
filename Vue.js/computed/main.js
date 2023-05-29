const app = Vue.createApp({
    data:() => ({
        message: 'Hello',
        basePrice: 100
    }),
    computed:{
        revMes: function(){
            return this.message.split('').reverse().join('')
        },
        taxPrice:{
            get: function(){
                return this.basePrice * 1.1
            },
            set: function(value){
                this.basePrice = value / 1.1
            }
        },
        comNum: function(){
            return Math.random()
        }
    },
    methods:{
        revMesMeth: function(){
            return this.message.split('').reverse().join('')
        },
        methNum: function(){
            return Math.random()
        }
    }
});
app.mount('#app')