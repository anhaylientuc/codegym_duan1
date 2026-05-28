import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col, Stack } from 'react-bootstrap'

const CustomDate = ({ values, setFieldValue }) => {
    return (
        <Stack direction='horizontal' as={Col}>
            
                <Form.Group
                    as={Stack}
                    direction="horizontal"
                    gap={2}
                >
                    <Form.Label >Từ ngày:</Form.Label>
                    <Form.Control

                        type='date'
                        name='from'
                        onChange={e => {
                            setFieldValue('from', e.target.value)
                        }}
                    >

                    </Form.Control>
                </Form.Group>
           
                <Form.Group
                    as={Stack}
                    direction="horizontal"
                    gap={2}
                >
                    <Form.Label>Đến ngày:</Form.Label>
                    <Form.Control
                        type='date'
                        name='to'
                        onChange={e => {
                            setFieldValue('to', e.target.value)
                        }}
                    >

                    </Form.Control>
                </Form.Group>
           
        </Stack>


    )
}

export default CustomDate