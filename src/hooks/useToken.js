import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    const email = user?.user?.email
    if (email) { 
    fetch('http://localhost:5000/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            const accessToken = data.token
            localStorage.setItem('accessToken',accessToken)
            setToken(accessToken)
        })
}
    return [token]
}
export default useToken;