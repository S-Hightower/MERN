import React, { useState } from 'react';

import styles from './Form.module.css';

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
        e.preventDefault()
        if(firstName.length < 2 && firstName.length > 0) {
            setFirstNameError("First name must be 2 characters or longer!");
        }else{
            setFirstNameError("");
        };

        if(lastName.length < 2 && lastName.length > 0) {
            setLastNameError("Last name must be 2 characters or longer!");
        }else{
            setLastNameError("");
        };

        if(email.length < 5 && email.length > 0) {
            setEmailError("Email must be 5 characters or longer!");
        }else{
            setEmailError("");
        };

        if(password.length < 8 && password.length > 0) {
            setPasswordError("Password must be 8 characters or longer!");
        }else{
            setPasswordError("");
        };

        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match!")
        }else if (password === confirmPassword){
            setConfirmPasswordError("");
        };
    }
    
    return(
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>User Form:</h1>
        </div>
        <form onSubmit={ createUser }>
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
        <div className={styles.header}>
            <h1>User Data:</h1>
        </div>
        <div className={styles.data}>
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
        </div>
        </table>
        </div>
    )
};

export default Form;