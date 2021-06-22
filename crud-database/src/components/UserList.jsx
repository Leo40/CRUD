import React from 'react'
import { useGlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {
    Button,
    Table
} from 'reactstrap';

function UserList() {

  const globalContext = useGlobalContext();
  const {
      users,
      handleDelete,
      handleEdit
  } = globalContext;

    const renderUser = (user, index) => {
        const { ID, First, Last, Email, Phone, Location, Hobby, key } = user;

        return(
          <tr key={index}>
            <td className='user-id'><strong>{index + 1}</strong></td>
            <td>{First}</td>
            <td>{Last}</td>
            <td>{Email}</td>
            <td>{Phone}</td>
            <td>{Location}</td>
            <td>{Hobby}</td>
            <td>
                <div className="ml-auto">
                  <Link className="btn btn-warning mr-1" to="/edit/1" onClick={() => {handleEdit(key)}}>Edit</Link>
                  <Button className="btn btn-danger" onClick={() => {handleDelete(key)}}>Del</Button>
                </div>
            </td>
          </tr>
        )
      }

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
