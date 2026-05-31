// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalFoodProvider } from '../../context/ModalFood'
import BillManagementComponent from './BillManagementComponent'
import '../../style/management.css'
const BillComponent = () => {
  return (
    <ModalFoodProvider>
        <BillManagementComponent/>
    </ModalFoodProvider>
  )
}

export default BillComponent