import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Form, Button, Row, Stack } from 'react-bootstrap'
import { Nbar } from './components/navbar'
import { useState } from 'react'

const Home: NextPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendData = async (event: any) => {

    let res = await fetch('/api/data', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
    let data = await res.json()
    console.log(res)
    console.log(data)
    // event.preventDefault();
  }

  return (
    <Container>
      <Stack gap={4}>
      <Nbar />
      <Container fluid className='bg-2 text-center'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e: any) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
            <Button variant="primary" type="button" onClick={(e: any) => sendData(e)}>
            Submit
          </Button>
        </Form>
      </Container>
      </Stack>


    </Container>
  )
}

export default Home
