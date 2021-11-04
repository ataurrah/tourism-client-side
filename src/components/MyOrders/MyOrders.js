import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const email = user.email
    const [myOrders,setMyOrders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[user.email])
    const handleDelete=id=>{
        const permition = window.confirm("are you want to delete?")
        if(permition){
            fetch(`http://localhost:5000/orders/${id}`,{method:"delete"})
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert("delete successfully")
                    const remainningOrders = myOrders.filter(order=>order._id!==id)
                    setMyOrders(remainningOrders)
                }
            })

        }
    }
    return (
        <div>
            <h1>My Total Orders :{myOrders.length}</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Booking Place</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Approved</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((myOrder,index) => <>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{myOrder.PlaceName}</td>
                                <td>{myOrder.cost}</td>
                                <td>{myOrder.address}</td>
                                <td>
                                    {myOrder.approved=='pending'? 
                                    <spna className="text-danger">pending...</spna>:<span className="text-success">Approved</span>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-danger  mx-1" onClick={()=>handleDelete(myOrder._id)}>Cancle</button>
                                </td>
                            </tr>
                        </>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;