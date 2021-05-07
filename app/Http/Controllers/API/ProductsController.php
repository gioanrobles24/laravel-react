<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comments;
use App\Models\Products;

class ProductsController extends Controller
{

    public function list_comments() {
        $data = Comments::get();

        $response['data'] = $data;
        $response['succes'] = true;
        
        return $response;
    }

    public function create(Request $request){
       try{

        $insert['prod__name'] = $request['prodName'];
        $insert['prod__price'] = $request['prodPrice'];

        Products::insert($insert);

        $response['message'] = "Save succesful";
        $response['succes'] = true;

       }  catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['succes'] = true;
      }
       
      return $response;
    }

    public function list () {
        try {

            $data = Products::All();
            $response['data'] = $data;
            $response['success'] = true;
            
        }  catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
    }
    public function get($id){

        try {
  
          $data = Products::where('prod_id',  $id)->first();
  
          if ($data) {
            $response['data'] = $data;
            $response['message'] = "Load successful";
            $response['success'] = true;
          }
          else {
            $response['message'] = "Not found data id => $id";
            $response['success'] = false;
          }
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
      }
    public function update(Request $request,$id){

        try {
  
          $data['prod__name'] = $request['prodName'];
          $data['prod__price'] = $request['prodPrice'];
          
          Products::where('prod_id', $id)->update($data);
  
          $response['message'] = "Updated successful";
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
    }
    public function delete($id) {

        try {
          $res = Products::where('prod_id', $id)->delete();
          $response['res'] = $res;
          
          $response['message'] = "Deleted successful";
          $response['success'] = true; 

        } catch (\Exception $e) {
          
            $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
  
        return $response;
    }
}
