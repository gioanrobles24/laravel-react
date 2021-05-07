import React , { useState, useEffect } from 'react'

import productServices from '../../Services/Products'

const Edit = ( props ) => {
    
  const [ prodId, setId ] = useState(null);
  const [ prodName, setProdName ] = useState("");
  const [ prodPrice, setProdPrice ] = useState("");
  
  const updateEmployee = async () => {

    const data = {
      prodId, prodName, prodPrice
    }

    const res = await productServices.update(data);

    if (res.success) {
      alert(res.message)

    }
    else {
      alert(res.message)
    }

  }

  useEffect(() => {

    async function fetchDataProd(){
      const  id = props.match.params.id;

      const res = await productServices.get(id);

      if (res.success) {
        console.log(res);
        const data = res.data
        setId(data.prod_id)
        setProdName(data.prod__name)
        setProdPrice(data.prod__price)
    
      }
      else {
        alert(res.message)
      }
    }
    fetchDataProd();
  },[])
  
    return (
        <div>
            <h4>Edit product  </h4>
        <hr/>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="prodName"> producto </label>
            <input type="text" class="form-control" value={prodName} 
               onChange={ (event) => setProdName(event.target.value)} 
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="price">Precio</label>
            <input type="price" class="form-control" value={prodPrice} 
               onChange={ (event) => setProdPrice(event.target.value)} 
            />
          </div>
        </div>
    
 
    
          <div class="row">
            <div class="col-md-6 mb-3">
              <button class="btn btn-primary btn-block" type="submit" onClick={()=>updateEmployee()} >Save</button>
            </div>
          </div>
        </div>
      )  
}
export default Edit