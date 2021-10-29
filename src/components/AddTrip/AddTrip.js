import React from 'react';
import { useForm } from "react-hook-form";
import "./AddTrip.css"

const AddTrip = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="add-trip">
            <h1>Add a Trip You Like</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Destination" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="short description" {...register("description")} />
                <input placeholder="price" type="number" {...register("age")} />
                <input placeholder="img url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTrip;