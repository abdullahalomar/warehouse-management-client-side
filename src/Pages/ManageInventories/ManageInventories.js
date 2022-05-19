import React from 'react';
import useInventories from '../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/inventoryItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(json => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
            })
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