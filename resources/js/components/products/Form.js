import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

import productServices from '../../Services/Products'

const Form = () => {
  const history = useHistory();
  const [ prodName , setProdName ] = useState(null);
  const [ prodPrice, setProdPrice ] = useState(null);
  
  const saveProduct = async () => {

    const data = {
      prodName, prodPrice, 
    }
    console.log('data', data)
    const res = await productServices.save(data);

    if (res.success) {
      alert(res.message)
      history.pushState("/")
    }
    else {
      alert(res.message)
    }
  }

    return(
        <div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Nombre producto</label>
              <input type="text" class="form-control" placeholder="Nombre del producto" 
                 onChange={ (event) => setProdName(event.target.value)} 
              />
            </div>
          </div>
    
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="number">Precio producto</label>
              <input type="price" class="form-control" placeholder="inserte el precio" 
                 onChange={ (event) => setProdPrice(event.target.value)} 
              />
            </div>
          </div>
    
    
          <div class="row">
            <div class="col-md-6 mb-3">
              <button class="btn btn-primary btn-block" type="submit" onClick={ () => saveProduct() }>Save</button>
            </div>
          </div>
        </div>
      )
}
export default Form