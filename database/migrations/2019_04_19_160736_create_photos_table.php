<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photo', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("idGallery")->unsigned()->nullable();
            $table->integer("idProject")->unsigned()->nullable();
            $table->string("description")->nullable();
             $table->rememberToken();
            $table->foreign("idGallery")->references("id")->on("gallery")->delete("cascade");
            $table->foreign("idProject")->references("id")->on("project")->delete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photo');
    }
}
