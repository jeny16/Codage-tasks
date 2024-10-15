import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/users.json?key=3be66ec0&__method=POST"
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-semibold text-center mb-4">User List</h2>
    <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
      {data.map(user => (
        <React.Fragment key={user.id}>
          <li className="flex justify-between items-center p-4 hover:bg-gray-100">
            <span className="font-medium">{user.id}</span>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
            <span>{user.gender}</span>
            <span>{user.ip_address}</span>
          </li>
        </React.Fragment>
      ))}
    </ul>
  </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://my.api.mockaroo.com/users.json?key=3be66ec0&__method=POST"
//         );
//         console.log(response);
//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold text-center mb-4">User List</h2>
//       <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
//         {data.map((user) => (
//           <React.Fragment key={user.id}>
//             <li className="flex justify-between items-center p-4 hover:bg-gray-100">
//               <span className="font-medium">{user.id}</span>
//               <span>{user.first_name}</span>
//               <span>{user.last_name}</span>
//               <span>{user.gender}</span>
//               <span>{user.ip_address}</span>
//             </li>
//           </React.Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
