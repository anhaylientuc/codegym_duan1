// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import FoodManagementComponent from './FoodManagementComponent'

const FoodComponent = () => {
    return (
        <ModalFoodProvider>
            <FoodManagementComponent />
        </ModalFoodProvider>
    )
}

export default FoodComponent