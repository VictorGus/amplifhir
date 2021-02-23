// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.cookies');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.cookies');
goog.require('re_frame.core');
goog.require('cljs.reader');
/**
 * Returns the cookie after parsing it with cljs.reader/read-string.
 */
zframes.cookies.get_cookie = (function zframes$cookies$get_cookie(k){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = goog.net.cookies.get(cljs.core.name(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "nil";
}
})());
});
/**
 * Stores the cookie value using pr-str.
 */
zframes.cookies.set_cookie = (function zframes$cookies$set_cookie(k,v){
return goog.net.cookies.set(cljs.core.name(k),cljs.core.clj__GT_js(v));
});
zframes.cookies.remove_BANG_ = (function zframes$cookies$remove_BANG_(k){
return goog.net.cookies.remove(cljs.core.name(k));
});
zframes.cookies.watch_expires = (function zframes$cookies$watch_expires(k){
return null;
});
var G__12225_12227 = cljs.core.cst$kw$zframes$cookies_SLASH_get;
var G__12226_12228 = ((function (G__12225_12227){
return (function (coeffects,key){
return cljs.core.assoc_in(coeffects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cookie,key], null),zframes.cookies.get_cookie(key));
});})(G__12225_12227))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12225_12227,G__12226_12228) : re_frame.core.reg_cofx.call(null,G__12225_12227,G__12226_12228));
var G__12229_12234 = cljs.core.cst$kw$zframes$cookies_SLASH_set;
var G__12230_12235 = ((function (G__12229_12234){
return (function (p__12231){
var map__12232 = p__12231;
var map__12232__$1 = (((((!((map__12232 == null))))?(((((map__12232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12232):map__12232);
var opts = map__12232__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12232__$1,cljs.core.cst$kw$key);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12232__$1,cljs.core.cst$kw$value);
return zframes.cookies.set_cookie(k,v);
});})(G__12229_12234))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12229_12234,G__12230_12235) : re_frame.core.reg_fx.call(null,G__12229_12234,G__12230_12235));
var G__12236_12241 = cljs.core.cst$kw$cookies_SLASH_set;
var G__12237_12242 = ((function (G__12236_12241){
return (function (p__12238){
var map__12239 = p__12238;
var map__12239__$1 = (((((!((map__12239 == null))))?(((((map__12239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12239):map__12239);
var opts = map__12239__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12239__$1,cljs.core.cst$kw$key);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12239__$1,cljs.core.cst$kw$value);
return zframes.cookies.set_cookie(k,v);
});})(G__12236_12241))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12236_12241,G__12237_12242) : re_frame.core.reg_fx.call(null,G__12236_12241,G__12237_12242));
var G__12243_12245 = cljs.core.cst$kw$zframes$cookies_SLASH_remove;
var G__12244_12246 = ((function (G__12243_12245){
return (function (k){
return goog.net.cookies.remove(cljs.core.name(k));
});})(G__12243_12245))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12243_12245,G__12244_12246) : re_frame.core.reg_fx.call(null,G__12243_12245,G__12244_12246));
