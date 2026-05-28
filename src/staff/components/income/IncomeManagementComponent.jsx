import { React, useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import CustomDate from '../custom/CustomDate'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { BillServices } from '../../../services/BillServices';
import Form from 'react-bootstrap/Form';
import { DateHelper } from '../../utilities/DateHelper';
import { set } from '@cloudinary/url-gen/actions/variable';
import { ModalFoodProvider } from '../../context/ModalFood';

const IncomeManagementComponent = () => {
    const [totalAmount, settotalAmount] = useState(0)
    const [income1, setincome1] = useState(0)
    const [income2, setincome2] = useState(0)
    const [income3, setincome3] = useState(0)
    const [income4, setincome4] = useState(0)
    const getIncome = (data) => {
        return data.reduce((total, item) => {
            return total + item.totalAmount;
        }, 0)
    }
    const handleSearch = async (values) => {
        const res = await BillServices.search(null, values);
        console.log(res);
        const income = getIncome(res.data);
        settotalAmount(income)
    }
    useEffect(() => {
        const fetchData = async () => {
            const curDay = DateHelper.getCurrentDate();
            const firstDayOfWeek = DateHelper.getFirstDayOfWeek();
            const lastDayOfWeek = DateHelper.getLastDayOfWeek();
            const firstDayOfMonth = DateHelper.getFirstDayOfMonth();
            const lastDayOfMonth = DateHelper.getLastDayOfMonth();
            const firstDayOfYear = DateHelper.getFirstDayOfYear();
            const lastDayOfYear = DateHelper.getLastDayOfYear();
            const res1 = await BillServices.search(null, { from: curDay, to: curDay });

            const res2 = await BillServices.search(null, { from: firstDayOfWeek, to: lastDayOfWeek });
            const res3 = await BillServices.search(null, { from: firstDayOfMonth, to: lastDayOfMonth });
            const res4 = await BillServices.search(null, { from: firstDayOfYear, to: lastDayOfYear });
            setincome1(getIncome(res1.data))
            setincome2(getIncome(res2.data))
            setincome3(getIncome(res3.data))
            setincome4(getIncome(res4.data))

        }
        fetchData();
    }, [])
    return (
            <Container>
                <h3>Quản lý thu nhập</h3>
                <h6>Tổng thu nhập: {totalAmount}</h6>

                <Formik
                    initialValues={{
                        from: '',
                        to: ''
                    }}
                    enableReinitialize
                    onSubmit={handleSearch}
                >
                    {({ handleSubmit, values, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <CustomDate values={values} setFieldValue={setFieldValue} />
                                </Col>
                                <Col>
                                    <Button type='submit'>Tính thu nhập</Button>
                                </Col>
                            </Row>

                        </Form>
                    )

                    }


                </Formik>
                <h6>Hôm nay: {income1}</h6>
                <h6>Tuần này:{income2}</h6>
                <h6>Tháng này:{income3}</h6>
                <h6>Năm này:{income4}</h6>
            </Container>

    )
}

export default IncomeManagementComponent