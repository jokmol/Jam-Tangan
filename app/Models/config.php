<?php

$server = "localhost";
$user = "root";
$pass = "";
$database = "db_spp2023";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>
