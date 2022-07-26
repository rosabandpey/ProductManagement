import React from 'react'
import AddProductForm from '../components/product/AddProductForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const AddProduct = () => {

  const history = useHistory()
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/products", data)
      .then((response) => {
        history.push('/all-products')
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <>
      <div className="card bg-gradient-success text-white">
        <div className="card-header">افزودن محصول</div>
        <div className="card-body">
          <AddProductForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  )
}

export default AddProduct
