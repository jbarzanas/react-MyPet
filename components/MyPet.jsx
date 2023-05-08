import React, {useEffect, useReducer} from "react";
import Image1 from "../assets/images/panda.gif";
import "../assets/stylesheets/style.css";

function petNameReducer(state, action) {
    switch (action.type) {
        case "SET_PET_NAME":
            return action.payload;
        default:
            return state;
    }
}

function MyPet() {
    const [petName, dispatch] = useReducer(petNameReducer, "");

    useEffect(() => {
        const storedName = localStorage.getItem("petName");
        if (storedName) {
        dispatch({ type: "SET_PET_NAME", payload: storedName });
        }
    }, []);

    const handleInputChange = (event) => {
        dispatch({ type: "SET_PET_NAME", payload: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("petName", petName);
        dispatch({ type: "SET_PET_NAME", payload: petName });
    };

    return (
        <>
        <div className="background">
            <div className="container">
                <h1>My Pet</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={petName}
                    onChange={handleInputChange}
                    placeholder="Enter your pet name"
                    />
                    <input type="submit" value="Set Pet Name" />
                </form>
                <h4>Hello, I'm {petName}</h4>
                <img src={Image1} alt={"panda"} />
            </div>
        </div>
        </>
    );
}

export default MyPet;





