<?php
/**
 * Created by PhpStorm.
 * User: drichardsona
 * Date: 23/12/2015
 * Time: 08:58
 */

session_start();

if(isset($_GET['themeaningoflife']) && $_GET['themeaningoflife']==42){
    $_SESSION['bypass_maintenance'] = 1;
    header("location: /home");
    die();
}

?>
<!DOCTYPE>
<html>
<head>
    <title>HostXtra - Coming Soon</title>
    <link href="https://hostxtra.co.uk/style/style.css" rel="stylesheet" type="text/css" />
    <link href="https://hostxtra.co.uk/style/maintenance.css" rel="stylesheet" type="text/css" />
</head>
<body class="maintenance">
<div class="logo">
    Host<b class="red">X</b>tra Coming Soon
</div>

<div class="elispe"></div>

<div class="textbox">
    <div class="textinner">
        <div class="texttop"><h1>Website Under Construction</h1></div>
        <div class="textbot">
            <div class="text">
                We are eager to show you the new face of our website, right now we are working on the design interface and a few other things.<br/><br/>
                Subscribe to our newsletter and stay updated.
            </div>
            <div class="inputdiv">
                <input type="text" placeholder="Email Address" name="email"/>
            </div>
            <div class="emailbutton">
                <input type="submit" value="Notify Me" name="emailme"/>
            </div>
        </div>
    </div>
</div>

</body>
</html>
