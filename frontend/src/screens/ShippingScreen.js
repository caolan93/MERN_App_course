import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

const ShippingScreen = ({ history }) => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Address'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter City'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postcode'>
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Post Code'
                        value={postCode}
                        required
                        onChange={(e) => setPostCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Country'
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
