import React from 'react';
import {useHistory} from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
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
        updateUser,
        currentUser,
        updateCurrentUser,
    } = globalContext;

    const { ID, First, Last, Email, Phone, Location, Hobby, Actions } = currentUser;

    const history = useHistory();

    const handleUser = (e) => {
        history.push("/");
        e.preventDefault();
        updateUser()
    }

    const handleInput = (e) => {
        // const inputItem = [];
        // const inputItems = [...inputItem, e.target];
        updateCurrentUser(e.target);
    }

    return (
        <Form onSubmit={handleUser}>
            <FormGroup>
                <Label>ID</Label>
                <Input type="text" placeholder="Enter ID" value={ID} onChange={handleInput}></Input>
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
                <Label>Actions</Label>
                <Input name="Action" type="text" placeholder="Enter ID" value={Actions} onChange={handleInput}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default AddUser
