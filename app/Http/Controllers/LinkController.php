<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $links = Link::latest()->where('user_id', Auth::id())->with('user:id,username')->paginate(7);
        return Inertia::render('Links/Index',compact('links'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Links/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required',"min:8", "max:100"],
            'unlock_link' => ['required',"min:10","url"],       
            'channel_link' => ['required',"min:25","url"],
            'description' => ["min:0", "max:255"],
        ]);
        $validated["user_id"] = Auth::id();
        Link::create($validated);
        return Redirect::route('my-links')->with('success', 'Your link has been generated.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Link $link)
    {
        $link->loadMissing('user');
        return Inertia::render('Links/Show',compact("link"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Link $link)
    {
        $link->loadMissing('user');
        // if($link->user->id !== Auth::id()) return redirect('/');
        return Inertia::render('Links/Edit',compact("link"));
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
        dd("DELETING YOUR POST GOES HERE");
    }
}
