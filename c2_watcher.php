#!/usr/bin/php
<?php
date_default_timezone_set("America/New_York");
$lul;
$check_cnc;
$ticks = 0;
while(true) {
    $check_cnc = "";
    $result = exec("pgrep -fl cnc", $check_cnc, $lul);
    $check_cnc = implode(" | ", $check_cnc). "\r\n\r\n";
    if(strpos($check_cnc, "node") !== false) {
        echo "[Ticks: $ticks] CNC is up | ". date("m/d/y-g:ia"). "\r\n";
    } else {
        echo "[Ticks: $ticks] CNC is down | ". date("m/d/y-g:ia"). "\r\n";
        echo "Waiting 60 seconds to restart Refresh PORT!\r\n";
        wait_60sec_to_put_back_up();
    }
    $ticks++;
    sleep(1);
}

function wait_60sec_to_put_back_up() {
    sendDiscord("down");
    sleep(60);
    echo "Starting CNC....!\r\n";
    $cnc = "";
    $lul = "";
    $result = exec("pgrep -fl cnc", $cnc, $lul);
    if(strpos($check_cnc, "node") !== false) {
        echo "Noticed the CNC is back up so i didnt try!...\r\n";
        sendDiscord("start");
    } else {
        exec("screen -dmS cnc node cnc.js");
        sendDiscord("start");
    }
}

function sendDiscord($log) {
    if($log == "start") {
        exec("curl 'https://syntaxapi.xyz/suk.php?log=CNC Started!'");
    } else {
        exec("curl 'https://syntaxapi.xyz/suk.php?log=CNC Went Down! Starting in 60 seconds...'");
    }
}

?>