import React, {useEffect, useState} from 'react';
import "./Read.css"
import {Button, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    // useEffect Loads data when component is started or loaded
    useEffect(() => {
        axios.get('https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])

    // This will connect with local storage based on the id of each item
    const setData = (id, firstName, lastName,comment, email) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('comment', comment)
        localStorage.setItem('email', email)
    }

    const loadData = () => {
        axios.get('https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea')
        .then((loadData) => setDataFromApi(loadData.data))
    }
    // This function will delete items based on each item id
    const onDelete = (id) => {
        axios.delete(`https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea/${id}`)
            .then(() => {
                loadData();
        })

    }

    return (
    <div>
        <div className='read_container'>              
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Last name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        {/* This map function displays loaded data to the actual table on the site */}
                        { dataFromApi.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.comment}</Table.Cell>
                                    <Table.Cell className='btn-delete-cell'>
                                        <Link to = '/update'>
                                            <Button color='blue' onClick={()=>setData(data.id, data.firstName, data.lastName, data.comment, data.email) } >Update</Button>
                                        </Link>                                        
                                    </Table.Cell>
                                    <Table.Cell>                                
                                            <Button color='red' onClick={ () => onDelete(data.id) }>Delete</Button>                                        
                                    </Table.Cell>                    
                                </Table.Row> 
                            )
                        })}                             
                </Table.Body>
            </Table>
        </div>
    </div>
    
  )
}

export default Read;