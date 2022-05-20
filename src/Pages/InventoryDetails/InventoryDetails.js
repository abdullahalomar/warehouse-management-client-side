import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventoryItem, setInventoryItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventoryItem/${inventoryId}`;
        
        fetch(url)
        .then(response => response.json())
        .then(json=>setInventoryItem(json))
    },[])
    return (
        <div className='text-center mt-5'>
            <img src={inventoryItem.picture} class="" width={100} alt=""  />
            <h5>Inventory Items Id: {inventoryId}</h5>
            <h5>Inventory Items Name: {inventoryItem.name}</h5>
            <h5>Inventory Items Price: ${inventoryItem.price}</h5>
                <h6>Inventory Items Quantity: {inventoryItem.quantity}</h6>
            <h6>Inventory Items Supplier: {inventoryItem.supplier_name}</h6>
            <p>Inventory Items Details:
                <br />{inventoryItem.short_desc}</p>
            
            <Link to='/check'>
                <div className='text-center mt-3'>
                <button className='btn btn-secondary'>
                    Ckeck Inventory Item :
                </button>
                </div>
            </Link>
        </div>
    );
};

export default InventoryDetails;