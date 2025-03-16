<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class Link extends Model
{
    use HasFactory, Notifiable;
    function user():BelongsTo {
        return $this->belongsTo(User::class);
    }
    function rating(int $number) {
        $rating = Rating::firstOrCreate(["rating" => $number]);
        return $this->ratings()->attach($rating);
    }
    function ratings():BelongsToMany {
        return $this->BelongsToMany(Rating::class);
    }
    protected $appends = ['avg_rating'];
    function getAvgRatingAttribute() {
        return $this->ratings()->avg('rating') ?? 0;
    }
}
