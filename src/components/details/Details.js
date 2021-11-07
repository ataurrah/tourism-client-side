import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
// import "./details.css"
const Details = () => {
    const [serviceDetails, setServiceDetails] = useState([])
    const { user } = useAuth()
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        let url = `https://frozen-spire-89736.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    const onSubmit = data => {

        const newData = {
            clientName: user.displayName,
            PlaceName: serviceDetails.PlaceName,
            emial: user.email,
            address: data.Address,
            cost: serviceDetails.cost,
            approved: "pending"
        }
        console.log(newData)
        fetch("https://frozen-spire-89736.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("order send successfully,thank you")
                    reset()
                }
            })
    };

    return (
        <div>
            <div className="row row-cols-sm-1 col-12 row-cols-md-2 g-4">
                <div className="col">
                    <img src={serviceDetails.img} className='ps-1 w-100' alt="" />
                    <h4>{serviceDetails.PlaceName}</h4>
                    <p>
                        {serviceDetails.Description}
                    </p>

                </div>
                <div className="col mt-5 mb-5 border">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input disabled value={user.displayName} placeholder="place Name" {...register("PlaceName")} /> <br /> <br />
                        <input disabled value={user.email} placeholder="short Title" {...register("shoreTitle")} /> <br /> <br />
                        <input placeholder="Address" {...register("Address")} /> <br /> <br />
                        <input value={serviceDetails.cost} placeholder="cost" {...register("cost")} /> <br /> <br />


                        <input type="submit" />
                    </form>


                </div>
            </div>



        </div>
    );
};

export default Details;