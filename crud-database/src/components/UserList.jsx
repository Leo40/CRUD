import React from 'react'
import { ForUsersContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {
    Button,
    Table
} from 'reactstrap';

function UserList() {

    const renderUser = (user, index) => {
        const { ID, First, Last, Email, Phone, Location, Hobby } = user;
        
        return(
          <tr key={index}>
            <td className='user-id'>{ID}</td>
            <td>{First}</td>
            <td>{Last}</td>
            <td>{Email}</td>
            <td>{Phone}</td>
            <td>{Location}</td>
            <td>{Hobby}</td>
            <td>        
                <div className="ml-auto">
                  <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                  <Button color="danger">Del</Button>
                </div>
            </td>
          </tr>
        )
      }

    const users = ForUsersContext();
    
    return ( 
        <div>
            <Table style={{width:"1000px"}}>
            <thead>
                <tr>
                <th className='user-id'>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Hobby</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(renderUser)}
            </tbody>
        </Table>
        <Link className="btn btn-primary mr-1" to="/download">Download CSV</Link>
        <Link className="btn btn-success" to="/add">Add Item</Link>
        </div>
    )
}

export default UserList
