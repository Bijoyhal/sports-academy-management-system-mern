import React, { useContext } from 'react'
import Table from '../dashboard/table'
import Header from '../dashboard/Header'
import { formAuth } from '../context/formContext'
import View from '../modals/View'

const Dashboard = () => {
  const {view} = useContext(formAuth);
  return (
    <div>
        <Header/>
       <Table/>
       {view && <View/>}
    </div>
  )
}

export default Dashboard
