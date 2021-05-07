const baseUrl = "http://localhost:8000/api/products"

import axios from "axios";

const productServices = {};

/* product.list = async () => {
  const urlList = baseUrl+"/role"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
} */

productServices.save = async (data) => {
  const urlSave= baseUrl+"/create"

  const res = await axios.post( urlSave,data )
    .then(response=> { 
        return response.data 
    })
    .catch(error=>{ return error; })
  
  return res;
}

export default productServices