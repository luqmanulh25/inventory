<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required | email',
            'password' => 'required'
        ]);

        $auth = Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);


        if ($auth) {
            $user = User::find(auth()->id());
            return [
                'user' => $user,
                'token' => $user->createToken($request->device_name ?: 'web')->plainTextToken
            ];
        }
        return response(['message' => 'Wrong username or password'], 403);
    }

    public function logout()
    {
        return Auth::logout();
        return response(['message' => 'You are logged out'], 204);
    }

    public function me()
    {
        return auth()->user();
    }
}
