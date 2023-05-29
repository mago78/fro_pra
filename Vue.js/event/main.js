const app = Vue.createApp({
    data: () => ({
        counter: 0,
        message:''
    }),
    watch: {
        
    },
    methods: {
        // methodEvent
        // onClick: function(event){
        //     this.counter++
        //     console.log(event.target.tagName)
        // }

        // eventHandler
        // clickHand: function($event, mess){
        //     this.message = mess
        //     console.log($event.target.tagName)
        // }

        // event.once
        onceHand: function(){
            this.message = new Date().toLocaleTimeString()
        }
    }
})
app.mount('#app')