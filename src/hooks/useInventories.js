import { useEffect, useState } from 'react';


const useInventories = (count) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(response => response.json())
            .then(json => setInventories(json.slice(9,count)))
    }, [])
 
    return [inventories, setInventories];
}

export default useInventories;