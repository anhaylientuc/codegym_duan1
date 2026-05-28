// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import TableManagementComponent from './TableManagementComponent'
const TableComponent = () => {
    return (
        <ModalFoodProvider>
            <TableManagementComponent />
        </ModalFoodProvider>
    )
}

export default TableComponent