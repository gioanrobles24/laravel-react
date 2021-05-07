const baseUrl = "http://localhost:8000/api/products"

import axios from "axios";

const productServices = {};

productServices.prodList = async () => {
  const urlList = baseUrl+"/list"

  const res = await axios.get(urlList)
    .then(response=> {
        return response.data 
    })
    .catch(error=>{ return error; })
  
    return res;
}

productServices.save = async (data) => {
  const urlSave= baseUrl+"/create"

  const res = await axios.post( urlSave,data )
    .then(response=> { 
        return response.data 
    })
    .catch(error=>{ return error; })
  
  return res;
}

productServices.get = async (id) => {

    const urlGet = baseUrl+"/get/"+id

    const res = await axios.get(urlGet)
     .then(response=>{ 
         return response.data 
     })
     .catch(error => { return error })
    return res;
  
  }
 productServices.update = async (data) => {

    const urlUpdate = baseUrl+"/update/"+data.prodId

    const res = await axios.put(urlUpdate,data)

    .then(response=>{
         return response.data;
         })
    .catch(error =>{ return error; })

    return res;

  } 

export default productServices