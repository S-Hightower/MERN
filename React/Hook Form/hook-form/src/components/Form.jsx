import React, { useState } from 'react';

const Form = (props) => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPassword};
    }
    
    return(
        <><form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <table>
        <th>
        <h1>User Data</h1>
        </th>
        <tbody>
            <tr>
                <td>First Name:</td>
                <td>{firstname}</td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>{lastname}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>{password}</td>
            </tr>
            <tr>
                <td>Confirm Password:</td>
                <td>{confirmPassword}</td>
            </tr>
        </tbody>
        </table></>
    )
};

export default Form;