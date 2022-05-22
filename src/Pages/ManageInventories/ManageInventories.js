import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this item?');
        if (proceed) {
            const url = `https://fathomless-temple-57796.herokuapp.com/inventoryItem/${id}`;
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

    const navigate = useNavigate();
    // const NavigateInventoryDetails = id => {
    //     navigate(`/inventory/${id}`);
    // }
    return (
        <div className='mt-4'>
            <h2 className='text-center'>Manage your Inventory Items</h2>
            {
                inventories.map(inventory => <div
                    key={inventory._id}>
                    <div className='container mt-4'>
                    <Table striped bordered hover>
                    <tbody>        
                        <tr>
                           <td colSpan={2}>{inventory.name}</td>
                            <td>
                               
                                {/* <button onClick={()=> NavigateInventoryDetails(inventory._id)} className=' btn btn-success mx-3'>Add a new item
                                </button>  */}
                         
                                <button onClick={() => handleDelete(inventory._id)} className=' btn btn-danger'>Delete
                               </button>        
                           </td>
                       </tr>
                    </tbody>
                   </Table>
                    </div>
                </div>
                )}
        </div>
    );
};

export default ManageInventories;