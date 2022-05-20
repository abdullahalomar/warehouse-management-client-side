import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-secondary py-4 text-white'>
            <div className='container'>
            <div class="row">
               <div class="col">
                    <h4>Laptop Warehouse</h4>
                    <p>We are here to give you the best of new/used high end PCs which includes gaming/graphics/business PCs, We Sell, We Repair. We profer software solutions.</p>
               </div>
            <div class="col">
      
               </div>
            <div class="col">
      <h4>Contact Us</h4>
               </div>
            </div>
            </div>
            <div className='text-center mt-5'>
            <h6 className='copyight'><small>Copyright © { year}</small></h6>
        </div>
        </div>
        
    );
};

export default Footer;