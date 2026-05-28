// Chỗ này nè Kiên!!!!!!!!!!!!!!!
import React from 'react'
import { ModalTypeProvider } from '../../context/ModalType'
import { FoodGroupsManagement } from './FoodGroupsManagement'
const TypeComponent = () => {
  return (
    <ModalTypeProvider>
        <FoodGroupsManagement/>
    </ModalTypeProvider>
  )
}

export default TypeComponent