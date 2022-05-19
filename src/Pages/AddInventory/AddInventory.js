import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventoryItem`;
        fetch(url, {
            method: 'POST',
            Headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
            console.log(result);
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add An Inventory Item</h2>
    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
     <input className='mb-3' placeholder='Photo URL' type="text" {...register("picture")} />
      <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-3' placeholder='Description' {...register("description")} />
      <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
      <input className='btn btn-secondary' type="submit" value='Add Inventory Item' />
    </form>
        </div>
    );
};

export default AddInventory;