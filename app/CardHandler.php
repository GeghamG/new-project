<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CardHandler extends Model
{
    protected $table    = 'cardHandler';
    protected $fillable = ['plans_id', 'costSum', 'period'];
}
