<?php

namespace App\Http\Controllers;

use App\Http\Requests\BarangRequest;
use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        $data = Barang::when($request->keyword, function ($q) use ($request) {
            $q->where('nama', 'LIKE', "%{$request->keyword}%");
        })->orderBy('nama', 'asc');

        return $request->paginated ? $data->paginate($request->per_page) : $data->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BarangRequest $request)
    {
        $data = Barang::create($request->all());

        return ['message' => 'Data berhasil disimpan', 'data' => $data];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show(Barang $barang)
    {
        return $barang;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(BarangRequest $request, Barang $barang)
    {
        $barang->Update($request->all());

        return ['message' => 'Data berhasil diubah',  'data' => $barang];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();

        return ['message' => 'Data berhasil dihapus',  'data' => $barang];
    }
}
