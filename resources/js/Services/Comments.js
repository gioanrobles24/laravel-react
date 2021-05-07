const baseUrl = "http://localhost:8000/api/comments"

import axios from "axios";

const commentsServices = {};

commentsServices.save = async (data) => {
  const urlSave= baseUrl+"/create"

  const res = await axios.post( urlSave,data )
    .then(response=> { 
        return response.data 
    })
    .catch(error=>{ return error; })
  
  return res;
}

commentsServices.get = async (id) => {

    const urlGet = baseUrl+"/get/"+id

    const res = await axios.get(urlGet)
     .then(response=>{ 
         return response.data 
     })
     .catch(error => { return error })
    return res;
  
  }
  commentsServices.update = async (data) => {

    const urlUpdate = baseUrl+"/update/"+data.prodId

    const res = await axios.put(urlUpdate,data)

    .then(response=>{
         return response.data;
         })
    .catch(error =>{ return error; })

    return res;

  } 
  
  commentsServices.delete = async (prodId) => {
    const urlDelete = baseUrl+"/delete/"+prodId
    const res = await axios.delete(urlDelete)
      .then(response=> { 
        return response.data 
      })
      .catch(error =>{ return error })
    return res;
  }
  export default commentsServices