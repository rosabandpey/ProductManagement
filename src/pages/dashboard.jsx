import React from 'react'
import Chart from '../components/dashboard/Chart'
import DashboardWidget from '../components/dashboard/DashboardWidget'
import EmployeesChart from '../components/dashboard/EmployeesChart'

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <DashboardWidget
          title="تعداد فروش"
          icon="shopping-cart"
          value="123"
          color="bg-gradient-danger"
        />
        <DashboardWidget
          title="مبلغ فروش"
          icon="shopping-cart"
          value="123,000"
          color="bg-gradient-info"
        />
        <DashboardWidget
          title="تعداد محصولات"
          icon="shopping-cart"
          value="12"
          color="bg-gradient-success"
        />
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <EmployeesChart />
        </div>
        <div className="col-md-6">
          <Chart />
        </div>
      </div>
    </>
  )
}

export default Dashboard
