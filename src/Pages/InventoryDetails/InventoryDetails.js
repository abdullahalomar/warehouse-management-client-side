import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
    const { register, handleSubmit } = useForm();
    
    const { inventoryId } = useParams();
    const [inventoryItem, setInventoryItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventoryItem/${inventoryId}`;
        
        fetch(url)
            .then(response => response.json())
            .then(json => setInventoryItem(json))
    }, []);
    const onSubmit = data => {
       
        const url = 'http://localhost:5000/updateQuantity';
       
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
            console.log(result);
        });
    }
    return (
        <div className='text-center mt-Y'>
            <img src={inventoryItem.picture} class="" width={100} alt=""  />
            <h5>Inventory Items Id: {inventoryId}</h5>
            <h5>Inventory Items Name: {inventoryItem.name}</h5>
            <h5>Inventory Items Price: ${inventoryItem.price}</h5>
                <h6>Inventory Items Quantity: {inventoryItem.quantity}</h6>
            <h6>Inventory Items Supplier: {inventoryItem.supplier_name}</h6>
            <p>Inventory Items Details:
                <br />{inventoryItem.short_desc}</p>
                
            <div className='w-50 mx-auto'>
                <h4>Add Item Quantity</h4>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className='mb-3' placeholder='Add Quantity' type="hidden" {...register("id", { value: inventoryId})} />
                    <input className='mb-3' placeholder='Add Quantity' type="number" {...register("quantity", { min: 1, max: 999 })} />
                    <input className='btn btn-success' type="submit" value='Add Item Quantity'/>
                </form>
                </div>
            
            <button className='btn btn-secondary mt-3 d-grid gap-2 col-6 mx-auto'>
                    Delivered Item
                </button>
        </div>
    );
};

export default InventoryDetails;