const app = Vue.createApp({
    data:() => ({
        message:'hello',
        lastName:'taro',
        firstName:'yamada',
        name: ''
    }),
    computed:{
        maNa: function(){
            return this.lastName + ' ' + this.firstName
        }
    },
    watch:{
        lastName: function(na){
            this.name = na + ' ' + this.firstName
        },
        firstName: function(na){
            this.name = this.lastName + ' ' + na
        }
    },
    method:{

    }
})
app.mount('#app')