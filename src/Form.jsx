import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Form(){
    const Navigate = useNavigate;
    const handleSubmit = () =>{
        
    }
    return(
        <div>
            <form action="#" method="get" onSubmit={handleSubmit()}>
            <fieldset>
                <legend>Details</legend>
                <label>Username</label>
                <input type="text" name="username"></input><br></br>
                <label>Password</label>
                <input type="password" name="pass"></input><br></br>
                <button type="submit">Submit</button>
            </fieldset>
            </form>
        </div>
    )
}