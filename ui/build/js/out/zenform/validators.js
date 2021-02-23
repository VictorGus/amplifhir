// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zenform.validators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
if((typeof zenform !== 'undefined') && (typeof zenform.validators !== 'undefined') && (typeof zenform.validators.validate !== 'undefined')){
} else {
zenform.validators.validate = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__9906 = cljs.core.get_global_hierarchy;
return (fexpr__9906.cljs$core$IFn$_invoke$arity$0 ? fexpr__9906.cljs$core$IFn$_invoke$arity$0() : fexpr__9906.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zenform.validators","validate"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (cfg,value){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cfg);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$min_DASH_length,(function (p__9907,v){
var map__9908 = p__9907;
var map__9908__$1 = (((((!((map__9908 == null))))?(((((map__9908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9908):map__9908);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9908__$1,cljs.core.cst$kw$value);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9908__$1,cljs.core.cst$kw$message);
if(typeof v === 'string'){
if((cljs.core.count(v) < limit)){
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
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$min_DASH_items,(function (p__9910,v){
var map__9911 = p__9910;
var map__9911__$1 = (((((!((map__9911 == null))))?(((((map__9911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9911):map__9911);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,cljs.core.cst$kw$value);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,cljs.core.cst$kw$message);
if(cljs.core.coll_QMARK_((function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())){
if((cljs.core.count(v) < limit)){
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
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (p__9913,v){
var map__9914 = p__9913;
var map__9914__$1 = (((((!((map__9914 == null))))?(((((map__9914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9914):map__9914);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9914__$1,cljs.core.cst$kw$message);
if((((!(((typeof v === 'string')?clojure.string.blank_QMARK_(v):cljs.core.empty_QMARK_(v))))) && ((((v >= (0))) || ((v <= (0))))))){
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
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$required,(function (p__9916,v){
var map__9917 = p__9916;
var map__9917__$1 = (((((!((map__9917 == null))))?(((((map__9917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9917):map__9917);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9917__$1,cljs.core.cst$kw$message);
if((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))) || (((cljs.core.map_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))) || (((cljs.core.sequential_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))){
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
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$email,(function (p__9919,v){
var map__9920 = p__9919;
var map__9920__$1 = (((((!((map__9920 == null))))?(((((map__9920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9920):map__9920);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9920__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(zenform.validators.email_regex,v))){
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
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pattern,(function (p__9922,v){
var map__9923 = p__9922;
var map__9923__$1 = (((((!((map__9923 == null))))?(((((map__9923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9923):map__9923);
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$regex);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(rx,v))){
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
