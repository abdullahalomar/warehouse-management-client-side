import React from 'react';
import useInventories from '../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories] = useInventories();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            
        }
    }
    return (
        <div>
            <h2>Manage your Inventory Items: </h2>
            {
                inventories.map(inventory => <div
                    key={inventory._id}>
                    <h5>{inventory.name}
                    <button onClick={()=>handleDelete(inventory._id)} className='btn btn-danger'>Delete</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageInventories;