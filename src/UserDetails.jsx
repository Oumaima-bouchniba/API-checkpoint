import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserDetails() {
    const [user, setUser] = useState({});
    const { id } = useParams();
console.log(axios);

    useEffect(
        () =>
            async function getUserByID() {
                try {
                    const res = await axios.get(
                        `https://jsonplaceholder.typicode.com/users/${2}`
                    );
                    setUser(res.data);
                } catch (err) {
                    console.log(err);
                }
            },
        [id]
    );
    console.log("user", user);
    return (
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.adresse}</p>
            <p>{user.city}</p>

        </div>
    );
}