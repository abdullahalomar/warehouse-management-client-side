import { useEffect, useState } from 'react';


const useInventories = (count = 0) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        if (count) {
         
        fetch('http://localhost:5000/inventoryItem')
        .then(response => response.json())
        .then(json => setInventories(json.slice(0,count)))

        } else {
            
        fetch('http://localhost:5000/inventoryItem')
        .then(response => response.json())
        .then(json => setInventories(json.slice()))

        }
    
    }, [])
 
    return [inventories, setInventories];
}

export default useInventories;