<?php

// Would normally store these in an env but for the purpose of the challenge I left them here
$host = "db";
$user = "root";
$password = "qwertyui";
$dbname = "api";
$id = '';

if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

//// Access-Control headers are received during OPTIONS requests
//if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//
//    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//        // may also be using PUT, PATCH, HEAD etc
//        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//
//    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
//
//    exit(0);
//}


$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
        $id = $_GET['id'];
        $firstname = $_GET['firstname'];
        $surname = $_GET['surname'];
        $email = $_GET['email'];
        $gender = $_GET['gender'];
        $joined_date = $_GET["joined_date"];
        $offset = $_GET["offset"];
        $rowCount = $_GET["rowCount"];
        $sql = "select * from members where firstname LIKE '$firstname%' AND surname Like '$surname%' AND email LIKE '$email%' AND gender LIKE '$gender%' AND joined_date LIKE '$joined_date%' LIMIT $offset, $rowCount";
        break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

//if ($method == 'GET') {
//    if (!$id) echo '[';
//    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
//        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
//    }
//    if (!$id) echo ']';
//} elseif ($method == 'POST') {
//    echo json_encode($result);
//} else {
//    echo mysqli_affected_rows($con);
//}

$con->close();
