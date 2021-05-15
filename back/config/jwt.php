<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;
include_once dirname(__FILE__)  . '/Constants.php';

$app->add(new Tuupola\Middleware\JwtAuthentication([
    "secret" => KEY,
    "path" => ["/prd/api", "/qas/api", "/dev/api"],
    "error" => function ($response, $arguments) {
        $data["error"] = true;
        $data["message"] = "Token invalido";
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus(401)
            ->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));

// ROLE ONLY ADMIN
$RoleMiddlewareADMIN = function ($request, $response, $next) {    
    $authHeader = $request->getHeader('authorization');
    $jwt = "";
    if ($authHeader) {
        foreach($authHeader as $k => $data){            
            $jwt = trim((string) str_replace('Bearer', '', $data), ' \n');
        }
    }
    if($jwt != ""){
        $alg = array("HS256");    
        $token = JWT::decode($jwt, KEY, $alg);    
        $ADMIN = 0;
        foreach($token as $t => $value){
            if($t == "role"){
                foreach($value as $v => $vle){
                    if($v == "ADMIN"){
                        $ADMIN = $vle;
                    }
                }
            }
        }
        if($ADMIN == 1){
            return $next($request, $response);
        }else{
            // FORBIDDEN STATUS CODE
            return $response->withRedirect('/', 403);
        }
    }else{
        // IF TOKEN DOES NOT EXIST YET, GO ON
        return $next($request, $response);
    } 
};

// ROLE USER - INCLUDES ADMIN
$RoleMiddlewareUSER = function ($request, $response, $next) {    
    $authHeader = $request->getHeader('authorization');
    $jwt = "";
    if ($authHeader) {
        foreach($authHeader as $k => $data){            
            $jwt = trim((string) str_replace('Bearer', '', $data), ' \n');
        }
    }
    if($jwt != ""){
        $alg = array("HS256");    
        $token = JWT::decode($jwt, KEY, $alg);    
        $ADMIN = 0;
        $USER = 0;
        foreach($token as $t => $value){
            if($t == "role"){
                foreach($value as $v => $vle){
                    if($v == "ADMIN"){
                        $ADMIN = $vle;
                    }
                    if($v == "USER"){
                        $USER = $vle;                    
                    }
                }
            }
        }
        if($ADMIN == 1 || $USER == 1){
            return $next($request, $response);
        }else{
            // FORBIDDEN STATUS CODE
            return $response->withRedirect('/', 403);
        }
    }else{
        // IF TOKEN DOES NOT EXIST YET, GO ON
        return $next($request, $response);
    } 
};
?>