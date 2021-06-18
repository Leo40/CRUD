import React from 'react';
import {useHistory} from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function AddUser() {
    const globalContext = useGlobalContext();
    const {
        updateUsers,
        currentUser,
        updateCurrentUser,
    } = globalContext;

    const { First, Last, Email, Phone, Location, Hobby } = currentUser;

    const history = useHistory();

    const handleUser = (e) => {
        history.push("/");
        e.preventDefault();
        updateUsers()
    }

    const handleInput = (e) => {
        updateCurrentUser(e.target);
    }

    return (
        <>
        <h1>Enter Your Details</h1>
        <Form onSubmit={handleUser}>
            <FormGroup>
                <Label>First</Label>
                <Input name="First" type="text" placeholder="Enter First Name" value={First} onChange={handleInput}></Input>
                <Label>Last</Label>
                <Input name="Last" type="text" placeholder="Enter Last Name" value={Last} onChange={handleInput}></Input>
                <Label>Email</Label>
                <Input name="Email" type="text" placeholder="Enter Email" value={Email} onChange={handleInput}></Input>
                <Label>Phone</Label>
                <Input name="Phone" type="text" placeholder="Enter Phone Number" value={Phone} onChange={handleInput}></Input>
                <Label>Location</Label>
                <Input name="Location" type="text" placeholder="Enter Location" value={Location} onChange={handleInput}></Input>
                <Label>Hobby</Label>
                <Input name="Hobby" type="text" placeholder="Enter Your Hobby" value={Hobby} onChange={handleInput}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )
}

export default AddUser
