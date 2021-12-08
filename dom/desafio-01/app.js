new Vue({
  el: '#desafio',
  data: {
    nome: 'Edson',
    idade: 31,
    link: 'https://i.imgur.com/r5ZuuBn.jpeg',
  },
  methods: {
    idadeMult() {
      return this.idade * 3
    },
    random() {
      return Math.random()
    },
  }
})
