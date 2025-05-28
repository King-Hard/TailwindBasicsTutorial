# Dom and Events

1, document.getElementById(id name natin); - function neto is para makuha natin yung element na laman netong id natin then saka natin sya mamanipulahin.



<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DomEvents</title>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
            <link rel="stylesheet" href="../../src/output.css"/>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="border rounded-xl bg-white p-10 w-100">
                <div class="pb-4">
                    <h1 class="text-lg font-semibold">Welcome to Avalmeos</h1>
                    <p class="text-sm">Log in usingthe form below.</p>
                </div>

                <label class="text-sm">Email</label>
                <div class="border border-gray-400 p-2 rounded-md active:border-2">
                    <i class="fas fa-user pl-2"></i>
                    <input type="email" placeholder="Example@gmail.com" class="outline-none pl-2"/>
                </div>

                <label class="text-sm">Password</label>
                <a href="" class="float-right text-sm underline text-blue-500 decoration-blue-500 underline-offset-4">Forgot password?</a>
                <div class="border border-gray-400 p-2 rounded-md">
                    <i class="fas fa-lock pl-2 "></i>
                    <input type="email" placeholder="Password" class="outline-none pl-2"/>
                </div>
            </div>






            <script src="1.js"></script>
        </body>
</html>