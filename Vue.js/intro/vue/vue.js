const app = Vue.createApp({
    data:() => ({
        message: 'Hello Vue.js!',
        count: 0,
        user:{
            lastName: 'yamada',
            firstName: 'tarou',
            prefecture: 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue']
    })
});
app.mount('#app')