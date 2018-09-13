<?php

require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$consumerkey = "";

$consumersecret = "";

$accesstoken = "";

$accesstokensecret = "";

$connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
$content = $connection->get("account/verify_credentials");


$statuses = $connection->get("statuses/home_timeline", ["count" => 25, "exclude_replies" => true]);

foreach ($statuses as $tweet) {
    
    
    if ($tweet->favorite_count >= 2) {
        
        $status = $connection->get("statuses/oembed", ["id" => $tweet->id]);
        
        echo $status->html;
        
    }
        
    
    
    
}

?>