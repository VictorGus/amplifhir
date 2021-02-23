// Compiled by ClojureScript 1.10.520 {}
goog.provide('zenform.validators');
goog.require('cljs.core');
goog.require('clojure.string');
if((typeof zenform !== 'undefined') && (typeof zenform.validators !== 'undefined') && (typeof zenform.validators.validate !== 'undefined')){
} else {
zenform.validators.validate = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"zenform.validators","validate"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (cfg,value){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cfg);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"min-length","min-length",-325792315),(function (p__22797,v){
var map__22798 = p__22797;
var map__22798__$1 = (((((!((map__22798 == null))))?(((((map__22798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22798):map__22798);
var limit = cljs.core.get.call(null,map__22798__$1,new cljs.core.Keyword(null,"value","value",305978217));
var msg = cljs.core.get.call(null,map__22798__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(typeof v === 'string'){
if((cljs.core.count.call(null,v) < limit)){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Shouldn't be shorter then ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join('');
}
} else {
return null;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"min-items","min-items",2106079399),(function (p__22800,v){
var map__22801 = p__22800;
var map__22801__$1 = (((((!((map__22801 == null))))?(((((map__22801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22801):map__22801);
var limit = cljs.core.get.call(null,map__22801__$1,new cljs.core.Keyword(null,"value","value",305978217));
var msg = cljs.core.get.call(null,map__22801__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.coll_QMARK_.call(null,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())){
if((cljs.core.count.call(null,v) < limit)){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Shouldn't be shorter then ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join('');
}
} else {
return null;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"number","number",1570378438),(function (p__22803,v){
var map__22804 = p__22803;
var map__22804__$1 = (((((!((map__22804 == null))))?(((((map__22804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22804):map__22804);
var msg = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if((((!(((typeof v === 'string')?clojure.string.blank_QMARK_.call(null,v):cljs.core.empty_QMARK_.call(null,v))))) && ((((v >= (0))) || ((v <= (0))))))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should be a number";
}
}
}));
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"required","required",1807647006),(function (p__22806,v){
var map__22807 = p__22806;
var map__22807__$1 = (((((!((map__22807 == null))))?(((((map__22807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22807):map__22807);
var msg = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_.call(null,v)))) || (((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.empty_QMARK_.call(null,v)))) || (((cljs.core.sequential_QMARK_.call(null,v)) && (cljs.core.empty_QMARK_.call(null,v)))))){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should not be blank";
}
} else {
return null;
}
}));
zenform.validators.email_regex = /.+?\@.+?\..+/;
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"email","email",1415816706),(function (p__22809,v){
var map__22810 = p__22809;
var map__22810__$1 = (((((!((map__22810 == null))))?(((((map__22810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22810):map__22810);
var msg = cljs.core.get.call(null,map__22810__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches.call(null,zenform.validators.email_regex,v))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should be valid email";
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,zenform.validators.validate,new cljs.core.Keyword(null,"pattern","pattern",242135423),(function (p__22812,v){
var map__22813 = p__22812;
var map__22813__$1 = (((((!((map__22813 == null))))?(((((map__22813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22813):map__22813);
var rx = cljs.core.get.call(null,map__22813__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var msg = cljs.core.get.call(null,map__22813__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches.call(null,rx,v))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Should match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rx)].join('');
}
}
} else {
return null;
}
}));

//# sourceMappingURL=validators.js.map
