import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



function Iphone() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('iphone.json')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphone Page</h1>
              <div className='brief-description mb-5'>
                <p>iPhone Pages is Apple's powerful word-processing app designed to create stunning documents, reports, and resumes on the go. With intuitive tools, customizable templates, and real-time collaboration, Pages offers users the flexibility to write, edit, and design beautiful documents.</p>
              </div>
            </div>
          </div>

          {products?.map((product, index) => {
            let productDiv = (
              <div
                key={product.product_url}
                className='row justify-content-center text-center product-holder h-100'>
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${index % 2 === 0 ? '1' : '2'
                    }`} >
                  <div className='product-title'><h1>{product.product_name}</h1></div>
                  <div className='product-brief'>
                    {product.product_brief_description}
                  </div>
                  <div className='starting-price'>
                    {`starting at ${product.starting_price}`}
                  </div>
                  <div className='monthly-price'> {product.price_range}</div>

                  <div className='Links-wrapper'>
                    <ul>
                      <li className='learn'>
                        <Link to={`/iphone/${product.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${index % 2 === 0 ? '2' : '1'
                    }`} >
                  <div className='product-image'>
                    <img src={product.product_img} alt={products} />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}


export default Iphone;