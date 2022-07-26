import { useParams } from 'react-router-dom'
import AddProductForm from '../components/product/AddProductForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const EditProduct = () => {
  const { id } = useParams()
  const history = useHistory()

  const editProductsAPI = (data) =>
    axios.put(`http://localhost:8000/products/${id}`, data)
      .then((response) => {
        history.push('/all-products')
      })
      .catch((error) => {
        console.log(error)
      })

  const onSubmit = (data) => {
    editProductsAPI(data)
  }

  return (
    <div className="card">
      <div className="card-header">ویرایش محصول</div>
      <div className="card-body">
        <AddProductForm onSubmit={onSubmit} mode="edit" />
      </div>
    </div>
  )
}

export default EditProduct
