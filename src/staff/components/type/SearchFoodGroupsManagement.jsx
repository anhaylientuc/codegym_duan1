import React from "react";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FoodGroupsServices } from "../../../services/FoodGroupsServices";
import { useModalFood } from "../../context/ModalFood";
import { useModalType } from "../../context/ModalType";

// const Schema = Yup.object().shape({
//     id: Yup.string()
//         .required('Please enter a keyword!'),
//     name: Yup.string()
//         .required('Please enter a keyword!'),
// });
const FormSearchFoodGroupsManagement = (props) => {
  const { handleSearch, setlist, setpage, page } = props;
  const { setkeyword } = useModalType();
  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
      }}
      //validationSchema={Schema}

      onSubmit={async (values) => {
        // const res = await FoodGroupsServices.search(page,values);
        // setlist(res.data);
        setpage(1);
        setkeyword(values);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col>
                <Form.Group as={Row} className="align-items-center">
                  <Col md={2}>
                    <Form.Label>Mã:</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      name="id"
                      value={values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.id && errors.id}
                    ></Form.Control>
                    {/* <Form.Control.Feedback type='invalid'>
                                                Some of fields are invalid!
                                            </Form.Control.Feedback> */}
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="align-items-center">
                  <Col md={2}>
                    <Form.Label>Tên:</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.name && errors.name}
                    ></Form.Control>
                    {/* <Form.Control.Feedback type='invalid'>
                                                Some of fields are invalid!
                                            </Form.Control.Feedback> */}
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearchFoodGroupsManagement;
