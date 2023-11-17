import axios from "axios";
import React, { useState } from "react";



function MyData() {
  const products = ["a", "b", "c"];

  
  let URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState(null);

  React.useEffect(()=>{
    axios
      .get(URL)
      .then(response => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);


  const list_products = products.map((x) => <li key={x}>{x}</li>);
  
  if (!users) return null;

  const list_users = users.map((x) => <li key={x.id}>{x.username}</li>);

  return (
    <div>
      Here I am
      {list_products} and 
     {list_users}
    </div>
  );
}

export default MyData;
