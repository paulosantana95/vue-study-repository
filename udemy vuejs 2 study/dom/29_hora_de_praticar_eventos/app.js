new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        buttonAlert(){
            alert('se liga hein!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})