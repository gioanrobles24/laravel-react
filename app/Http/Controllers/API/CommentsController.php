<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comments;
use App\Models\Products;

class CommentsController extends Controller
{

    /* public function list_comments() {
        $data = Comments::get();

        $response['data'] = $data;
        $response['succes'] = true;
        
        return $response;
    } */

    public function create(Request $request){
       try{

        $insert['comment_text'] = $request['commentText'];
        $insert['prod_id'] = $request['prodId'];

        Comments::insert($insert);

        $response['message'] = "Save succesful";
        $response['succes'] = true;

       }  catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['succes'] = true;
      }
       
      return $response;
    }
}
