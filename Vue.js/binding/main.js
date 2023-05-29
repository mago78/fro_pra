const app = Vue.createApp({
    data: () => ({
        message: '',
        isLarge: false,
        isRed: true,

        largeClass: 'large',
        redClass: 'red',

        classObject:{
            large: true,
            red: true
        },
        notLarge:{
            large: false,
            blue:true
        },

        bggray: 'gray',

        color: 'green',
        fontSize: 36,

        styleObj:{
            color: 'green',
            fontSize:'48px'
        }

    }),
    watch: {
        
    },
    methods: {
        
    }
})
app.mount('#app')