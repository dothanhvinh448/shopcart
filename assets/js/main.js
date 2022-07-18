var tab1= document.getElementById('tab1');
var tab2= document.getElementById('tab2');
var tab3= document.getElementById('tab3');
var tab4= document.getElementById('tab4');
var tabs1 = document.getElementById('tabs1');
var tabs2 = document.getElementById('tabs2');
var tabs3 = document.getElementById('tabs3');
var tabs4 = document.getElementById('tabs4');
function TAB1(){
    tab1.className="active";
    tab2.className="";
    tab3.className="";
    tab4.className="";
    tabs1.className="tab-pane active";
    tabs2.className="tab-pane";
    tabs3.className="tab-pane";
    tabs4.className="tab-pane";
}
function TAB2(){
    tab1.className="";
    tab2.className="active";
    tab3.className="";
    tab4.className="";
    tabs1.className="tab-pane";
    tabs2.className="tab-pane active";
    tabs3.className="tab-pane";
    tabs4.className="tab-pane";
}
function TAB3(){
    tab1.className="";
    tab2.className="";
    tab3.className="active";
    tab4.className="";
    tabs1.className="tab-pane";
    tabs2.className="tab-pane";
    tabs3.className="tab-pane active";
    tabs4.className="tab-pane";
}
function TAB4(){
    tab1.className="";
    tab2.className="";
    tab3.className="";
    tab4.className="active";
    tabs1.className="tab-pane";
    tabs2.className="tab-pane";
    tabs3.className="tab-pane";
    tabs4.className="tab-pane active";
}

