/**
 * Created by drichardsona on 23/07/2016.
 */

// ---- Vars
var domain_names_ext = [
    ".co.uk",
    ".com"
];

// ---- Costs
var total_cost = 0;
var monthly_cost = 0;

var domain_cost = 0;
var hosting_cost = 0;
var design_cost = 0;

var design_page_cost = 0;
var design_script_page_cost = 0;
var design_admin_area_cost = 0;

// ---- Prices

var domain_name_price = [
    [
        6.99,
        13.98,
        20.97,
        34.95,
        69.90
    ],
    [
        11.99,
        23.98,
        35.97,
        59.95,
        119.90
    ]
];

var hosting_price = [
    3.00,
    4.50,
    6.00,
    8.00
];

var design_html_page_price = 1.25;
var design_script_page_price = 0.50;
var design_admin_area_price = 5.00;

function update_total(){
    var cost1 = parseFloat(domain_cost) + parseFloat(hosting_cost) + parseFloat(design_cost);
    var cost2 = parseFloat(hosting_cost);

    total_cost = parseFloat(cost1).toFixed(2);
    monthly_cost = parseFloat(cost2).toFixed(2);

    $("#total_costs .firstcost a").html("&pound;"+total_cost);
    $("#total_costs .monthly a").html("&pound;"+monthly_cost);
}

function update_total_webdesign(){
    var cost1 = parseFloat(design_page_cost) + parseFloat(design_script_page_cost) + parseFloat(design_admin_area_cost);
    design_cost = parseFloat(cost1).toFixed(2);
}

function update_total_domain_name(){
    var _domain_name_val = $("#domain_name").val();
    var _domain_ext_val = $("#domain_ext").val();

    var _domain_name_return = _domain_name_val + domain_names_ext[_domain_ext_val];
    $("#total_costs .domain_name i").html(_domain_name_return);
}
function reset_total_domain_name(){
    $("#total_costs .domain_name i").html("Empty");
}

function update_domain_costing(){
    var _domain_name_fld = $("#domain_name");
    var _domain_ext_fld = $("#domain_ext");
    var _domain_period_fl = $("#domain_period");

    if(_domain_name_fld.val() != ""){
        var _domain_ext_val = _domain_ext_fld.val();
        var _domain_period_val = _domain_period_fl.val();

        if( (_domain_ext_val != -1) && (_domain_period_val != -1)){
            update_total_domain_name();
            var cost = parseFloat(domain_name_price[_domain_ext_val][_domain_period_val]).toFixed(2);
            domain_cost = cost;
            $(".domain_total_cost a").html("&pound;"+cost);
        }
    }else{
        reset_total_domain_name();
        reset_domain_costing();
    }

    update_total();
}

function reset_domain_costing(){
    domain_cost = parseFloat(0.00).toFixed(2);
    $(".domain_total_cost a").html("&pound;"+domain_cost);
}

function hosting_required(){
    var _hosting_chk_val = $("#hosting_req_chk").is(':checked');
    if(_hosting_chk_val){
        $("#hosting-package-div").slideDown(600);
    }else{
        $("#hosting-package-div").slideUp(600);
        $("#hosting_package").val(-1);
        update_hosting_cost()
    }

    update_total();
}

function update_hosting_cost(){
    var _hosting_pkg_val = $("#hosting_package").val();

    if(_hosting_pkg_val != -1){
        var cost = parseFloat(hosting_price[_hosting_pkg_val]).toFixed(2);
        hosting_cost = cost;
        $(".hosting_total_cost a").html("&pound;"+cost);
    }else{
        reset_hosting_costing()
    }

    update_total();
}

function reset_hosting_costing(){
    hosting_cost = parseFloat(0.00).toFixed(2);
    $(".hosting_total_cost a").html("&pound;"+hosting_cost);
}

function webdesign_required(){
    var _webdesign_chk_val = $("#design_req_chk").is(':checked');
    if(_webdesign_chk_val){
        $("#webdesign-html-pages-div").slideDown(600);
        $("#webdesign-script-pages-div").slideDown(600);
        $("#webdesign-admin-area-div").slideDown(600);
    }else{
        $("#webdesign-html-pages-div").slideUp(600);
        $("#webdesign-script-pages-div").slideUp(600);
        $("#webdesign-admin-area-div").slideUp(600);

        $("#design_pages").val(0);
        $("#design_script_pages").val(0);
        $("#design_admin_req_chk").attr("checked", false);

        update_design_no_pages();
        update_design_no_script_pages();
        update_design_admin_area();
    }

    update_total();
}

function update_design_no_pages(){
    var _webdesign_no_pages_val=$("#design_pages").val();
    if(_webdesign_no_pages_val != 0){
        design_page_cost = parseFloat(_webdesign_no_pages_val * design_html_page_price).toFixed(2);

        $(".design_pages_cost a").html("&pound;"+design_page_cost);
    }else{
        reset_design_pages();
    }
    update_total_webdesign();
    update_total();
}

function reset_design_pages(){
    design_page_cost = parseFloat(0.00).toFixed(2);
    $(".design_pages_cost a").html("&pound;"+design_page_cost);
}

function update_design_no_script_pages(){
    var _webdesign_no_script_pages_val=$("#design_script_pages").val();
    if(_webdesign_no_script_pages_val != 0){
        design_script_page_cost = parseFloat(_webdesign_no_script_pages_val * design_script_page_price).toFixed(2);

        $(".design_script_pages_cost a").html("&pound;"+design_script_page_cost);
    }else{
        reset_design_script_pages();
    }
    update_total_webdesign();
    update_total();
}

function reset_design_script_pages(){
    design_script_page_cost = parseFloat(0.00).toFixed(2);
    $(".design_script_pages_cost a").html("&pound;"+design_script_page_cost);
}

function update_design_admin_area(){
    var _webdesign_admin_chk_val = $("#design_admin_req_chk").is(':checked');
    if(_webdesign_admin_chk_val){
        design_admin_area_cost = parseFloat(design_admin_area_price).toFixed(2);
        $(".design_admin_area_cost a").html("&pound;"+design_admin_area_cost);
    }else{
        reset_design_admin_area();
    }

    update_total_webdesign();
    update_total();
}

function reset_design_admin_area(){
    design_admin_area_cost = parseFloat(0.00).toFixed(2);
    $(".design_admin_area_cost a").html("&pound;"+design_admin_area_cost);
}

$(document).ready(function(){
    $('#domain_name').on('input', function() {
        update_domain_costing();
    });

    $('#domain_ext, #domain_period').on('change', function () {
        update_domain_costing();
    });

    $('#hosting_req_chk').on('change', function () {
        hosting_required();
    });

    $('#hosting_package').on('change', function () {
        update_hosting_cost();
    });

    $('#design_req_chk').on('change', function () {
        webdesign_required();
    });

    $('#design_pages').on('input', function() {
        update_design_no_pages();
    });

    $('#design_script_pages').on('input', function() {
        update_design_no_script_pages();
    });

    $('#design_admin_req_chk').on('change', function() {
        update_design_admin_area();
    });

});