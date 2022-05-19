import { useEffect, useState } from 'react';


const useInventories = (count) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventoryItem')
            .then(response => response.json())
            .then(json => setInventories(json.slice(9,count)))
    }, [])
 
    return [inventories, setInventories];
}

export default useInventories;