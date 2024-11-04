import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Main404 from './Main404';

function IphonePage() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  // console.log(productID);


  useEffect(() => {
    fetch("/iphone.json")
      .then(res => res.json())
      .then(data => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productID);
        setProduct(singleProduct);
      })
      .catch(() => console.log('Error:'));
  }, [productID]);
  console.log(product);

  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">

            {product?.map((product) => {
              return (
                <div
                  key={product.product_id}>
                  <div className='row justify-content-center text-center product-holder h-100'>
                    <div
                      className={`col-sm-12  my-5`} >
                      <div className='title-wrapper'><h1>{product.product_name}</h1></div>
                      <div className='product-brief'>
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center text-center product-holder h-100'>
                    <div
                      className={`col-sm-12 col-md-6  my-auto`} >
                      <div className='starting-price'>
                        {`starting at ${product.starting_price}`}
                      </div>
                      <div className='monthly-price'> {product.price_range}
                      </div>
                      {/* <div className='product-details'> {product.product.product_details}
                    </div> */}
                    </div>


                    <div
                      className="col-sm-12 col-md-6 "
                    >
                      <div className='product-image'>
                        <img src={product.product_img} alt={product} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    )
  } else {
    return <Main404 />
  }
}

export default IphonePage;