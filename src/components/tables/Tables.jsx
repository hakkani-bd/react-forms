import React, { Component } from 'react';

const TableHeader = () =>{
    return(
        <thead className='thead-light'>
            <tr>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Password</th>
                <th>Bio</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Skills</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = props =>{
    const rows = props.datas.map(( row, id ) =>{
        return(
            <tr key={id}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.bio}</td>
                <td>{row.country}</td>
                <td>{row.gender}</td>
                <td>{row.skills}</td>
                <td className='d-flex'>
                    <button className='btn btn-warning' onClick={() => props.editDataHandler(row)}><i className='fas fa-edit'></i></button>
                    <button className='btn btn-danger ml-1' onClick={props.deleteHandler}><i className='fas fa-trash'></i></button>
                </td>
            </tr>
        )
    })
    return <tbody>{ rows }</tbody>
}

class Tables extends Component {
    render() {
        return (
            <div>
                <table className='table table-striped'>

                    <TableHeader />

                    <TableBody 
                        datas={this.props.datas} 
                        submitHandler={this.props.submitHandler}
                        deleteHandler={this.props.deleteHandler}
                        editDataHandler={(subject) =>this.props.editDataHandler(subject)}
                    />

                </table>
            </div>
        );
    }
}

export default Tables;