# Gerador de Tabuada

Projeto simples em JavaScript que permite ao usuário digitar um número e gerar automaticamente a tabuada de 1 a 10 para esse número.

---

## 🚀 Como funciona

1. O usuário digita um número em um campo de entrada.
2. Ao clicar em um botão, o sistema verifica se o valor é válido.
3. Se for, ele gera e exibe a tabuada desse número de 1 a 10 em uma lista suspensa (`<select>`).

---

## 🧠 Conceitos de JavaScript utilizados

- Manipulação do DOM
- Validação de entrada
- Laço de repetição
  - `for (let num = 1; num <= 10; num++)` – itera de 1 a 10 para gerar a tabuada.

- **Criação dinâmica de elementos**
  - Criação de elementos `<option>` para popular a `<select>` com os resultados.

- **Manipulação de valores de formulário**
  - Acesso ao valor do campo de entrada com `.value`.

