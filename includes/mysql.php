<?php

/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04/09/2015
 * Time: 22:33
 */

class mysql
{
    private $conn, $isConnected;

    function __construct(){
        $this->connect();
    }

    function connect(){
        global $config_db_host, $config_db_user, $config_db_pass, $config_db_name;
        $this->conn = new mysqli($config_db_host, $config_db_user, $config_db_pass, $config_db_name);

        // Check connection
        if ($this->conn->connect_error) {
            $this->isConnected = false;
            die("Mysql Connection Error: " . $this->conn->connect_error);
            return;
        }

        $this->isConnected = true;
    }
    function isConnected(){
        return $this->isConnected;
    }
    function query($sql){
        if($this->isConnected()) {
            $result = $this->conn->query($sql);
        }else{
            $result = null;
        }
        return $result;
    }

    function close() {
        if ($this->isConnected()) {
            $this->conn->close();
            $this->isConnected = false;
        }
        $this->conn = null;
    }
}