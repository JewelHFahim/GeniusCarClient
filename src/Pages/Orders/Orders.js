import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(UserContext);
    const [orders, setOrders] = useState([]);


    useEffect( ()=>{
        if(user?.email){
          fetch(`http://localhost:5000/orders?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('geniusToken')}`
          }
        })
        .then(res=> res.json())
        .then(data=> setOrders(data))
        .catch(error=>console.error(error))
        }
    },[user?.email])

    const handleDelete = (id) =>{
      const proceed = window.confirm(`Are you sure, want to cancel the order?`);
      if(proceed){
        fetch(`http://localhost:5000/orders/${id}`,{
          method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            alert('Deleted Successfully');
            const remainingOrders = orders.filter( rmo => rmo._id !== id );
            setOrders(remainingOrders);
          }
        })
      }
    }

    const handleUpdate = (id) =>{
      fetch(`http://localhost:5000/orders/${id}`,{
        method: "PATCH",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          const remaining = orders.filter(odr => odr._id !==  id);
          const approving = orders.find(odr => odr._id !== id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      })
    }


    return (
        <div className='my-10'>
            <h1 className='text-5xl'>Your Orders: {orders.length}</h1>
            

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>
        </th>
        <th>Orders</th>
        <th>Customers</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>

    <tbody>

     {
        orders.map(order => <OrderRow key = {order._id} order = {order} handleDelete = {handleDelete} handleUpdate ={handleUpdate} ></OrderRow>)
     }


    </tbody>    
  </table>
</div>
        </div>
    );
};

export default Orders;