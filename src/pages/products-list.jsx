import React, { useEffect, useState } from 'react'
import { RemoveModal } from '../components/productlist/RemoveModal'
import { getAllProductsAPI, removeProductAPI } from "../services/api";
import { Link } from "react-router-dom";


const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getAllProductsAPI()
      .then(response => {
        setProducts(response.data)

      })
      .catch(error => console.log(error))
  }, [])


  const onHandleConfirm = () => {
    removeProductAPI(product.id)
      .then(response => {
        getAllProductsAPI()
          .then(response => {
            setProducts(response.data)
            setProduct(null)
          })
          .catch(error => console.log(error))


      })
      .catch(error => console.log(error))

  }

  const onHandleClose = () => {
    setProduct(null)
  }


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {product && <RemoveModal product={product} onConfirm={onHandleConfirm} onClose={onHandleClose} />}

            {products.length === 0 && (
              <p>
                محصولی موجود نمی‌باشد، برای افزودن محصول جدید روی "افزودن محصول"
                در منوی سمت راست کلیک نمایید!
              </p>
            )}
            {products.length > 0 ?
              <table className="table table-sm table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">نام محصول</th>
                    <th scope="col">قیمت</th>
                    <th scope="col">دسته‌بندی</th>
                    <th scope="col">موجودی</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.name}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.availability}</td>
                      <td >
                        <Link to={`/products/edit/${product.id}`} type="button" >
                          ویرایش
                        </Link>
                      </td>
                      <td >
                        <button onClick={() => setProduct(product)} >حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              : <div>محصولی یافت نشد!</div>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductsList
