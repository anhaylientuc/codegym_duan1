// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import BillManagementComponent from './BillManagementComponent'

const BillComponent = () => {
  return (
    <ModalFoodProvider>
        <BillManagementComponent/>
    </ModalFoodProvider>
  )
}

export default BillComponent