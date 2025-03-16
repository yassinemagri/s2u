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
        $validated = $request->validate([
            "rating" => 'required|max:5|min:1'
        ]);
        dd($request->all());
        $rating = Rating::create($validated);
        $link = Link::where('id',$request->input('link_id'))->get();
        $link->ratings()->attach($rating);
        return back()->with('succes','Thanks for rating.');
    }
}
