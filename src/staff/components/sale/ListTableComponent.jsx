import React, { useEffect } from 'react'
import { Stack, Card, Row, Col } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood'
const ListTableComponent = ({ list }) => {
    const { setid, id } = useModalFood()
    return (
        <Row>
            {
                list && list.map((item, index) => {
                    return (
                        <Col md={4} className='mb-3' key={index}>
                            <Card
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: item.on ? '#d1e7dd' : '#f8d7da'
                                }}
                                onClick={()=>{
                                    setid(item.id)
                                }}
                            >
                                <Card.Body>
                                    <h5>{item.id}</h5>
                                    <p>
                                        {item.on ? "Đang dùng" : "Trống"}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ListTableComponent