import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddTrip.css"

const AddTrip = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        //post api via axios
        axios.post("http://localhost:5000/tours",data)
        .then(res=>{
            // console.log(res);
            if(res.data.insertedId){
                alert("Successfully added your tour trip .")
                reset();
            }
        })
    } 
    return (
        <div className="add-trip">
            <h1 className="my-5 fw-bold">ADD A TRIP YOU MAY LIKE</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Destination" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="short description" {...register("description")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input placeholder="img url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTrip;