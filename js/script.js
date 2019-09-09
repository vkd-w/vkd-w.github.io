let buttonStyle = document.querySelector('.button-s');
console.log(buttonStyle);
let app = new Vue({
    el: '#app',
    data: {
        title: 'Main',
        buttonText: 'Кнопка'
    },
    methods: {
        buttonClick: function () {
            buttonStyle.style.cssText = 'padding: 5px'
        }
    }
})