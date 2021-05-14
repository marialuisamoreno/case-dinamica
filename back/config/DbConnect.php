<?php 
include_once dirname(__FILE__)  . '/Constants.php';
class DbConnect{
    function connect($environment){ 
        $dbhost="localhost";
        $dbuser="sem-user";
        $dbpass="sem-user";
        $dbname="case";
        $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $conn;
    }
}
?>