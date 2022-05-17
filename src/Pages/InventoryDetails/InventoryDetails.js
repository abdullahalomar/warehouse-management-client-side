import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = (inventory) => {
    const { inventoryId } = useParams();
    const { _id, name, price, picture, short_desc, quantity, supplier_name } = inventory;
    return (
        <div>
            <h4>Inventory Items Id: {inventoryId}</h4>
            <h3>Inventory Items Name: {name}</h3>
            
            <Link to='/check'>
                <div className='text-center'>
                <button className='btn btn-secondary'>
                    Ckeck Inventory Item :
                </button>
                </div>
            </Link>
        </div>
    );
};

export default InventoryDetails;