import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FoodGroupsControllers } from '../controllers/FoodGroupsControllers';
const Schema = Yup.object().shape({
   id: Yup.string()
     .required('Please enter a keyword!'),
   name: Yup.string()
     .required('Please enter a keyword!'),
 });
const FormSearchFoodGroupsManagement = (props) => {
    const {handleSearch,setlist}=props;
    return (
        <Formik
            initialValues={{
                id: '',
                name: ''
            }}
            validationSchema={Schema}
            
           onSubmit={async(values)=>{
                        const res=await FoodGroupsControllers.handleSearch(values);
                        console.log(res);
                        setlist(res);
                    }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="id" />
                    {errors.id && touched.id ? (
                        <div>{errors.id}</div>
                    ) : null}
                    <Field name="name" />
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                   
                    <button type="submit" >Search</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormSearchFoodGroupsManagement