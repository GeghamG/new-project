<?php

namespace App\Http\Middleware;

use Exception;
use Closure;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;


class JwtAuth extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
//    public function handle($request, Closure $next)
//    {
//        if (auth()->guard('user')->user()) {
//            return $next($request);
//        }
//        return false;
//    }

}
