import React from 'react';

const Inventory = (props) => {
    const { name, price, picture, short_desc, quantity, supplier_name } = props.inventory;

    return (
        <div>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>{short_desc}</p>
                <h5>{quantity}</h5>
                <p>{ supplier_name }</p>
        </div>
    );
};

export default Inventory;