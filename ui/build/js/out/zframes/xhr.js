// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.xhr');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('re_frame.db');
goog.require('zframes.redirect');
goog.require('re_frame.core');
zframes.xhr.sub_query_by_spaces = (function zframes$xhr$sub_query_by_spaces(k,s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/)));
});
zframes.xhr.to_query = (function zframes$xhr$to_query(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8131){
var vec__8132 = p__8131;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8132,(1),null);
if(cljs.core.vector_QMARK_(v)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__8132,k,v){
return (function (vv){
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vv)].join('');
});})(vec__8132,k,v))
,v);
} else {
if(cljs.core.set_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",v))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
});
zframes.xhr.base_url = (function zframes$xhr$base_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$base_DASH_url], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.xhr.make_form_data = (function zframes$xhr$make_form_data(files){
var form_data = (new FormData());
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (form_data){
return (function zframes$xhr$make_form_data_$_iter__8135(s__8136){
return (new cljs.core.LazySeq(null,((function (form_data){
return (function (){
var s__8136__$1 = s__8136;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8136__$1);
if(temp__5720__auto__){
var s__8136__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8136__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8136__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8138 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8137 = (0);
while(true){
if((i__8137 < size__4522__auto__)){
var vec__8139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8137);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(1),null);
cljs.core.chunk_append(b__8138,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__8145 = (i__8137 + (1));
i__8137 = G__8145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8138),zframes$xhr$make_form_data_$_iter__8135(cljs.core.chunk_rest(s__8136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8138),null);
}
} else {
var vec__8142 = cljs.core.first(s__8136__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(1),null);
return cljs.core.cons(form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),zframes$xhr$make_form_data_$_iter__8135(cljs.core.rest(s__8136__$2)));
}
} else {
return null;
}
break;
}
});})(form_data))
,null,null));
});})(form_data))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,files));
})());

return form_data;
});
if((typeof zframes !== 'undefined') && (typeof zframes.xhr !== 'undefined') && (typeof zframes.xhr.abort_controller_cache !== 'undefined')){
} else {
zframes.xhr.abort_controller_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
zframes.xhr.get_abort_controller = (function zframes$xhr$get_abort_controller(req_id){
var temp__5720__auto___8146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zframes.xhr.abort_controller_cache),req_id);
if(cljs.core.truth_(temp__5720__auto___8146)){
var ctrl_8147 = temp__5720__auto___8146;
ctrl_8147.abort();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zframes.xhr.abort_controller_cache,cljs.core.assoc,req_id,(new AbortController()));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zframes.xhr.abort_controller_cache),req_id);
});
zframes.xhr._STAR_json_fetch = (function zframes$xhr$_STAR_json_fetch(p__8149){
var map__8150 = p__8149;
var map__8150__$1 = (((((!((map__8150 == null))))?(((((map__8150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8150):map__8150);
var opts = map__8150__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$uri);
var is_fetching_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$is_DASH_fetching_DASH_path);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$format);
var req_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$req_DASH_id);
var cookies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$cookies);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$headers);
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$success);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$error);
var map__8152 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$config], null));
var map__8152__$1 = (((((!((map__8152 == null))))?(((((map__8152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8152):map__8152);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8152__$1,cljs.core.cst$kw$token);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8152__$1,cljs.core.cst$kw$base_DASH_url);
var x_correlation_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8152__$1,cljs.core.cst$kw$x_DASH_correlation_DASH_id);
var screen = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$match], null));
var abort_controller = (cljs.core.truth_(req_id)?zframes.xhr.get_abort_controller(req_id):null);
var fmt = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["json","application/json","yaml","text/yaml"], null),format);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "application/json";
}
})();
var x_audit = (function (){var G__8154 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$global_DASH_context_SLASH_organization,cljs.core.cst$kw$main_DASH_organization,cljs.core.cst$kw$id], null));
var G__8154__$1 = (((G__8154 == null))?null:cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$morg_DASH_id],[G__8154]));
var G__8154__$2 = (((G__8154__$1 == null))?null:cljs.core.clj__GT_js(G__8154__$1));
var G__8154__$3 = (((G__8154__$2 == null))?null:JSON.stringify(G__8154__$2));
if((G__8154__$3 == null)){
return null;
} else {
return btoa(G__8154__$3);
}
})();
var headers__$1 = (function (){var G__8155 = new cljs.core.PersistentArrayMap(null, 3, ["accept",fmt,"x-correlation-id",x_correlation_id,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
var G__8155__$1 = (cljs.core.truth_(x_audit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8155,"x-audit",x_audit):G__8155);
var G__8155__$2 = (((((token == null)) || (clojure.string.blank_QMARK_(token))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8155__$1,"authorization"):G__8155__$1);
var G__8155__$3 = (((cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8155__$2,"Content-Type","application/json"):G__8155__$2);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__8155__$3,(function (){var or__4131__auto__ = headers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));

})();
var fetch_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$method,"get",cljs.core.cst$kw$mode,"cors",cljs.core.cst$kw$credentials,"same-origin"], null),(cljs.core.truth_(abort_controller)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,abort_controller.signal], null):null),opts], 0)),cljs.core.cst$kw$uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,cljs.core.cst$kw$success,cljs.core.cst$kw$error,cljs.core.cst$kw$params,cljs.core.cst$kw$files], 0)),cljs.core.cst$kw$headers,headers__$1);
var fetch_opts__$1 = (function (){var G__8156 = fetch_opts;
var G__8156__$1 = (cljs.core.truth_(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8156,cljs.core.cst$kw$body,((typeof cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts) === 'string')?cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts):JSON.stringify(cljs.core.clj__GT_js(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts))))):G__8156);
if(cljs.core.truth_(cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8156__$1,cljs.core.cst$kw$body,zframes.xhr.make_form_data(cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return G__8156__$1;
}
})();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
if(cljs.core.truth_(is_fetching_path)){
var G__8157_8170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_start,is_fetching_path], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8157_8170) : re_frame.core.dispatch.call(null,G__8157_8170));
} else {
}

return fetch([url,(cljs.core.truth_(params)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.xhr.to_query(params))].join(''):null)].join(''),cljs.core.clj__GT_js(fetch_opts__$1)).then(((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (resp){
if(cljs.core.truth_(is_fetching_path)){
var G__8158_8171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_end,is_fetching_path], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8158_8171) : re_frame.core.dispatch.call(null,G__8158_8171));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((500),resp.status)){
throw resp;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$dont_DASH_parse.cljs$core$IFn$_invoke$arity$1(opts))){
return resp.text().then(((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
var e = (((resp.status <= (299)))?success:error);
var G__8159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(e),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8159) : re_frame.core.dispatch.call(null,G__8159));
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error:",doc], 0));

var G__8160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8160) : re_frame.core.dispatch.call(null,G__8160));
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
} else {
return resp.json().then(((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (p1__8148_SHARP_){
if(cljs.core.truth_(p1__8148_SHARP_)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(p1__8148_SHARP_) : re_frame.core.dispatch.call(null,p1__8148_SHARP_));
} else {
return null;
}
});})(data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(req_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_done,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,data,cljs.core.cst$kw$status,resp.status], null)], null):null),(function (){var temp__5720__auto__ = (((resp.status < (299)))?success:error);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,data,cljs.core.cst$kw$status,resp.status], null),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((resp.status > (299)))?(function (){var errors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expression.cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$diagnostics.cljs$core$IFn$_invoke$arity$1(e))].join('');
});})(data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,cljs.core.cst$kw$issue.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(cljs.core.cst$kw$flash_DASH_disabled.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,resp.status], null)," ",resp.statusText], null),(function (){var temp__5718__auto__ = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,msg], null);
} else {
var G__8161 = resp.status;
switch (G__8161) {
case (404):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ",url], null);

break;
case (409):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return null;

}
}
})(),(((((!(cljs.core.empty_QMARK_(errors)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4523__auto__ = ((function (errors,data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function zframes$xhr$_STAR_json_fetch_$_iter__8162(s__8163){
return (new cljs.core.LazySeq(null,((function (errors,data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (){
var s__8163__$1 = s__8163;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8163__$1);
if(temp__5720__auto__){
var s__8163__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8163__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8163__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8165 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8164 = (0);
while(true){
if((i__8164 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8164);
cljs.core.chunk_append(b__8165,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,e], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)));

var G__8173 = (i__8164 + (1));
i__8164 = G__8173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8165),zframes$xhr$_STAR_json_fetch_$_iter__8162(cljs.core.chunk_rest(s__8163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8165),null);
}
} else {
var e = cljs.core.first(s__8163__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,e], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)),zframes$xhr$_STAR_json_fetch_$_iter__8162(cljs.core.rest(s__8163__$2)));
}
} else {
return null;
}
break;
}
});})(errors,data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,null,null));
});})(errors,data,map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
;
return iter__4523__auto__(errors);
})()], null):null)], null)], null)], null);
}
})():null)], null));
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error:",doc], 0));

var G__8166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8166) : re_frame.core.dispatch.call(null,G__8166));
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
}
}
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
).catch(((function (map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (err){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(err.name,"AbortError")){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$flash_DASH_disabled.cljs$core$IFn$_invoke$arity$1(opts))){
} else {
var G__8167_8174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,err.status], null)," ",err.statusText], null),(function (){var G__8168 = err.status;
switch (G__8168) {
case (500):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435\u043E\u043F\u043E\u0437\u043D\u0430\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"], null);

}
})()], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8167_8174) : re_frame.core.dispatch.call(null,G__8167_8174));
}

var G__8169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$error,err], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8169) : re_frame.core.dispatch.call(null,G__8169));
}
});})(map__8152,map__8152__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__8150,map__8150__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
});
zframes.xhr.json_fetch = (function zframes$xhr$json_fetch(opts){
if(cljs.core.vector_QMARK_(opts)){
var seq__8176 = cljs.core.seq(opts);
var chunk__8177 = null;
var count__8178 = (0);
var i__8179 = (0);
while(true){
if((i__8179 < count__8178)){
var o = chunk__8177.cljs$core$IIndexed$_nth$arity$2(null,i__8179);
zframes.xhr._STAR_json_fetch(o);


var G__8180 = seq__8176;
var G__8181 = chunk__8177;
var G__8182 = count__8178;
var G__8183 = (i__8179 + (1));
seq__8176 = G__8180;
chunk__8177 = G__8181;
count__8178 = G__8182;
i__8179 = G__8183;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8176);
if(temp__5720__auto__){
var seq__8176__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8176__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__8176__$1);
var G__8184 = cljs.core.chunk_rest(seq__8176__$1);
var G__8185 = c__4550__auto__;
var G__8186 = cljs.core.count(c__4550__auto__);
var G__8187 = (0);
seq__8176 = G__8184;
chunk__8177 = G__8185;
count__8178 = G__8186;
i__8179 = G__8187;
continue;
} else {
var o = cljs.core.first(seq__8176__$1);
zframes.xhr._STAR_json_fetch(o);


var G__8188 = cljs.core.next(seq__8176__$1);
var G__8189 = null;
var G__8190 = (0);
var G__8191 = (0);
seq__8176 = G__8188;
chunk__8177 = G__8189;
count__8178 = G__8190;
i__8179 = G__8191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.xhr._STAR_json_fetch(opts);
}
});
var G__8192_8194 = cljs.core.cst$kw$zframes$xhr_SLASH_json_DASH_fetch;
var G__8193_8195 = zframes.xhr.json_fetch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8192_8194,G__8193_8195) : re_frame.core.reg_fx.call(null,G__8192_8194,G__8193_8195));
var G__8196_8198 = cljs.core.cst$kw$json_SLASH_fetch;
var G__8197_8199 = zframes.xhr.json_fetch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8196_8198,G__8197_8199) : re_frame.core.reg_fx.call(null,G__8196_8198,G__8197_8199));
var G__8201_8204 = cljs.core.cst$kw$xhr_SLASH_fetch;
var G__8202_8205 = ((function (G__8201_8204){
return (function (p1__8200_SHARP_){
var G__8203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_fetch,p1__8200_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8203) : re_frame.core.dispatch.call(null,G__8203));
});})(G__8201_8204))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8201_8204,G__8202_8205) : re_frame.core.reg_fx.call(null,G__8201_8204,G__8202_8205));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_fetch,(function (p__8206,p__8207){
var map__8208 = p__8206;
var map__8208__$1 = (((((!((map__8208 == null))))?(((((map__8208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8208):map__8208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8208__$1,cljs.core.cst$kw$db);
var vec__8209 = p__8207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8209,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8209,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__8208,map__8208__$1,db,vec__8209,_,opts){
return (function (acc,opt){
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_id.cljs$core$IFn$_invoke$arity$1(opt),cljs.core.cst$kw$loading], null),true);
});})(map__8208,map__8208__$1,db,vec__8209,_,opts))
,db,((cljs.core.vector_QMARK_(opts))?opts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null))),cljs.core.cst$kw$json_SLASH_fetch,opts], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_done,(function (p__8213,p__8214){
var map__8215 = p__8213;
var map__8215__$1 = (((((!((map__8215 == null))))?(((((map__8215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8215):map__8215);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8215__$1,cljs.core.cst$kw$db);
var vec__8216 = p__8214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8216,(0),null);
var map__8219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8216,(1),null);
var map__8219__$1 = (((((!((map__8219 == null))))?(((((map__8219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8219):map__8219);
var resp = map__8219__$1;
var map__8220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8219__$1,cljs.core.cst$kw$request);
var map__8220__$1 = (((((!((map__8220 == null))))?(((((map__8220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8220):map__8220);
var req = map__8220__$1;
var req_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220__$1,cljs.core.cst$kw$req_DASH_id);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,req_id], null),resp)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_remove_DASH_response,(function (p__8224,p__8225){
var map__8226 = p__8224;
var map__8226__$1 = (((((!((map__8226 == null))))?(((((map__8226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8226):map__8226);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8226__$1,cljs.core.cst$kw$db);
var vec__8227 = p__8225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8227,(0),null);
var req_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8227,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req], null),cljs.core.dissoc,req_id)], null);
}));
var G__8231_8237 = cljs.core.cst$kw$xhr_SLASH_response;
var G__8232_8238 = ((function (G__8231_8237){
return (function (db,p__8233){
var vec__8234 = p__8233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8234,(0),null);
var req_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8234,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,req_id], null));
});})(G__8231_8237))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8231_8237,G__8232_8238) : re_frame.core.reg_sub.call(null,G__8231_8237,G__8232_8238));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_redirect,(function (_,p__8239){
var vec__8240 = p__8239;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8240,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8240,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8240,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,opts], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_start,(function (db,p__8243){
var vec__8244 = p__8243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8244,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8244,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_end,(function (db,p__8247){
var vec__8248 = p__8247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8248,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8248,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path,false);
}));
var G__8251_8253 = cljs.core.cst$kw$xhr_SLASH_config;
var G__8252_8254 = ((function (G__8251_8253){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$config], null));
});})(G__8251_8253))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8251_8253,G__8252_8254) : re_frame.core.reg_sub.call(null,G__8251_8253,G__8252_8254));