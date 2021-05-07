<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $table = "comments";

    protected $primaryKey = "comment_id";
    
    protected $fillable = [
        "comment_text", 
        "prod_id"
    ];
    public $timestamps = false;

    public function prod(){
        return $this->belongsTo("App\Models\Products","prod_id");
      }
}
