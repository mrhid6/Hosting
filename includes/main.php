<?php

/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04/09/2015
 * Time: 22:26
 */

include_once("config.php");
include_once("mysql.php");
include_once("template.php");


class main
{
    private $mysql, $template, $page;
    private static $instance;

    function __construct() {
        $this->mysql = new mysql();
        $this->template = new template();
        $this->processPage();

        self::$instance=$this;
    }

    static public function getInstance(){
        return self::$instance;
    }

    function getTemplater(){
        return $this->template;
    }

    function getMysql(){
        return $this->mysql;
    }
    function processPage(){
        $temp_page = $_REQUEST['p'];

        $result = $this->getMysql()->query("select * from navigation order by ID ASC ");

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                if(ltrim($row['href'],"/") == $temp_page) {
                    if (file_exists("includes/pages/".$temp_page.".php")) {
                        $this->page = $temp_page;
                        return;
                    }else{
                        break;
                    }
                }
            }
        }

        if($temp_page == ""){
            $this->page="home";
            return;
        }

        $this->page="notfound";
    }
    function getPage(){
        return $this->page;
    }

    function finish(){
        $this->mysql->close();
    }
}