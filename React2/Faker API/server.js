const express = require('express');
const faker = require('faker');
const app=express();
const port = 8000;

class User{
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

console.log(new User());

app.get('/api/users/new', (req, res) => {
    res.json(new User());
})

app.listen( port, () => console.log('Listening on port: ${port}'));