// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('zframes.xhr');
goog.require('zframes.redirect');
goog.require('zframes.flash');
goog.require('zframes.routing');
goog.require('app.routes');
goog.require('app.pages');
goog.require('app.layout');
goog.require('app.patient.crud.view');
goog.require('app.patient.view');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$core_SLASH_initialize,(function (p__12223,_){
var map__12224 = p__12223;
var map__12224__$1 = (((((!((map__12224 == null))))?(((((map__12224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12224):map__12224);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12224__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$config,cljs.core.cst$kw$base_DASH_url], null),(function (){var or__4131__auto__ = window.baseURL;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "http://localhost:9090";
}
})()),cljs.core.cst$kw$route_DASH_map_SLASH_routes,app.routes.routes),cljs.core.cst$kw$route_DASH_map_SLASH_start,cljs.core.PersistentArrayMap.EMPTY], null);
}));
app.core.not_found_page = (function app$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Not found"], null);
});
app.core.current_page = (function app$core$current_page(){
var route = (function (){var G__12226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12226) : re_frame.core.subscribe.call(null,G__12226));
})();
return ((function (route){
return (function (){
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.pages),cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(route)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(route));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.layout,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,params], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.not_found_page], null))], null);
});
;})(route))
});
app.core.mount_root = (function app$core$mount_root(){
var G__12227_12228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$core_SLASH_initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__12227_12228) : re_frame.core.dispatch_sync.call(null,G__12227_12228));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.current_page], null),document.getElementById("app"));
});
