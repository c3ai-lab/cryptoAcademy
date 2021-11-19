<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @php
    $css_file = "css/app.css";
@endphp
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ url('favicon.ico') }}">
    <title>
        @yield('title', config('app.name', 'Skote'))
    </title>
    <meta content="Skote is a fully featured premium Vuejs admin dashboard template built on top of awesome Bootstrap 5" name="description" />
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset($css_file) }}" rel="stylesheet" id="layout-css">

</head>

<body>
    <noscript>
        <strong>We're sorry but skote doesn't work properly without JavaScript enabled. Please enable it to
            continue.</strong>
    </noscript>
    <div id="app">
        @yield('content')
    </div>
    <!-- built files will be auto injected -->
    @stack('scripts')
</body>

</html>
