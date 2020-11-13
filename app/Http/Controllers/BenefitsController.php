<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Benefits;
use App\PlansItem;
use App\PlansBenifits;
use Auth;
class BenefitsController extends Controller
{
    public function bensfits(){
        $bensfits = Benefits::all();
        return response()->json($bensfits);
    }
    public function onCheckBoxChange(Request $request, $id){
       $user = Auth::user();
       $plansItem = PlansItem::where('id', $id)->first();
       $data = $request->all();
       $benefits = Benefits::whereIn('id', $data)->get();
       foreach ($benefits as $item){
           $benefitsId = $item->id;
       }
        $plansBenifits = new PlansBenifits();
        $plansBenifits->plans_id=$plansItem->id;
        $plansBenifits->benefits_id=$benefitsId;
        $plansBenifits->cheked= true;
        $plansBenifits->save();

        $plansItemBenifits = PlansItem::where('id', $id)->with('benefits')->first();
        $costSum = 0;
        foreach ($plansItemBenifits->benefits as $item){
            $costSum += $item->cost;
        }
        $benifitsPlans = PlansBenifits::where('plans_id', $id)->where('benefits_id',$benefitsId)->first();
        return response()->json([
            'costSum'=>$costSum,
            'cheked' => $benifitsPlans->cheked
        ]);
    }
}
