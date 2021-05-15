<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;
require '../config/DbOperations.php';

$app->get('/{environment}/api/products/details', function (Request $request, Response $response, array $args) {
    $environment = $args['environment'];
    $db = new DbOperations($environment); 
    $values = $db->getAllProducts();
    $response_data = array();
    
    if($values){
        $response_data['error'] = false; 
        $response_data['result'] = $values->fetchAll(PDO::FETCH_OBJ); 
        $response->write(json_encode($response_data));
        return $response
            ->withHeader('Content-type', 'application/json')
            ->withStatus(200); 
    }else{        
        $response_data['error'] = true; 
        $response->write(json_encode($response_data));
        return $response
        ->withHeader('Content-type', 'application/json')
        ->withStatus(500); 
    }        
});

$app->post('/{environment}/api/products/save', function(Request $request, Response $response, array $args){

    $environment = $args['environment'];
    $db = new DbOperations($environment); 
    $request_data = $request->getParsedBody();
    $PROD_NAME = $request_data['prod_name'];
    $IMAGE_FILE = $request_data['image_file'];
    $PRICE = $request_data['price'];
    $PROMO_STATUS = $request_data['promo_status'];
    $PROMO_PRICE = $request_data['promo_price'];
    $EMBLEM = $request_data['emblem'];
    $SIZE = $request_data['size'];
    $TAG = $request_data['tag'];
    $response_data = array();

    $values = $db->addProduct($PROD_NAME, $IMAGE_FILE, $PRICE, $PROMO_STATUS, $PROMO_PRICE, $EMBLEM, $SIZE, $TAG);

    if($values > 0){
        $response_data['error'] = false;
        $response->write(json_encode($response_data));
        return $response
            ->withHeader('Content-type', 'application/json')
            ->withStatus(200);
    }else{
        $response_data['error'] = true; 
        $response->write(json_encode($response_data));
        return $response
        ->withHeader('Content-type', 'application/json')
        ->withStatus(500); 
    }
});

$app->get('/{environment}/api/emblems/all', function (Request $request, Response $response, array $args) {
    $environment = $args['environment'];
    $db = new DbOperations($environment); 
    $values = $db->getAllEmblems();
    $response_data = array();
    
    if($values){
        $response_data['error'] = false; 
        $response_data['result'] = $values->fetchAll(PDO::FETCH_OBJ); 
        $response->write(json_encode($response_data));
        return $response
            ->withHeader('Content-type', 'application/json')
            ->withStatus(200); 
    }else{        
        $response_data['error'] = true; 
        $response->write(json_encode($response_data));
        return $response
        ->withHeader('Content-type', 'application/json')
        ->withStatus(500); 
    }        
});

$app->get('/{environment}/api/status/all', function (Request $request, Response $response, array $args) {
    $environment = $args['environment'];
    $db = new DbOperations($environment); 
    $values = $db->getAllStatus();
    $response_data = array();
    
    if($values){
        $response_data['error'] = false; 
        $response_data['result'] = $values->fetchAll(PDO::FETCH_OBJ); 
        $response->write(json_encode($response_data));
        return $response
            ->withHeader('Content-type', 'application/json')
            ->withStatus(200); 
    }else{        
        $response_data['error'] = true; 
        $response->write(json_encode($response_data));
        return $response
        ->withHeader('Content-type', 'application/json')
        ->withStatus(500); 
    }        
});
?>