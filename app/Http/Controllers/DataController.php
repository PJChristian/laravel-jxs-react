<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function fetchdata(){
        $data = DB::table('user')->get();
                
        return response()->json($data);

    }

}
