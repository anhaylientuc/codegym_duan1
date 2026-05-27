import { React, useState, useEffect } from 'react'
import { Button, Container, Stack, Col, Row } from "react-bootstrap"
import ModalFoodComponent from './ModalFoodComponent'
import SearchFoodComponent from './SearchFoodComponent'
import ListFoodComponent from './ListFoodComponent'
import CustomPagination from '../custom/CustomPagination'
import { useModalFood } from '../../context/ModalFood'
import { FoodsServices } from '../../../services/FoodServices'
import { FoodGroupsServices } from '../../../services/FoodGroupsServices'
const FoodManagementComponent = () => {
    const [list, setlist] = useState([])
    const [types, settypes] = useState(null)
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const { show, setshow, setid, id,keyword } = useModalFood()
    useEffect(() => {
        const fetchData = async () => {
            const res = await FoodsServices.search(page,keyword);
            const res1=await FoodGroupsServices.getAll();
            setlist(res.data)
            const newData = res1.map(item => {
                return [item.id, item.name]
            })
            settypes(new Map(newData))
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        }
        fetchData();
    }, [page, show])
    return (
        <Container>
            <Row className="justify-content-center mb-3">
                <Col xs="auto">
                    <h3>Danh sách món ăn</h3>
                </Col>
            </Row>
            <ModalFoodComponent
                types={types}
            />

            <Row className="justify-content-center mb-3">
                <Col md={8}>
                    <SearchFoodComponent
                        setlist={setlist}
                        types={types}
                        page={page}
                        setnumPages={setnumPages}
                    // handleSearch={FoodGroupsControllers.handleSearch} 
                    />
                </Col>

            </Row>
            <Row className="mb-3">
                <Col>
                    <Button variant="primary" onClick={() => {
                        setshow(true)
                        console.log(id)
                    }}>Thêm</Button>
                </Col>
            </Row>
            <Row>
                <ListFoodComponent
                    list={list} page={page}
                />
            </Row>
            <Row >
                <Col xs="auto" className="ms-auto">
                    <CustomPagination
                        as={Col} numPages={numPages} setpage={setpage} page={page}
                    />

                </Col>
            </Row>
        </Container>
    )
}

export default FoodManagementComponent