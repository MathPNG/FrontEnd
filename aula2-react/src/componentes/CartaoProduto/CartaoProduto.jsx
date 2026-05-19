import React from 'react';

const CartaoProduto = (props) => {
  return (
    <div className="cartao-produto">
      <img src={props.imagem} alt={props.nome} width="200" />
      <h3>{props.nome}</h3>
      <p>R$ {props.preco}</p>
    </div>
  );
};

export default CartaoProduto;