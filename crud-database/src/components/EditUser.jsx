import React from 'react'
import { useGlobalContext } from '../context/GlobalState';
import {useHistory} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function EditUser() {

    const globalContext = useGlobalContext();
    const {        
        editUser,
        currentUser,
        updateCurrentUser,
    } = globalContext;

    const { First, Last, Email, Phone, Location, Hobby } = currentUser;

    const history = useHistory();

    const handleUser = (e) => {
        history.push("/");
        e.preventDefault();
        editUser();
    }

    const handleInput = (e) => {
        updateCurrentUser(e.target);
    }

    return (
        <Form onSubmit={handleUser}>
            <FormGroup>
                <Label>First</Label>
                <Input name="First" type="text" value={First} onChange={handleInput}></Input>
                <Label>Last</Label>
                <Input name="Last" type="text" value={Last} onChange={handleInput}></Input>
                <Label>Email</Label>
                <Input name="Email" type="text" value={Email} onChange={handleInput}></Input>
                <Label>Phone</Label>
                <Input name="Phone" type="text" value={Phone} onChange={handleInput}></Input>
                <Label>Location</Label>
                <Input name="Location" type="text" value={Location} onChange={handleInput}></Input>
                <Label>Hobby</Label>
                <Input name="Hobby" type="text" value={Hobby} onChange={handleInput}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default EditUser
