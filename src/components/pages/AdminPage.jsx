import React, { useState } from 'react'
import AdminBody from '../adminBody/AdminBody'

const AdminPage = () => {
  const [visibleAdmin,setVisibleAdmin] = useState(false)
  return (
    <div>
    <AdminBody visibleAdmin={visibleAdmin} setVisibleAdmin={setVisibleAdmin}/>
      
    </div>
  )
}

export default AdminPage
