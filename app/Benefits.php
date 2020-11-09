<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Benefits extends Model
{
    protected $table    = 'benefits';
    protected $fillable = ['name', 'image', 'cost'];

    public function plans() {
        return $this->belongsToMany(
            PlansItem::class,
            'plans_benefits',
            'benefits_id',
            'plans_id');

    }
}
