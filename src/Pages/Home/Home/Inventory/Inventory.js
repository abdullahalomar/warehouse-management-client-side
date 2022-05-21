import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const { _id, name, price, picture, short_desc, quantity, supplier_name } = props.inventory;
    const navigate = useNavigate();
    const NavigateInventoryDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        
        <div className='col-sm-12 col-md-6 col-lg-4 gx-5 gy-3 mb-5'>
            <div class='card' style={{width: '18rem'}}>
            <img src={picture} class="card-img-top" width={100} alt=""  />
            <div class='card-body'>
                <h5 class='card-title'>{name}</h5>
                <h5>Price: ${price}</h5>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplier_name}</h6>
                    <p class='card-text'>{short_desc}</p>
                    <button onClick={()=> NavigateInventoryDetails(_id)} className='btn btn-secondary'>Stock Update</button>
            </div>
            </div>
        </div>
                  
      
       
    );
};

export default Inventory;