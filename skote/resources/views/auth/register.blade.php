@extends('layouts.app')
@section('title')
   {{ __('page-titles.register') }} | {{ config('app.name', 'Skote') }}
@endsection
@section('content')
<div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <register submit-url="{{ route('register') }}" reg-error="{{ $errors->first() }}">
            @csrf
        </register>
      </div>
    </div>
  </div>
@endsection
