import { useState } from "react";

export default function MyDetails() {

    const [sport, setSport] = useState(null);

    function handle_onChange(e) {
        setSport(e.target.value);
    }

    return (
        <>
            <label htmlFor="txt_details">What is your favourite sport?</label>
            <input id="txt_details" type="text" onChange={handle_onChange}/>
            <p>Your favourite sport is {sport}</p>
        </>

    );
}