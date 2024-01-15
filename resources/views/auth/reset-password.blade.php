<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
</head>
<body>
    <form action="{{route('auth.reset-password')}}" method="post">
        <h2>Reset Password</h2>
        <input type="hidden" placeholder="Password" name="token" value="{{$token}}">
        <input type="hidden" placeholder="Password" name="email" value="{{$_GET['email']}}">
        <input type="text" placeholder="Password" name="password">
        <input type="text" placeholder="Password Confirmation" name="password_confirmation">
        <button>Reset</button>
    </form>
    
</body>
</html>