<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LegalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function about()
    {
        return Inertia::render('About');
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
    public function PrivacyPolicy()
    {
        return Inertia::render('PrivacyPolicy');
    }
    public function DevDetails()
    {
        return Inertia::render('DevDetails');
    }
    public function TermsAndConditions()
    {
        return Inertia::render('TermsAndConditions');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
