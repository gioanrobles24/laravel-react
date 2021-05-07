import React, { useEffect, useState } from 'react'
import productServices from '../../Services/Products' 
import { Link, useHistory } from "react-router-dom"

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
      
      const onClickDelete = async (i,id) => {

        const  yes = confirm("are you sure to delete this item?");

        if (yes === true){
    
          const res = await productServices.delete(id)
    
          if (res.success) {
            alert(res.message) 

            const newList = prodList

            newList.splice(i,1)
            setProdList(newList);
          }
          else{
            alert(res.message);
          }
        }
    
      }  
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
            prodList.map((item, i)=> {
              return(
                <tr key={i}>
                  <th scope="row">{item.prod_id}</th>
                  <td>{item.prod__name}</td>
                  <td>{item.prod__price}</td>
                  <td>
                    <Link class="btn btn-outline-info" to={'/product/edit/'+item.prod_id}> Edit</Link>
                     <p> </p> <a href="#" class="btn btn-danger"   onClick={() => onClickDelete(i,item.prod_id)}>    Delete </a>
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