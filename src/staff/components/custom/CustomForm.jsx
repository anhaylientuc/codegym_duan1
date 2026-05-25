import React from 'react'
import { Formik, Form } from "formik";

const CustomForm = ({initialValues,validationSchema,onSubmit,children}) => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize
    >
        {({handleSubmit})=>{
            <Form onSubmit={handleSubmit}>
                {children}
            </Form>
        }
        }
    </Formik>
  )
}

export default CustomForm