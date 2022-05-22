import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://fathomless-temple-57796.herokuapp.com/myitem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    Navigate('/login')
                }
            }
        };

        getMyItems();

    }, [user]);

    return (
        <div>
            <h2 className='text-center my-4'>This is my item page {myitems.length}</h2>
            {
               myitems.map(inventory => <div
                   key={inventory._id}>
                   <div className='container mt-4 w-75'>
                       <table class="table table-secondary table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                              <th scope="col">Supplier Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><img src={inventory.picture} class="" width={50} alt=""  /></th>
                              <td>{inventory.name}</td>
                              <td>{inventory.supplier_name}</td>
                              <td>${inventory.price}</td>
                              <td><h6>{inventory.email}</h6></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
                )}
            
        </div>
    );
};

export default MyItem;