<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_supplier',
        'alamat'
    ];

    protected static function booted()
    {
        self::creating(function ($model) {
            $lastID = Supplier::count() ? Supplier::max('id') + 1 : 1;
            $model->kd_supplier = $lastID;
        });
    }
}
