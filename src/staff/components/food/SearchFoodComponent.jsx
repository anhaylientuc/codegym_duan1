import React from 'react'
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useModalFood } from '../../context/ModalFood';
import { FoodsServices } from '../../../services/FoodServices';
import DropdownType from '../custom/DropdownType';
const SearchFoodComponent = (props) => {
    const { handleSearch, setlist, types, page, setnumPages, setpage } = props;
    const { setkeyword } = useModalFood();
    const Schema = Yup.object().shape({
        id: Yup.string(),
        name: Yup.string(),
        price: Yup.number()
            .typeError('Price must be a number'),
        unit: Yup.string()
    });
    return (
        <Formik
            initialValues={{
                // id: '',
                name: '',
                // price: '',
                // unit: '',
                type: ''
            }}
            validationSchema={Schema}
            onSubmit={async (values) => {
                const res = await FoodsServices.search(page, values);
                setpage(1)
                setlist(res.data);
                setkeyword(values);
                setnumPages(Math.ceil(res.headers["x-total-count"] / 6));

            }}
        >
            {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
                <Form onSubmit={handleSubmit} >
                    <Container>
                        <Row className='mb-3'>
                            <Col md="5">
                                <Form.Group className="custom-form-group">


                                    <Form.Label>Tên món:</Form.Label>


                                    <Form.Control name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={
                                            touched.name && errors.name
                                        }
                                    ></Form.Control>
                                    <Form.Control.Feedback type='invalid'>
                                        Some of fields are invalid!
                                    </Form.Control.Feedback>





                                </Form.Group>
                            </Col>

                            <Col md="5">
                                <Form.Group className="custom-form-group" >

                                    <Form.Label>Tên kiểu món:</Form.Label>

                                    <Form.Control name='type'
                                        value={values.type}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={
                                            touched.type && errors.type
                                        }
                                    ></Form.Control>
                                    <Form.Control.Feedback type='invalid'>
                                        Some of fields are invalid!
                                    </Form.Control.Feedback>




                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Button type='submit'>Tìm kiếm</Button>
                            </Col>

                        </Row>
                        <Row className='mb-3'>
                            {/* <Col md={5}>
                                <Form.Group as={Row} className="align-items-center">

                                    <Col md="2">
                                        <Form.Label>Giá:</Form.Label>
                                    </Col>
                                    <Col md="8">
                                        <Form.Control name='price'
                                            value={values.price}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched.price && errors.price
                                            }
                                        ></Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            Some of fields are invalid!
                                        </Form.Control.Feedback>
                                    </Col>




                                </Form.Group>
                            </Col> */}

                            {/* <Col md={5}>
                                <DropdownType
                                    handleSubmit={handleSubmit}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    types={types}
                                />
                            </Col> */}


                        </Row>

                    </Container>

                </Form>
            )

            }
        </Formik>
    )
}

export default SearchFoodComponent