<?php

namespace App\Http\Controllers;

use App\PlansBenifits;
use Illuminate\Http\Request;
use App\PlansItem;
use Auth;
use App\CardHandler;
use App\Models\User;
class PlansItemController extends Controller
{
    public function plansItem()
    {   $user = Auth::user();
        $plansItem = PlansItem::all();
        $userItem = User::where('id', $user->id)->with('plans')->first();

        $data = $userItem->plans;

            return response()->json([
                'status' => 'success',
                'data'=>$data,
                'plansItem' => $data? $data:$plansItem]);
    }
  public function ChoosePlansItem($id){
      $plansItem = PlansItem::where('id', $id)->first();
      return response()->json([
          'status' => 'success',
          'plansItem' => $plansItem]);
  }

  public function onCheckout($id){
      $user = Auth::user();;
      $userItem = User::where('id', $user->id)->update(["plans_id"=>$id]);
      return $this->plansItem();
  }

  public function checked(){
      $user = Auth::user();
      $plansItem = PlansItem::where('user_id', $user->id)->first();
      return response()->json($plansItem);
  }

  public function updateCardHandler(Request $request, $id){

          $user = Auth::user();
          $plansItem = PlansItem::where('id', $id)->first();
          $cardHandler = new CardHandler();
          $cardHandler->plans_id = $plansItem->id;
          $cardHandler->costSum = $request->tmpCost;
          $cardHandler->period = $request->resubscribePeriodValue;
          $cardHandler->save();
  }

  public function plansBenefits($id){
      $cardHandler = CardHandler::where('plans_id', $id)->first();
      $plansItemBenifits = PlansItem::where('id', $id)->with('benefits')->first();
      $array=[];
      foreach ($plansItemBenifits->benefits as $item){
          array_push($array, $item->name);
      }

     return response()->json([
         'name' => $array,
         'costSum'=>$cardHandler->costSum,
         'period' =>  $cardHandler->period,
      ]);
  }

  public function updatePlan($id){
      $user = Auth::user();
      $userItem = User::where('id', $user->id)->where('plans_id',$id)->update(["plans_id"=>0]);
      return response()->json([
          'status'=>'success'
      ]);
  }
}
