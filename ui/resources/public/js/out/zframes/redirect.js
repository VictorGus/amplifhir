// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.redirect');
goog.require('cljs.core');
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
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),(function (opts){
return zframes.redirect.redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect-with-refresh","zframes.redirect/redirect-with-refresh",279964936),(function (opts){
return zframes.redirect.redirect_with_refresh.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),(function (fx,p__21363){
var vec__21364 = p__21363;
var _ = cljs.core.nth.call(null,vec__21364,(0),null);
var opts = cljs.core.nth.call(null,vec__21364,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),opts], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","page-redirect","zframes.redirect/page-redirect",1327408852),(function (opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"_target","_target",-820699148).cljs$core$IFn$_invoke$arity$1(opts))){
return zframes.redirect.window_open.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return zframes.redirect.page_redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,temp__5720__auto__){
return (function (p__21379){
var vec__21380 = p__21379;
var k = cljs.core.nth.call(null,vec__21380,(0),null);
var v = cljs.core.nth.call(null,vec__21380,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(params,temp__5720__auto__))
,params)))].join('');
} else {
return null;
}
})()].join(''));
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","set-query-string","zframes.redirect/set-query-string",-1121382268),(function (params){
var loc = window.location;
history.pushState(({}),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(params),[zframes.window_location.gen_query_string.call(null,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"title","title",636505583))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

zframes.routing.dispatch_context.call(null,null);

return zframes.routing.dispatch_routes.call(null,null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","merge-params","zframes.redirect/merge-params",-173023378),(function (p__21383,p__21384){
var map__21385 = p__21383;
var map__21385__$1 = (((((!((map__21385 == null))))?(((((map__21385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21385):map__21385);
var db = cljs.core.get.call(null,map__21385__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21386 = p__21384;
var _ = cljs.core.nth.call(null,vec__21386,(0),null);
var params = cljs.core.nth.call(null,vec__21386,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
var nil_keys = cljs.core.reduce.call(null,((function (pth,map__21385,map__21385__$1,db,vec__21386,_,params){
return (function (acc,p__21390){
var vec__21391 = p__21390;
var k = cljs.core.nth.call(null,vec__21391,(0),null);
var v = cljs.core.nth.call(null,vec__21391,(1),null);
if((v == null)){
return cljs.core.conj.call(null,acc,k);
} else {
return acc;
}
});})(pth,map__21385,map__21385__$1,db,vec__21386,_,params))
,cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-params","fragment-params",-332661138),new cljs.core.Keyword(null,"params","params",710516235)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.merge.call(null,old_params,params),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","set-params","zframes.redirect/set-params",1891379987),(function (p__21394,p__21395){
var map__21396 = p__21394;
var map__21396__$1 = (((((!((map__21396 == null))))?(((((map__21396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21396):map__21396);
var db = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21397 = p__21395;
var _ = cljs.core.nth.call(null,vec__21397,(0),null);
var params = cljs.core.nth.call(null,vec__21397,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),params], null)], null);
}));

//# sourceMappingURL=redirect.js.map
