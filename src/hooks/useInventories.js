import { useEffect, useState } from 'react';


const useInventories = (count = 0) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        if (count) {
         
        fetch('https://fathomless-temple-57796.herokuapp.com/inventoryItem')
        .then(response => response.json())
        .then(json => setInventories(json.slice(0,count)))

        } else {
            
        fetch('https://fathomless-temple-57796.herokuapp.com/inventoryItem')
        .then(response => response.json())
        .then(json => setInventories(json.slice()))

        }
    
    }, [])
 
    return [inventories, setInventories];
}

export default useInventories;