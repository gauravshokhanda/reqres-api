import React from "react";
import "./GetUser.css";


export default function GetUser() {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const json = await res.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);

    return (
        
          <div className="flex">
            {users.length &&
              users.map((user) => {
                return (
                  <div key={user.id}>
                    <p>
                      <h2>{user.first_name}</h2>
                    </p>
                    <p>{user.email}</p>
                    <img key={user.avatar} src={user.avatar} />
                  </div>
                );
              })}
          </div>
        
      );
    }
    