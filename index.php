<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04/09/2015
 * Time: 22:27
 */

session_start();

include_once("includes/main.php");

if(empty($_SESSION['bypass_maintenance']) && $_SESSION['bypass_maintenance']!=1){
    $_SESSION['bypass_maintenance'] = null;
    unset($_SESSION['bypass_maintenance']);
    session_destroy();

    header("location: /maintenance.php");
}

$main = new main;
$template = $main->getTemplater();
?>
<!DOCTYPE>
<html>
<?php $template->header();?>

<body>
<div id="main">
    <div id="header">
        <div class="logo"></div>
        <?php $template->navbar();?>
    </div>
    <div class="clear"></div>
    <div id="main_content">
        <?php $template->page();?>
    </div>
    <div class="clear"></div>
    <?php $template->footer();?>
</div>
</body>
</html>

<?php
$main->finish();
?>
