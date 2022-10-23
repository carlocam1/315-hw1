import { changePageContent } from "../model/model.js";

function changeRoute(){
    changePageContent();
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initURLListener();
})