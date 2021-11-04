import { stringify } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch("http://localhost:5000/services",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert("successfully Added")
                reset()
            }
        })
    } ;
  
    return (
        <div>
            <div className="row row-cols-sm-1 col-12 row-cols-md-2 g-4">
                <div className="col">
                    <h1>VISIT BANGLADESH</h1>
                    <p>
                    Bangladesh, the 8th largest country in the world with its population of 166,208,175, is located to the south of Asia. It is the capital and largest city of Dhaka, Bangladesh, which is adjacent to countries like India, Nepal, Bhutan and Myanmar. The tourist attractions of Bangladesh include history and monuments, holiday villages, beaches, picnic spots, forests and tribal people, wildlife of various species.
                    </p>

                </div>
                <div className="col mt-5 mb-5 border my-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="place Name" {...register("PlaceName")} /> <br /> <br />
                        <input placeholder="short Title" {...register("shoreTitle")} /> <br /> <br />
                        <input placeholder ="Description" {...register("Description")} /> <br /> <br />
                        <input placeholder="cost" {...register("cost")} /> <br /> <br />
                        <input placeholder="img url" {...register("img")} /> <br /> <br />
                      
                        <input type="submit" />
                    </form>


                </div>
            </div>



        </div>
    );
};

export default AddService;