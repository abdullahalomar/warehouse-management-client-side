import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
        .then(response => response.json())
        .then(json=> setInventories(json))
    },[])

    return (
        <div>
            <h2>Inventory :{ inventories.length}</h2>
            {
                inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory = {inventory}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;