const helloLocal = {
    template: '<p>good morning</p>'
}

const buttonCount = {
    template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
    data: () => ({
        count: 0
    }),
    methods: {
        countUp: function(event){
            this.count++
        }
    }
}

const app = Vue.createApp({
    data: () => ({

    }),
    watch: {
        
    },
    methods: {
        
    },
    components: {
        'hello-local': helloLocal,
        'button-count': buttonCount
    }
})
app.component('hello-comp', {
    template: '<p>Hello!</p>'
})
app.mount('#app')