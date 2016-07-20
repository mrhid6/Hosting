<?php

/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 05/09/2015
 * Time: 16:50
 */
class template
{
    function header()
    {
        global $config_title;
        include_once("header.php");
    }

    function page(){
        include("pages/".main::getInstance()->getPage().".php");
    }

    function footer(){
        include_once("footer.php");
    }

    function navbar(){
        $navoptions = $this->getNavigationOptions();
        include_once("navbar.php");
    }

    function getNavigationOptions(){

        $main = main::getInstance();
        $return="";

        $result = $main->getMysql()->query("select * from navigation order by ID ASC ");

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $active=(ltrim($row['href'],"/") == $main->getPage())?"class=\"active\"":"";
                $return.="<li>";
                $return.="<a $active href=\"".$row['href']."\">".$row['name']."</a>";
                $return.="<span class=\"separator\"></span>";
                $return.="</li>";
            }
        } else {
            $return="0 results";
        }

        return $return;
    }
}