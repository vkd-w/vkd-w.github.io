const container_block = document.getElementById('container');
const element = <h1>Привет</h1>;
const button_info = document.querySelector('.button-info');

button_info.onclick = function () {
    ReactDOM.render(element, container_block);
}

