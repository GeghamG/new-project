<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Songs extends Model
{
    protected $fillable = ['video_id', 'video_title', 'video_description', 'playlist_id'];
}
