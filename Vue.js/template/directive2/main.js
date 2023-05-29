const app = Vue.createApp({
    data:() => ({
        //default
        message: 'Hello'

        //v-html
        // message: 'Hello <span style="color:red;">Vue.js!</span>',
        // userInput: ''
    }),
    methods:{
        //v-once
        // clickHandler: function(event){
        //     this.message = this.message.split('').reverse().join('')
        // }

    }
});
app.mount('#app')