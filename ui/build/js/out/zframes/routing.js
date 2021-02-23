// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('zframes.window_location');
goog.require('route_map.core');
zframes.routing.dispatch_routes = (function zframes$routing$dispatch_routes(_){
var fragment = window.location.hash;
var G__7977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_changed,fragment], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__7977) : re_frame.core.dispatch.call(null,G__7977));
});
var G__7978_7980 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_params;
var G__7979_7981 = ((function (G__7978_7980){
return (function (db,_){
return cljs.core.cst$kw$fragment_DASH_params.cljs$core$IFn$_invoke$arity$1(db);
});})(G__7978_7980))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7978_7980,G__7979_7981) : re_frame.core.reg_sub.call(null,G__7978_7980,G__7979_7981));
var G__7982_7984 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment;
var G__7983_7985 = ((function (G__7982_7984){
return (function (db,_){
return cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(db);
});})(G__7982_7984))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7982_7984,G__7983_7985) : re_frame.core.reg_sub.call(null,G__7982_7984,G__7983_7985));
var G__7986_7988 = cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route;
var G__7987_7989 = ((function (G__7986_7988){
return (function (db,_){
return cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route.cljs$core$IFn$_invoke$arity$1(db);
});})(G__7986_7988))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7986_7988,G__7987_7989) : re_frame.core.reg_sub.call(null,G__7986_7988,G__7987_7989));
var G__7990_7992 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_path;
var G__7991_7993 = ((function (G__7990_7992){
return (function (db,_){
return cljs.core.cst$kw$fragment_DASH_path.cljs$core$IFn$_invoke$arity$1(db);
});})(G__7990_7992))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7990_7992,G__7991_7993) : re_frame.core.reg_sub.call(null,G__7990_7992,G__7991_7993));
var G__7994_7996 = cljs.core.cst$kw$route_DASH_map_SLASH_location_DASH_search;
var G__7995_7997 = ((function (G__7994_7996){
return (function (db,_){
return cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
});})(G__7994_7996))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7994_7996,G__7995_7997) : re_frame.core.reg_sub.call(null,G__7994_7996,G__7995_7997));
var G__7998_8000 = cljs.core.cst$kw$html_DASH_title;
var G__7999_8001 = ((function (G__7998_8000){
return (function (title){
return document.title = ["Web Project",(cljs.core.truth_(title)?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''):null)].join('');
});})(G__7998_8000))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__7998_8000,G__7999_8001) : re_frame.core.reg_fx.call(null,G__7998_8000,G__7999_8001));
zframes.routing.normalize_params = (function zframes$routing$normalize_params(p__8002){
var map__8003 = p__8002;
var map__8003__$1 = (((((!((map__8003 == null))))?(((((map__8003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8003):map__8003);
var o_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8003__$1,cljs.core.cst$kw$o_DASH_params);
var n_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8003__$1,cljs.core.cst$kw$n_DASH_params);
var op = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(o_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
var np = cljs.core.select_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(n_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0)),cljs.core.keys(op));
var op__$1 = cljs.core.select_keys(op,cljs.core.keys(np));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,op__$1,cljs.core.cst$kw$n_DASH_params,np], null);
});
zframes.routing.params_changed_QMARK_ = (function zframes$routing$params_changed_QMARK_(params){
var map__8005 = zframes.routing.normalize_params(params);
var map__8005__$1 = (((((!((map__8005 == null))))?(((((map__8005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8005):map__8005);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8005__$1,cljs.core.cst$kw$o_DASH_params);
var np = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8005__$1,cljs.core.cst$kw$n_DASH_params);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(np,op)) || (cljs.core.empty_QMARK_(op)));
});
zframes.routing.contexts_diff = (function zframes$routing$contexts_diff(route,old_contexts,new_contexts,params,old_params){
var to_dispose = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__8007){
var vec__8008 = p__8007;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(0),null);
var o_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(1),null);
var G__8011 = acc;
if(zframes.routing.params_changed_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,o_params,cljs.core.cst$kw$n_DASH_params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_contexts,k)], null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8011,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$deinit,o_params], null));
} else {
return G__8011;
}
}),cljs.core.PersistentVector.EMPTY,old_contexts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_dispose){
return (function (acc,p__8012){
var vec__8013 = p__8012;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8013,(0),null);
var n_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8013,(1),null);
var G__8016 = acc;
if(zframes.routing.params_changed_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_contexts,k),cljs.core.cst$kw$n_DASH_params,n_params], null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8016,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$init,n_params], null));
} else {
return G__8016;
}
});})(to_dispose))
,to_dispose,new_contexts);
});
zframes.routing.parse_params = (function zframes$routing$parse_params(s){
if(clojure.string.blank_QMARK_(s)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__8017 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(pair,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8017,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),"&"));
}
});
zframes.routing.dispatch_context = (function zframes$routing$dispatch_context(_){
var query = window.location.search;
var G__8020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_changed,zframes.routing.parse_params(query)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8020) : re_frame.core.dispatch.call(null,G__8020));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$search_DASH_changed,(function (p__8021,p__8022){
var map__8023 = p__8021;
var map__8023__$1 = (((((!((map__8023 == null))))?(((((map__8023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8023):map__8023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8023__$1,cljs.core.cst$kw$db);
var vec__8024 = p__8022;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024,(0),null);
var search = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024,(1),null);
var old = cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
var ctx_rs = cljs.core.cst$kw$context_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db);
var prev_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(old));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,search)))){
if(cljs.core.truth_(prev_h)){
new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_h,cljs.core.cst$kw$deinit,old], null),cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$navigation)], null);
} else {
}

var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(search));
if(cljs.core.truth_(temp__5718__auto__)){
var handler = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,cljs.core.cst$kw$init,search], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
}));
zframes.routing.parse_fragment = (function zframes$routing$parse_fragment(fragment){
var vec__8028 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(fragment,/^#/,""),/\?/);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(0),null);
var params_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(1),null);
var params = ((clojure.string.blank_QMARK_(params_str))?cljs.core.PersistentArrayMap.EMPTY:zframes.window_location.parse_querystring((function (){var or__4131__auto__ = params_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$query_DASH_string,params_str,cljs.core.cst$kw$params,params], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fragment_DASH_changed,(function (p__8031,p__8032){
var map__8033 = p__8031;
var map__8033__$1 = (((((!((map__8033 == null))))?(((((map__8033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8033):map__8033);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8033__$1,cljs.core.cst$kw$db);
var vec__8034 = p__8032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8034,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8034,(1),null);
var map__8038 = zframes.routing.parse_fragment(fragment);
var map__8038__$1 = (((((!((map__8038 == null))))?(((((map__8038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8038):map__8038);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8038__$1,cljs.core.cst$kw$path);
var q_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8038__$1,cljs.core.cst$kw$params);
var qs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8038__$1,cljs.core.cst$kw$query_DASH_string);
var temp__5718__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,path], null),cljs.core.cst$kw$route_DASH_map_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5718__auto__)){
var route = temp__5718__auto__;
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$params,q_params);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$search,cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db));
var route_match = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route);
var route__$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$match,route_match,cljs.core.cst$kw$params,params__$1,cljs.core.cst$kw$parents,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route)], null);
var contexts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (params,params__$1,route_match,route__$1,route,temp__5718__auto__,map__8038,map__8038__$1,path,q_params,qs,map__8033,map__8033__$1,db,vec__8034,k,fragment){
return (function (acc,p__8040){
var map__8041 = p__8040;
var map__8041__$1 = (((((!((map__8041 == null))))?(((((map__8041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8041):map__8041);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8041__$1,cljs.core.cst$kw$context);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8041__$1,cljs.core.cst$kw$_DOT_);
if(cljs.core.truth_(ctx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params__$1,cljs.core.cst$kw$$$,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_DOT_,route_match], 0)));
} else {
return acc;
}
});})(params,params__$1,route_match,route__$1,route,temp__5718__auto__,map__8038,map__8038__$1,path,q_params,qs,map__8033,map__8033__$1,db,vec__8034,k,fragment))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route__$1));
var current_page = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1);
var old_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$match], null));
var old_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params], null));
var page_ctx_events = (((old_page == null))?(function (){var G__8043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)], null);
if(cljs.core.seq(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8043,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$params,params__$1], null));
} else {
return G__8043;
}
})():((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_page,old_page))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__8044 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(old_page)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8044,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_page,cljs.core.cst$kw$deinit,old_params], null));
} else {
return G__8044;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_params,params__$1))?cljs.core.PersistentVector.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_params,cljs.core.cst$kw$params),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params__$1,cljs.core.cst$kw$params)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$params,params__$1,old_params], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$deinit,old_params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)], null)
))));
var old_contexts = cljs.core.cst$kw$route_SLASH_context.cljs$core$IFn$_invoke$arity$1(db);
var context_evs = zframes.routing.contexts_diff(cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),old_contexts,contexts,params__$1,old_params);
var evs = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(context_evs,page_ctx_events));
var db__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_page,current_page))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,old_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0)):db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db__$1,cljs.core.cst$kw$route_SLASH_history,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$route_SLASH_history.cljs$core$IFn$_invoke$arity$1(db__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),cljs.core.cst$kw$uri,fragment], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fragment,fragment,cljs.core.cst$kw$fragment_DASH_params,params__$1,cljs.core.cst$kw$fragment_DASH_path,path,cljs.core.cst$kw$fragment_DASH_query_DASH_string,qs,cljs.core.cst$kw$route_SLASH_context,contexts,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,route__$1], 0)),cljs.core.cst$kw$html_DASH_title,null,cljs.core.cst$kw$dispatch_DASH_n,evs], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$fragment,fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_error,cljs.core.cst$kw$not_DASH_found], 0))], null);
}
}));
var G__8045_8047 = cljs.core.cst$kw$pop_DASH_route;
var G__8046_8048 = ((function (G__8045_8047){
return (function (db){
return cljs.core.peek(cljs.core.cst$kw$route_DASH_stack.cljs$core$IFn$_invoke$arity$1(db));
});})(G__8045_8047))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8045_8047,G__8046_8048) : re_frame.core.reg_sub.call(null,G__8045_8047,G__8046_8048));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clear_DASH_route_DASH_stack,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$route_DASH_stack);
}));
zframes.routing.history_fx = (function zframes$routing$history_fx(_){
(window["onhashchange"] = zframes.routing.dispatch_routes);

return zframes.routing.dispatch_routes(null);
});
var G__8049_8051 = cljs.core.cst$kw$history;
var G__8050_8052 = zframes.routing.history_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8049_8051,G__8050_8052) : re_frame.core.reg_fx.call(null,G__8049_8051,G__8050_8052));
zframes.routing.search_history_fx = (function zframes$routing$search_history_fx(_){
(window["onpopstate"] = zframes.routing.dispatch_context);

return zframes.routing.dispatch_context(null);
});
var G__8053_8055 = cljs.core.cst$kw$search_DASH_history;
var G__8054_8056 = zframes.routing.search_history_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8053_8055,G__8054_8056) : re_frame.core.reg_fx.call(null,G__8053_8055,G__8054_8056));
zframes.routing.start_fx = (function zframes$routing$start_fx(_){
zframes.routing.search_history_fx(null);

return zframes.routing.history_fx(null);
});
var G__8057_8059 = cljs.core.cst$kw$route_DASH_map_SLASH_start;
var G__8058_8060 = zframes.routing.start_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8057_8059,G__8058_8060) : re_frame.core.reg_fx.call(null,G__8057_8059,G__8058_8060));
zframes.routing.redirect = (function zframes$routing$redirect(href){
return (window.location["hash"] = href);
});
var G__8061_8063 = cljs.core.cst$kw$route_DASH_map_SLASH_redirect;
var G__8062_8064 = zframes.routing.redirect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8061_8063,G__8062_8064) : re_frame.core.reg_fx.call(null,G__8061_8063,G__8062_8064));
zframes.routing.to_query_params = (function zframes$routing$to_query_params(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8065){
var vec__8066 = p__8065;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),params));
});
zframes.routing.to_hash = (function zframes$routing$to_hash(opts){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.routing.to_query_params(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts)))].join('');
});
zframes.routing.make_fragment = (function zframes$routing$make_fragment(params){
var opts = zframes.routing.parse_fragment(window.location.hash);
return zframes.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
});
var G__8069_8071 = cljs.core.cst$kw$route_DASH_map_SLASH_set_DASH_params;
var G__8070_8072 = ((function (G__8069_8071){
return (function (params){
var opts = zframes.routing.parse_fragment(window.location.hash);
var value = zframes.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
return (window.location["hash"] = value);
});})(G__8069_8071))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8069_8071,G__8070_8072) : re_frame.core.reg_fx.call(null,G__8069_8071,G__8070_8072));
