new Vue ({
    el: '#app',
    data: {
        name: 'Paulo Santana',
        age: 26,
        image: 'https://upload.wikimedia.org/wikipedia/pt/f/f5/Boston_Celtics.png'

    },

    methods: {
        randomNumber() {
            return Math.random()
        },

    }
})