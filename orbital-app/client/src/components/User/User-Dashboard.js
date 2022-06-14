import { useState, useEffect } from 'react';

const UserDashboard = () => {
    const [name, setName] = useState();

    async function getName() {
        try {
          const response = await fetch("/users/me", {
            method: "GET",
            headers: { token: localStorage.token }
          });
    
          const parseRes = await response.json();
    
          setName(parseRes.firstname + " " + parseRes.lastname);
    
        } catch (err) {
          console.error(err.message);
        }
      }

    useEffect(() => {
        getName();
    }, []);


    return (
        <>
            <h1>Welcome, {name}</h1>
        </>
    )
}

export default UserDashboard