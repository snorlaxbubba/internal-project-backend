<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profiles;

class FlavriteController extends Controller
{
    public function index()
    {
        return view('flavrite.index');
    }

    public function getFlavriteMatchJSON()
    {
       $profile = Profiles::all();
         return response()->json($profile);
    }
}
