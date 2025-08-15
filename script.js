function gerarTabuada() {
    const numero = document.querySelector('.inputnumero').value;
    const tab = document.querySelector('.selecttabuada');
    if (numero === '' || isNaN(Number(numero))) {
        alert('Por favor, digite um número válido.');
        return
    }
        const n = Number(numero);
        tab.innerHTML = '';
        for (let num = 1; num <= 10; num++) {
            let item = document.createElement('option');
            item.text = `${n} x ${num} = ${n * num}`;
            item.value = `tab${num}`;
            tab.appendChild(item);
        }
}