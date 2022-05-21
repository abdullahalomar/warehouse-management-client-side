import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);
    console.log(user?.email);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/inventoryItem?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        };

        getMyItems();

    }, [user]);

    return (
        <div>
            <h2 className='text-center my-4'>This is my item page {myitems.length}</h2>
            
        </div>
    );
};

export default MyItem;