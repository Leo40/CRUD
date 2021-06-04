import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function EditUser() {
    return (
        <Form>
            <FormGroup>
                <Label>ID</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>First</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Last</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Email</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Phone</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Location</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Hobby</Label>
                <Input type="text" placeholder="Enter ID"></Input>
                <Label>Actions</Label>
                <Input type="text" placeholder="Enter ID"></Input>
            </FormGroup>
            <Button type="submit">Edit</Button>
        </Form>
    )
}

export default EditUser
