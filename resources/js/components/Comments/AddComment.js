import React, { useEffect, useState  }  from 'react'
import { Link, useHistory } from 'react-router-dom'

import commentsServices from '../../Services/Comments'

import productServices from '../../Services/Products'

const AddComment = () => {
   const  history = useHistory();

    const [ commentText, setCommentText ] = useState('')
    const [ prodId, setProdId ] = useState(null)
    const [ prodList, setProdList] = useState([]);
    
    console.log(prodList)
    
    useEffect(() => {
        async function fetchDataProd() {
          // load data from API
          const res = await productServices.prodList();
          setProdList(res.data)
        }
        fetchDataProd();
      },[]);
    
    const saveComment = async () => {
        if(prodId == null) {
            alert('Producto es requerido')
        } else{
            const data = {
                commentText, prodId,
            }
            const res = await commentsServices.save(data)
        
            if (res.succes) {
                alert(res.message)
                history.push("/")
            }
            else {
                alert(res.message)
            }
        }
        
      }

    return (
        <div>
            <h4>Add comment to a product  </h4>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="phone">Productos </label>
                    <select id="inputState" class="form-control" required={true} onChange={(event)=> setProdId(event.target.value)}>
                        <option>Elige un producto</option>
                        {
                            prodList.map((item, i)=>{
                                return(
                                    <option key={i} value={item.prod_id}>{item.prod__name}</option>
                                )
                            })
                        }
                </select>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">Comentario </label>
                    <input type="text" class="form-control" required placeholder="escriba su comentario"
                        onChange={ (event) => setCommentText(event.target.value) } />  
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                <button class="btn btn-primary btn-block" type="submit"
                onClick={() => saveComment()}>Guardar</button>
                </div>      
            </div>           
        </div>
    )
}

export default AddComment