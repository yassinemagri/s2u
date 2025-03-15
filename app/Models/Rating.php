<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Rating extends Model
{
    function link():BelongsToMany {
        return $this->belongsToMany(Link::class);
    }
}
