<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profiles extends Model
{
    use HasFactory;
    
   protected $fillable = [
        'name',
        'email',
        'favorite_match_score',
        'flavrite_match',
     ];
}
