import React, { useState } from 'react'
import AdminGroups from '../adminBody/AdminGroups'

const AdminPage = () => {
  const [visibleAdminGroup,setVisibleAdminGroup] = useState(false)
  const [visibleUserGroup,setVisibleUserGroup] = useState(false)
  return (
    <div>
    <AdminGroups visibleAdminGroup={visibleAdminGroup} visibleUserGroup={visibleUserGroup} setVisibleAdminGroup={setVisibleAdminGroup} setVisibleUserGroup={setVisibleUserGroup}/>
      
    </div>
  )
}

export default AdminPage
