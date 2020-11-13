<?php

namespace App;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class PlansItem extends Model
{
    protected $table    = 'plans_item';
    protected $fillable = ['name', 'description', 'cost', 'img'];


    public function benefits() {
        return $this->belongsToMany(
            Benefits::class,
            'plans_benefits',
            'plans_id',
            'benefits_id');
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }

//    public function benefits()
//    {
//        return $this->hasMany(Benefits::class,);
//    }
}
