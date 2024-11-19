<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    

    public function fetchData()
    {
        // Using the DB facade to query the database
        $data = DB::table('users')
                ->get();

        // Return data as JSON for easy consumption in React
        return response()->json($data);
    }

    public function countUser()
    {
        // Using the DB facade to query the database
        $data = DB::table('users')
                ->count();

        // Return data as JSON for easy consumption in React
        return response()->json($data);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
