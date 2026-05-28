// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import IncomeManagementComponent from './IncomeManagementComponent'

const IncomeComponent = () => {
  return (
    <ModalFoodProvider>
        <IncomeManagementComponent/>
    </ModalFoodProvider>
  )
}

export default IncomeComponent