import React, { useState, useEffect } from "react";
import "./styles.css";

const data = [
  { name: "Ahmet" },
  { name: "Mehmet" },
  { name: "Ali" },
  { name: "Veli" }
];

export default function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input placeholder="arama" />
      {users.map((user) => {
        return <p key={user.name}>{user.name}</p>;
      })}
    </div>
  );
}
//Eğer map fonksiyonundaki değerleri return ederken
//bir key değeri girmezsek hata alırız. Bu key değeri
//benzersiz olmalıdır. Bu değeri kendimiz belirleyebilir
//veya index değerini alabiliriz.
