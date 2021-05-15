<?php
error_reporting(0);
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;

require './../vendor/autoload.php';

$config = [
    'settings' => [
        'displayErrorDetails' => true
    ],
];

$app = new \Slim\App($config);

require '../config/config.php';
require '../config/jwt.php';
require '../routes/products.php';
require '../routes/clients.php';

$app->run();
?>