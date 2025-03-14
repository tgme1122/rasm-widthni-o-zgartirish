import React, { useState } from "react";
import "./style.css";

const App = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Qodirali", lastName: "Jamshidov", age: 48, country: "Qazaqstan", gender: "erkak" },
        { id: 2, name: "Alijon", lastName: "Alibekov", age: 41, country: "Uzbekistan", gender: "erkak" },
        { id: 3, name: "Mahmudjon", lastName: "Sobirov", age: 47, country: "Qirg'iziston", gender: "erkak" },
        { id: 4, name: "Daniyorjon", lastName: "Qodirov", age: 35, country: "Uzbekistan", gender: "erkak" },
        { id: 5, name: "Nodirjon", lastName: "Mahmadiyorov", age: 31, country: "Qazaqstan", gender: "erkak" }
    ]);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("Uzbekistan");
    const [gender, setGender] = useState("erkak");

    const addUser = (e) => {
        e.preventDefault();
        if (!name || !lastName || !age) return;
        const newUser = {
            id: users.length + 1,
            name,
            lastName,
            age: Number(age),
            country,
            gender
        };
        setUsers([...users, newUser]);
        setName("");
        setLastName("");
        setAge("");
        setCountry("Uzbekistan");
        setGender("erkak");
    };

    return (
        <div className="container my-5 border">
            <form onSubmit={addUser} className="card p-2 border bg-primary">
                <input className="form-control inp" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" type="text" />
                <input className="form-control inp" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" type="text" />
                <input className="form-control inp" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" />
                <select className="form-control inp" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Russia">Russia</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="UAE">UAE</option>
                </select>
                <div className="d-flex">
                    <label className="d-flex gap-3">
                        <p className="form-control poo" style={{ cursor: "pointer" }}>
                            Erkak <input name="gender" type="radio" value="erkak" checked={gender === "erkak"} onChange={(e) => setGender(e.target.value)} />
                        </p>
                    </label>
                    <label className="d-flex mx-3">
                        <p className="form-control poo" style={{ cursor: "pointer" }}>
                            Ayol <input name="gender" type="radio" value="ayol" checked={gender === "ayol"} onChange={(e) => setGender(e.target.value)} />
                        </p>
                    </label>
                </div>
                <button className="btn btn-success">Add User</button>
            </form>
            <div className="last-card">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.country}</td>
                                <td>{user.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;