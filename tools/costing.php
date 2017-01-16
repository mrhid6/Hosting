<?php
/**
 * Created by PhpStorm.
 * User: drichardsona
 * Date: 23/07/2016
 * Time: 19:07
 */

?>

<html>
<head>
    <title>Costing Calculator</title>
    <script src="https://code.jquery.com/jquery.min.js"></script>
    <script src="costing_js.js"></script>
    <style>
        body{
            font-family:Arial, sans-serif;
        }

        span, a, label{
            font-size:13px;
        }

        .total_sub_costing{
            float:right;
        }

        .total_each{
            margin-right:50px;
        }

        #costing-form{
            width:650px;
            display: table;
            overflow: auto;
        }

        #costing-form .costing-div{
            display: table;
            overflow: auto;
            width:100%;
            margin-bottom:10px;
        }

        #total_costs{
            position: absolute;
            top:10px;
            right:10px;
            width:200px;
            height:200px;
        }

        #total_costs span{
            font-weight: bold;
            display: block;
            width:200px;
            margin-bottom:5px;
        }

        #total_costs span a{
            float:right;
        }
        #total_costs span i{
            display: block;
            color: #808080;
        }

        #costing-form .row{
            height: 40px;
            line-height: 40px;
            border-bottom:1px solid #000;
        }

        #costing-form .hidden-row{
            display: none;
        }

        #costing-form h4{
            margin:0px;
            height: 25px;
        }

        .long-txt-box{
            width:200px;
        }

        .tiny-txt-box{
            width:30px;
        }
    </style>
</head>
<body>
<div id="total_costs">
    <span class="domain_name">
        Domain Name:
        <i>Empty</i>
    </span>
    <span class="monthly">
        Monthly Costs: <a>£0.00</a>
        <i>(10 Months)</i>
    </span>
    <span class="firstcost">First Payment: <a>£0.00</a></span>
</div>

<div id="costing-form">
    <div class="costing-div domain-div">
        <h4>Domain Name:</h4>
        <div class="row">
            <label for="domain_name">Domain Name:</label>
            <input type="text" class="long-txt-box" id="domain_name"/>
            <select id="domain_ext">
                <option value="0">.co.uk</option>
                <option value="1">.com</option>
            </select>
            <select id="domain_period">
                <option value="0">1 Year</option>
                <option value="1">2 Years</option>
                <option value="2">3 Years</option>
                <option value="3">5 Years</option>
                <option value="4">10 Years</option>
            </select>

            <div class="total_sub_costing domain_total_cost"><span>Total: </span><a>£0.00</a></div>
        </div>
    </div>
    <div class="costing-div webhosting-div">
        <h4>Web Hosting:</h4>
        <div class="row">
            <label for="hosting_req_chk">Hosting Required?:</label>
            <input type="checkbox" id="hosting_req_chk"/>
        </div>
        <div class="row hidden-row" id="hosting-package-div">
            <label for="hosting_package">Web Hosting Package:</label>
            <select id="hosting_package">
                <option value="-1">Select Package:</option>
                <option value="0">Starter</option>
                <option value="1">Intermediate</option>
                <option value="2">Premium</option>
                <option value="3">Advanced</option>
            </select>
            <div class="total_sub_costing hosting_total_cost"><span>Total: </span><a>£0.00</a></div>
        </div>
    </div>
    <div class="costing-div webdesign-div">
        <h4>Website Design:</h4>
        <div class="row">
            <label for="design_req_chk">Website Design Required?:</label>
            <input type="checkbox" id="design_req_chk"/>
        </div>
        <div class="row hidden-row" id="webdesign-html-pages-div">
            <label for="design_pages">Number Of HTML Pages: </label>
            <input type="text" id="design_pages"  class="tiny-txt-box" value="0" maxlength="2">
            <div class="total_sub_costing design_pages_cost"><span>Total: </span><a>£0.00</a></div>
            <div class="total_sub_costing total_each"><span>£1.25/ea</span></div>
        </div>
        <div class="row hidden-row" id="webdesign-script-pages-div">
            <label for="design_script_pages">Number Of Scripted Pages: </label>
            <input type="text" id="design_script_pages"  class="tiny-txt-box" value="0" maxlength="2">
            <div class="total_sub_costing design_script_pages_cost"><span>Total: </span><a>£0.00</a></div>
            <div class="total_sub_costing total_each"><span>£0.50/ea</span></div>
        </div>
        <div class="row hidden-row" id="webdesign-admin-area-div">
            <label for="design_admin_req_chk">Admin Area Required?:</label>
            <input type="checkbox" id="design_admin_req_chk"/>
            <div class="total_sub_costing design_admin_area_cost"><span>Total: </span><a>£0.00</a></div>
            <div class="total_sub_costing total_each"><span>£5.00</span></div>
        </div>
    </div>
</div>
</body>
</html>
