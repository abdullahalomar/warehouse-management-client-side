import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddInventory = () => {
    const [user, loading] = useAuthState(auth)
 
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user.email
        const url = `http://localhost:5000/inventoryItem`;
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
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 mb-3'>Add An Inventory Item</h2>
    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-3' placeholder='Photo URL' type="text" {...register("picture")} />
        <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                {/* <input className='mb-3' placeholder='Email' {...register("email")} value=''/> */}
        <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
        <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
        <input className='mb-3' placeholder='Supplier Name' {...register("supplier_name", { required: true, maxLength: 20 })} />
        <textarea className='mb-3' placeholder='Description' {...register("short_desc")} />
      
        <input className='btn btn-secondary' type="submit" value='Add Item' />
    </form>
        </div>
    );
};

export default AddInventory;
