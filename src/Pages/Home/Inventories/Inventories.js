import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventories(15);

    return (
        <div className='container mt-5'>
            <h2>Availabe Items :{ inventories.length}</h2>
            <div className='row'>
                {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory = {inventory}
                        ></Inventory>)
                }
           </div>
        </div>
    );
};

export default Inventories;