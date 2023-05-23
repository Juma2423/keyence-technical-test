<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/read-excel-file@5.x/bundle/read-excel-file.min.js"></script>
    <title>CRUD KEYENCE</title>
</head>
<body>
    <div class="container">
        <input type="file" name="" id="file/input" required>
    </div>
    <table class="table table/bordered" id="excel/table">
    </table>
    <template>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Userid</th>
                <th scope="col">UserName</th>
                <th scope="col">Date</th>
                <th scope="col">Punch In</th>
                <th scope="col">PunchOut</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in data">
                <td>{{ row.userid }}</td>
                <td>{{ row.username }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.punchIn }}</td>
                <td>{{ row.punchOut }}</td>
            </tr>
            </tbody>
        </table>
    </template>

    
</body>
<script src="./js/script.js"></script>
<script src="./js/crud.js"></script>
</html>