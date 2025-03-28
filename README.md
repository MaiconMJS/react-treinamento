# 🚀 Teste de Incrementador com React + Hooks

Este é um projeto simples desenvolvido com **React** e **TypeScript**, com o objetivo de testar funcionalidades de incremento manual e automático, controle de parada e zeragem de valores.

## 🧠 Conceito

A aplicação simula dois contadores:

- **N1**: é incrementado manualmente ou automaticamente.
- **N2**: é atualizado com base no valor de `N1` após um delay de 500ms sempre que `N1` muda.

## 📦 Tecnologias Utilizadas

- React
- TypeScript
- Next.js
- Tailwind CSS

## 🧩 Componentes

### `Display`

Exibe os valores atuais de `N1` e `N2`.

### `ButtonManual`

Botão que incrementa `N1` manualmente após 1 segundo.

### `ButtonAuto`

Ativa um incremento automático em `N1` a cada 1 segundo.

### `ButtonStop`

Interrompe o incremento automático de `N1`.

### `ButtonZerar`

Zera os valores de `N1` e `N2` e interrompe qualquer incremento ativo.

## 🧠 Lógica do Hook `Incrementador`

```tsx
const {
  manualIncrement,
  numeroN1,
  numeroN2,
  automaticIncrement,
  stopIncrement,
  zerarIncrement,
  ...
} = Incrementador();
```

### Instale as dependências

npm install

### Rode o projeto

npm run dev
