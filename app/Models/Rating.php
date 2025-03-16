<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Rating extends Model
{
    use HasFactory, Notifiable;
    
    function link():BelongsToMany {
        return $this->belongsToMany(Link::class);
    }
}
