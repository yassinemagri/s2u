<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Link extends Model
{
    use HasFactory, Notifiable;
    function user():BelongsTo {
        return $this->belongsTo(User::class);
    }
}
