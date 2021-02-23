// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.sample_page.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.pages');
goog.require('app.styles');
goog.require('zframes.redirect');
goog.require('app.sample_page.model');
app.sample_page.view.input_style = app.styles.style.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-grid",".patient-grid",853679537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"65px",new cljs.core.Keyword(null,"width","width",-384071477),"65px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon.img",".icon.img",483450963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-record",".patient-record",852694131),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 8px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"12px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),".25rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(51, 51, 51, 0.1)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-info",".patient-info",-6980647),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-address-value",".patient-address-value",-2141187501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-name",".patient-name",2044467719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".right-wrapper",".right-wrapper",1169029716),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".right-item",".right-item",967013642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-right-value",".patient-right-value",145020377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-record:hover",".patient-record:hover",-1184441236),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e6f2ff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".not-found",".not-found",271961609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px"], null)], null));
app.sample_page.view.item_view = (function app$sample_page$view$item_view(data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.patient-record","a.patient-record",34269478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/#/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__22196 = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(data);
switch (G__22196) {
case "male":
return "male.svg";

break;
case "female":
return "female.svg";

break;
default:
return "alien.svg";

}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.patient-info","div.patient-info",450063994),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.patient-name","b.patient-name",1882249741),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"family","family",-1313145692)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"given","given",716253602)], null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted.pl-2","span.text-muted.pl-2",-302645363),"1992-10-11"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Line:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.patient-address-value","span.patient-address-value",745340931),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"line","line",212345235)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"City:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.patient-address-value","span.patient-address-value",745340931),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"city","city",-393302614)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"State:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.patient-address-value","span.patient-address-value",745340931),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"state","state",-1988618099)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Country:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.patient-address-value","span.patient-address-value",745340931),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"country","country",312965309)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center.right-wrapper","div.d-flex.align-items-center.right-wrapper",608750155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-item","div.right-item",-548913654),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Social Security Number:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.patient-right-value","span.patient-right-value",-1974210195),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null))], null)], null)], null)], null);
});
app.pages.reg_subs_page.call(null,app.sample_page.model.index,(function (data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app.sample_page.view.input_style,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.flex-row.w-100","div.d-flex.flex-row.w-100",1243391274),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22198_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","set-params","zframes.redirect/set-params",1891379987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),p1__22198_SHARP_.target.value], null)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline-primary.btn-block.ml-2","button.btn.btn-outline-primary.btn-block.ml-2",2132872148),"+ Create"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.patient-grid.ml-1","div.patient-grid.ml-1",1311026448),(function (){var iter__4523__auto__ = (function app$sample_page$view$iter__22199(s__22200){
return (new cljs.core.LazySeq(null,(function (){
var s__22200__$1 = s__22200;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22200__$1);
if(temp__5720__auto__){
var s__22200__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22200__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22200__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22202 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22201 = (0);
while(true){
if((i__22201 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__22201);
cljs.core.chunk_append.call(null,b__22202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.sample_page.view.item_view,item], null));

var G__22203 = (i__22201 + (1));
i__22201 = G__22203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22202),app$sample_page$view$iter__22199.call(null,cljs.core.chunk_rest.call(null,s__22200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22202),null);
}
} else {
var item = cljs.core.first.call(null,s__22200__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.sample_page.view.item_view,item], null),app$sample_page$view$iter__22199.call(null,cljs.core.rest.call(null,s__22200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,data);
})()], null)], null);
}));

//# sourceMappingURL=view.js.map
