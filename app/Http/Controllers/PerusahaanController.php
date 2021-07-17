<?php

namespace App\Http\Controllers;

use App\Http\Requests\PerusahaanRequest;
use App\Models\Perusahaan;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class PerusahaanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = Perusahaan::when($request->keyword, function ($q) use ($request) {
            $q->where('nama_perusahaan', 'LIKE', "%{$request->keyword}%");
        })->orderBy('nama_perusahaan', 'asc');

        return $request->paginated ? $data->paginate($request->per_page) : $data->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PerusahaanRequest $request, Perusahaan $perusahaan)
    {
        $data = $request->all();

        $perusahaan->create($data);

        return response(['message' => 'Data berhasil disimpan'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Perusahaan  $perusahaan
     * @return \Illuminate\Http\Response
     */
    public function show(Perusahaan $perusahaan)
    {
        return $perusahaan;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Perusahaan  $perusahaan
     * @return \Illuminate\Http\Response
     */
    public function update(PerusahaanRequest $request, Perusahaan $perusahaan)
    {
        $data = $request->all();

        $perusahaan->update($data);

        return response(['message' => 'Data berhasil diubah'], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Perusahaan  $perusahaan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Perusahaan $perusahaan)
    {
        $perusahaan->delete();

        return response(['message' => 'Data berhasil dihapus'], 201);
    }
}
