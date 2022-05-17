import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Inventory details: {inventoryId}</h2>
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