<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlansItem;
use Auth;
class PlansItemController extends Controller
{

    public function plansItem()
    {   $user = Auth::user();
        $plansItem = PlansItem::all();
        $plansItemChekout = PlansItem::where('user_id', $user->id)->first();
        if( $plansItemChekout){
            return response()->json([
                'status' => 'success',
                'plansItem' => $plansItemChekout]);
        }else{
            return response()->json([
                'status' => 'success',
                'plansItem' => $plansItem]);
        }
    }

  public function ChoosePlansItem($id){
      $plansItem = PlansItem::where('id', $id)->first();
      return response()->json([
          'status' => 'success',
          'plansItem' => $plansItem]);
  }

  public function onCheckout($id){
      $user = Auth::user();
      $plansItem = PlansItem::where('id', $id)->update(["user_id"=>$user->id]);
      return $this->checked();
  }

  public function checked(){
      $user = Auth::user();
      $plansItem = PlansItem::where('user_id', $user->id)->first();
      return response()->json($plansItem);
  }

  public function onCheckBoxChange(Request $request){
        dd($request->all());
  }
}
