new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('CLICKED!')
        },
        saveValue(e) {
            this.valor = e.target.value
            console.log(this.valor)
        }
    },
})