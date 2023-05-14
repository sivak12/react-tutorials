import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewusername] = useState("");
    return (
        <div>
            <input onChange={(event) => {setNewusername(event.target.value)}}/>
            <button onClick={() => setUsername(newUsername)}>
                Change Username
            </button>
        </div>
    )
};