<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
    public function fetchData()
    {
        // Using the DB facade to query the database
        $data = DB::table('users')
                ->get();

        // Return data as JSON for easy consumption in React
        return response()->json($data);
    }

}
