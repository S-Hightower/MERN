import React, { useState } from 'react';

const Form = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {

        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        }

        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        }

        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }

        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }

        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match!")
        }
    }
    
    return(
        <><form onSubmit={ (e) => e.preventDefault()}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={e => setFirstName(e.target.value)} />
                {firstNameError ? <p style={{color:'red'}}>{ firstNameError }</p> :''}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={e => setLastName(e.target.value)} />
                {lastNameError ? <p style={{color:'red'}}>{ lastNameError }</p> :''}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={e => setEmail(e.target.value)} />
                {emailError ? <p style={{color:'red'}}>{ emailError }</p> :''}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={e => setPassword(e.target.value)} />
                {passwordError ? <p style={{color:'red'}}>{ passwordError }</p> :''}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={e => setConfirmPassword(e.target.value)} />
                {confirmPasswordError ? <p style={{color:'red'}}>{ confirmPasswordError }</p> :''}
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
                <td>{firstName}</td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>{lastName}</td>
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