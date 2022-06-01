// import { useState } from "react"

// const useToken = user => {
//     const [token, setToken] = useState('');
//     const email = user?.user?.email
//     if (email) {
//         fetch('https://blooming-ravine-00694.herokuapp.com/users', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email }),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // console.log('Success:', data);
//                 /* const accessToken = data.token
//                 localStorage.setItem('accessToken', accessToken)
//                 setToken(accessToken) */
//                 setToken(data)
//             })
//     }
//     return [token]
// }
// export default useToken;