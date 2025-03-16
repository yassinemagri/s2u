<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Rating;
use Illuminate\Http\Request;
use Database\Factories\RatingFactory;

class RatingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate(["rating" => 'required|max:5|min:1']);
        $rating = Rating::create($validated);
        $link = Link::find($request->input('link_id')); 
        if ($link) $link->ratings()->save($rating); 
        else return back()->with('error','Something went wrong.');
        return back()->with('success','Thanks for rating.');
    }
}
