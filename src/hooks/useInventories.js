import { useEffect, useState } from 'react';


const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(response => response.json())
            .then(json => setInventories(json))
    }, [])
 
    return [inventories, setInventories];
}

export default useInventories;