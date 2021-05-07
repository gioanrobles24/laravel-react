import React, { useEffect, useState } from 'react'
import productServices from '../../Services/Products' 
import { Link } from "react-router-dom"

const List = () => {
    
    const [ prodList, setProdList] = useState([]);
    useEffect(() => {

        async function fetchDataProds(){
          const res = await productServices.prodList();
          console.log(res.data);
         
          setProdList(res.data)
        }
    
        fetchDataProds();
    
      },[])
      
    return (
        <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">price</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
  
          {
            prodList.map((item)=>{
              return(
                <tr key={item.prod_id}>
                  <th scope="row">{item.prod_id}</th>
                  <td>{item.prod__name}</td>
                  <td>{item.prod__price}</td>
                  <td>
                    <Link class="btn btn-outline-info" to={"/products/edit/"+item.prod_id}>Edit</Link>
                     <p> </p> <a href="#" class="btn btn-danger">    Delete </a>
                     <a href="#" class="btn btn-success">    View comments </a>
                  </td>
                </tr>
              )
            })
          }
          
          </tbody>
        </table>
      </section>
    )
}
export default List;