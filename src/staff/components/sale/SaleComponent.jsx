// Chỗ này nè Kiên!!!!!!!!!!!!!!!

import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import SaleManagementComponent from './SaleManagementComponent'

const SaleComponent = () => {
    return (
        <ModalFoodProvider>
            <SaleManagementComponent />
        </ModalFoodProvider>
    )
}

export default SaleComponent