import React, { useEffect, useState } from 'react';

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
                inventories.map(inventory => <Inventories
                    key={inventory._id}
                    inventory = {inventory}
                ></Inventories>)
            }
        </div>
    );
};

export default Inventories;