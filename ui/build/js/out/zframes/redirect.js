// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.redirect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zframes.window_location');
goog.require('zframes.routing');
goog.require('clojure.string');
zframes.redirect.window_open = (function zframes$redirect$window_open(url){
return window.open(url,"_blank").focus;
});
zframes.redirect.page_redirect = (function zframes$redirect$page_redirect(url){
return window.location.href = url;
});
zframes.redirect.redirect = (function zframes$redirect$redirect(url){
return window.location.hash = url;
});
zframes.redirect.redirect_with_refresh = (function zframes$redirect$redirect_with_refresh(url){
window.location.hash = url;

return location.reload();
});
var G__8075_8077 = cljs.core.cst$kw$zframes$redirect_SLASH_redirect;
var G__8076_8078 = ((function (G__8075_8077){
return (function (opts){
return zframes.redirect.redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
});})(G__8075_8077))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8075_8077,G__8076_8078) : re_frame.core.reg_fx.call(null,G__8075_8077,G__8076_8078));
var G__8079_8081 = cljs.core.cst$kw$zframes$redirect_SLASH_redirect_DASH_with_DASH_refresh;
var G__8080_8082 = ((function (G__8079_8081){
return (function (opts){
return zframes.redirect.redirect_with_refresh([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
});})(G__8079_8081))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8079_8081,G__8080_8082) : re_frame.core.reg_fx.call(null,G__8079_8081,G__8080_8082));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_redirect,(function (fx,p__8083){
var vec__8084 = p__8083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8084,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8084,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,opts], null);
}));
var G__8087_8105 = cljs.core.cst$kw$zframes$redirect_SLASH_page_DASH_redirect;
var G__8088_8106 = ((function (G__8087_8105){
return (function (opts){
if(cljs.core.truth_(cljs.core.cst$kw$_target.cljs$core$IFn$_invoke$arity$1(opts))){
return zframes.redirect.window_open(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return zframes.redirect.page_redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,temp__5720__auto__,G__8087_8105){
return (function (p__8101){
var vec__8102 = p__8101;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8102,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(params,temp__5720__auto__,G__8087_8105))
,params)))].join('');
} else {
return null;
}
})()].join(''));
}
});})(G__8087_8105))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8087_8105,G__8088_8106) : re_frame.core.reg_fx.call(null,G__8087_8105,G__8088_8106));
var G__8107_8109 = cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_query_DASH_string;
var G__8108_8110 = ((function (G__8107_8109){
return (function (params){
var loc = window.location;
history.pushState(({}),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(params),[zframes.window_location.gen_query_string(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$title)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

zframes.routing.dispatch_context(null);

return zframes.routing.dispatch_routes(null);
});})(G__8107_8109))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8107_8109,G__8108_8110) : re_frame.core.reg_fx.call(null,G__8107_8109,G__8108_8110));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_merge_DASH_params,(function (p__8111,p__8112){
var map__8113 = p__8111;
var map__8113__$1 = (((((!((map__8113 == null))))?(((((map__8113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8113):map__8113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8113__$1,cljs.core.cst$kw$db);
var vec__8114 = p__8112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8114,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8114,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
var nil_keys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pth,map__8113,map__8113__$1,db,vec__8114,_,params){
return (function (acc,p__8118){
var vec__8119 = p__8118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8119,(1),null);
if((v == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(pth,map__8113,map__8113__$1,db,vec__8114,_,params))
,cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_params,cljs.core.cst$kw$params], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_params,params], 0)),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_params,(function (p__8122,p__8123){
var map__8124 = p__8122;
var map__8124__$1 = (((((!((map__8124 == null))))?(((((map__8124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8124):map__8124);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8124__$1,cljs.core.cst$kw$db);
var vec__8125 = p__8123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8125,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8125,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,params], null)], null);
}));
