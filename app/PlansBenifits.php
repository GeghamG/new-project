<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlansBenifits extends Model
{
    protected $table    = 'plans_benefits';
    protected $fillable = ['plans_id', 'benefits_id', 'user_id'];
}
