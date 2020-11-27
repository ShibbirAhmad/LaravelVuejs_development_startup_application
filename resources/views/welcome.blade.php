<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Styles -->
      
    </head>
    <body>
     <div id="app" class="wrpper">
              <router-view> </router-view>
              <router-link  target="_blank" to="/backend/admin/dashboard"> AdminDashboard </router-link>
     </div>
     <script src="{{ asset('/js/app.js') }}"> </script>
    </body>
</html>
