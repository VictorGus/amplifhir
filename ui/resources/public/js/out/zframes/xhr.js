// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.xhr');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.db');
goog.require('zframes.redirect');
goog.require('re_frame.core');
zframes.xhr.sub_query_by_spaces = (function zframes$xhr$sub_query_by_spaces(k,s){
return clojure.string.join.call(null,"&",cljs.core.mapv.call(null,(function (v){
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),clojure.string.split.call(null,s,/\s+/)));
});
zframes.xhr.to_query = (function zframes$xhr$to_query(params){
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__25512){
var vec__25513 = p__25512;
var k = cljs.core.nth.call(null,vec__25513,(0),null);
var v = cljs.core.nth.call(null,vec__25513,(1),null);
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,((function (vec__25513,k,v){
return (function (vv){
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vv)].join('');
});})(vec__25513,k,v))
,v);
} else {
if(cljs.core.set_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",v))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);

}
}
}),params));
});
zframes.xhr.base_url = (function zframes$xhr$base_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"base-url","base-url",9540398)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.xhr.make_form_data = (function zframes$xhr$make_form_data(files){
var form_data = (new FormData());
cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (form_data){
return (function zframes$xhr$make_form_data_$_iter__25516(s__25517){
return (new cljs.core.LazySeq(null,((function (form_data){
return (function (){
var s__25517__$1 = s__25517;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25517__$1);
if(temp__5720__auto__){
var s__25517__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25517__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25517__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25519 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25518 = (0);
while(true){
if((i__25518 < size__4522__auto__)){
var vec__25520 = cljs.core._nth.call(null,c__4521__auto__,i__25518);
var i = cljs.core.nth.call(null,vec__25520,(0),null);
var file = cljs.core.nth.call(null,vec__25520,(1),null);
cljs.core.chunk_append.call(null,b__25519,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__25526 = (i__25518 + (1));
i__25518 = G__25526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25519),zframes$xhr$make_form_data_$_iter__25516.call(null,cljs.core.chunk_rest.call(null,s__25517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25519),null);
}
} else {
var vec__25523 = cljs.core.first.call(null,s__25517__$2);
var i = cljs.core.nth.call(null,vec__25523,(0),null);
var file = cljs.core.nth.call(null,vec__25523,(1),null);
return cljs.core.cons.call(null,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),zframes$xhr$make_form_data_$_iter__25516.call(null,cljs.core.rest.call(null,s__25517__$2)));
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
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,files));
})());

return form_data;
});
if((typeof zframes !== 'undefined') && (typeof zframes.xhr !== 'undefined') && (typeof zframes.xhr.abort_controller_cache !== 'undefined')){
} else {
zframes.xhr.abort_controller_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
zframes.xhr.get_abort_controller = (function zframes$xhr$get_abort_controller(req_id){
var temp__5720__auto___25527 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
if(cljs.core.truth_(temp__5720__auto___25527)){
var ctrl_25528 = temp__5720__auto___25527;
ctrl_25528.abort();
} else {
}

cljs.core.swap_BANG_.call(null,zframes.xhr.abort_controller_cache,cljs.core.assoc,req_id,(new AbortController()));

return cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
});
zframes.xhr._STAR_json_fetch = (function zframes$xhr$_STAR_json_fetch(p__25530){
var map__25531 = p__25530;
var map__25531__$1 = (((((!((map__25531 == null))))?(((((map__25531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25531):map__25531);
var opts = map__25531__$1;
var uri = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var is_fetching_path = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"is-fetching-path","is-fetching-path",1190163610));
var format = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var req_id = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
var cookies = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329));
var params = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var success = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__25531__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__25533 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
var map__25533__$1 = (((((!((map__25533 == null))))?(((((map__25533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25533):map__25533);
var token = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var base_url = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var x_correlation_id = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"x-correlation-id","x-correlation-id",-1017048031));
var screen = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"match","match",1220059550)], null));
var abort_controller = (cljs.core.truth_(req_id)?zframes.xhr.get_abort_controller.call(null,req_id):null);
var fmt = (function (){var or__4131__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["json","application/json","yaml","text/yaml"], null),format);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "application/json";
}
})();
var x_audit = (function (){var G__25535 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.global-context","organization","app.global-context/organization",-1499177253),new cljs.core.Keyword(null,"main-organization","main-organization",-228002480),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var G__25535__$1 = (((G__25535 == null))?null:cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"morg-id","morg-id",-515030705)],[G__25535]));
var G__25535__$2 = (((G__25535__$1 == null))?null:cljs.core.clj__GT_js.call(null,G__25535__$1));
var G__25535__$3 = (((G__25535__$2 == null))?null:JSON.stringify(G__25535__$2));
if((G__25535__$3 == null)){
return null;
} else {
return btoa(G__25535__$3);
}
})();
var headers__$1 = (function (){var G__25536 = new cljs.core.PersistentArrayMap(null, 3, ["accept",fmt,"x-correlation-id",x_correlation_id,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
var G__25536__$1 = (cljs.core.truth_(x_audit)?cljs.core.assoc.call(null,G__25536,"x-audit",x_audit):G__25536);
var G__25536__$2 = (((((token == null)) || (clojure.string.blank_QMARK_.call(null,token))))?cljs.core.dissoc.call(null,G__25536__$1,"authorization"):G__25536__$1);
var G__25536__$3 = (((new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts) == null))?cljs.core.assoc.call(null,G__25536__$2,"Content-Type","application/json"):G__25536__$2);
return cljs.core.merge.call(null,G__25536__$3,(function (){var or__4131__auto__ = headers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

})();
var fetch_opts = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"credentials","credentials",1373178854),"same-origin"], null),(cljs.core.truth_(abort_controller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signal","signal",-1984951589),abort_controller.signal], null):null),opts),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"files","files",-472457450)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
var fetch_opts__$1 = (function (){var G__25537 = fetch_opts;
var G__25537__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__25537,new cljs.core.Keyword(null,"body","body",-2049205669),((typeof new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts) === 'string')?new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts):JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))))):G__25537);
if(cljs.core.truth_(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__25537__$1,new cljs.core.Keyword(null,"body","body",-2049205669),zframes.xhr.make_form_data.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return G__25537__$1;
}
})();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.xhr","fetch-start","zframes.xhr/fetch-start",-520265940),is_fetching_path], null));
} else {
}

return fetch([url,(cljs.core.truth_(params)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.xhr.to_query.call(null,params))].join(''):null)].join(''),cljs.core.clj__GT_js.call(null,fetch_opts__$1)).then(((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (resp){
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.xhr","fetch-end","zframes.xhr/fetch-end",1683243462),is_fetching_path], null));
} else {
}

if(cljs.core._EQ_.call(null,(500),resp.status)){
throw resp;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"dont-parse","dont-parse",651669270).cljs$core$IFn$_invoke$arity$1(opts))){
return resp.text().then(((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
var e = (((resp.status <= (299)))?success:error);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
} else {
return resp.json().then(((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
var data = cljs.core.js__GT_clj.call(null,doc,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.mapv.call(null,((function (data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (p1__25529_SHARP_){
if(cljs.core.truth_(p1__25529_SHARP_)){
return re_frame.core.dispatch.call(null,p1__25529_SHARP_);
} else {
return null;
}
});})(data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(req_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","done","xhr/done",-893895006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)], null):null),(function (){var temp__5720__auto__ = (((resp.status < (299)))?success:error);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((resp.status > (299)))?(function (){var errors = cljs.core.map.call(null,((function (data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagnostics","diagnostics",359783524).cljs$core$IFn$_invoke$arity$1(e))].join('');
});})(data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"flash-disabled","flash-disabled",-213601818).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),resp.status], null)," ",resp.statusText], null),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),msg], null);
} else {
var G__25538 = resp.status;
switch (G__25538) {
case (404):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ",url], null);

break;
case (409):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return null;

}
}
})(),(((((!(cljs.core.empty_QMARK_.call(null,errors)))) && (cljs.core._EQ_.call(null,(422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (errors,data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function zframes$xhr$_STAR_json_fetch_$_iter__25539(s__25540){
return (new cljs.core.LazySeq(null,((function (errors,data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (){
var s__25540__$1 = s__25540;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25540__$1);
if(temp__5720__auto__){
var s__25540__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25540__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25540__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25542 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25541 = (0);
while(true){
if((i__25541 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__25541);
cljs.core.chunk_append.call(null,b__25542,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)));

var G__25545 = (i__25541 + (1));
i__25541 = G__25545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25542),zframes$xhr$_STAR_json_fetch_$_iter__25539.call(null,cljs.core.chunk_rest.call(null,s__25540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25542),null);
}
} else {
var e = cljs.core.first.call(null,s__25540__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)),zframes$xhr$_STAR_json_fetch_$_iter__25539.call(null,cljs.core.rest.call(null,s__25540__$2)));
}
} else {
return null;
}
break;
}
});})(errors,data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,null,null));
});})(errors,data,map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
;
return iter__4523__auto__.call(null,errors);
})()], null):null)], null)], null)], null);
}
})():null)], null));
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
,((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
}
}
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
).catch(((function (map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error){
return (function (err){
if(cljs.core._EQ_.call(null,err.name,"AbortError")){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flash-disabled","flash-disabled",-213601818).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),err.status], null)," ",err.statusText], null),(function (){var G__25543 = err.status;
switch (G__25543) {
case (500):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435\u043E\u043F\u043E\u0437\u043D\u0430\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"], null);

}
})()], null)], null)], null));
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.call(null,error,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"error","error",-978969032),err], null))], null));
}
});})(map__25533,map__25533__$1,token,base_url,x_correlation_id,screen,abort_controller,fmt,x_audit,headers__$1,fetch_opts,fetch_opts__$1,url,map__25531,map__25531__$1,opts,uri,is_fetching_path,format,req_id,cookies,params,headers,success,error))
);
});
zframes.xhr.json_fetch = (function zframes$xhr$json_fetch(opts){
if(cljs.core.vector_QMARK_.call(null,opts)){
var seq__25547 = cljs.core.seq.call(null,opts);
var chunk__25548 = null;
var count__25549 = (0);
var i__25550 = (0);
while(true){
if((i__25550 < count__25549)){
var o = cljs.core._nth.call(null,chunk__25548,i__25550);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__25551 = seq__25547;
var G__25552 = chunk__25548;
var G__25553 = count__25549;
var G__25554 = (i__25550 + (1));
seq__25547 = G__25551;
chunk__25548 = G__25552;
count__25549 = G__25553;
i__25550 = G__25554;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25547);
if(temp__5720__auto__){
var seq__25547__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25547__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25547__$1);
var G__25555 = cljs.core.chunk_rest.call(null,seq__25547__$1);
var G__25556 = c__4550__auto__;
var G__25557 = cljs.core.count.call(null,c__4550__auto__);
var G__25558 = (0);
seq__25547 = G__25555;
chunk__25548 = G__25556;
count__25549 = G__25557;
i__25550 = G__25558;
continue;
} else {
var o = cljs.core.first.call(null,seq__25547__$1);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__25559 = cljs.core.next.call(null,seq__25547__$1);
var G__25560 = null;
var G__25561 = (0);
var G__25562 = (0);
seq__25547 = G__25559;
chunk__25548 = G__25560;
count__25549 = G__25561;
i__25550 = G__25562;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.xhr._STAR_json_fetch.call(null,opts);
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.xhr","json-fetch","zframes.xhr/json-fetch",53155453),zframes.xhr.json_fetch);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("json","fetch","json/fetch",-1093390044),zframes.xhr.json_fetch);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p1__25563_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),p1__25563_SHARP_], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p__25564,p__25565){
var map__25566 = p__25564;
var map__25566__$1 = (((((!((map__25566 == null))))?(((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25566):map__25566);
var db = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25567 = p__25565;
var _ = cljs.core.nth.call(null,vec__25567,(0),null);
var opts = cljs.core.nth.call(null,vec__25567,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.call(null,((function (map__25566,map__25566__$1,db,vec__25567,_,opts){
return (function (acc,opt){
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-id","req-id",-471642231).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
});})(map__25566,map__25566__$1,db,vec__25567,_,opts))
,db,((cljs.core.vector_QMARK_.call(null,opts))?opts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null))),new cljs.core.Keyword("json","fetch","json/fetch",-1093390044),opts], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","done","xhr/done",-893895006),(function (p__25571,p__25572){
var map__25573 = p__25571;
var map__25573__$1 = (((((!((map__25573 == null))))?(((((map__25573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var db = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25574 = p__25572;
var _ = cljs.core.nth.call(null,vec__25574,(0),null);
var map__25577 = cljs.core.nth.call(null,vec__25574,(1),null);
var map__25577__$1 = (((((!((map__25577 == null))))?(((((map__25577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25577):map__25577);
var resp = map__25577__$1;
var map__25578 = cljs.core.get.call(null,map__25577__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__25578__$1 = (((((!((map__25578 == null))))?(((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25578):map__25578);
var req = map__25578__$1;
var req_id = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null),resp)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","remove-response","xhr/remove-response",903761172),(function (p__25582,p__25583){
var map__25584 = p__25582;
var map__25584__$1 = (((((!((map__25584 == null))))?(((((map__25584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25584):map__25584);
var db = cljs.core.get.call(null,map__25584__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25585 = p__25583;
var _ = cljs.core.nth.call(null,vec__25585,(0),null);
var req_id = cljs.core.nth.call(null,vec__25585,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303)], null),cljs.core.dissoc,req_id)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),(function (db,p__25589){
var vec__25590 = p__25589;
var _ = cljs.core.nth.call(null,vec__25590,(0),null);
var req_id = cljs.core.nth.call(null,vec__25590,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","redirect","xhr/redirect",-1975751232),(function (_,p__25593){
var vec__25594 = p__25593;
var ___$1 = cljs.core.nth.call(null,vec__25594,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25594,(1),null);
var opts = cljs.core.nth.call(null,vec__25594,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),opts], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-start","zframes.xhr/fetch-start",-520265940),(function (db,p__25597){
var vec__25598 = p__25597;
var _ = cljs.core.nth.call(null,vec__25598,(0),null);
var path = cljs.core.nth.call(null,vec__25598,(1),null);
return cljs.core.assoc.call(null,db,path,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-end","zframes.xhr/fetch-end",1683243462),(function (db,p__25601){
var vec__25602 = p__25601;
var _ = cljs.core.nth.call(null,vec__25602,(0),null);
var path = cljs.core.nth.call(null,vec__25602,(1),null);
return cljs.core.assoc.call(null,db,path,false);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","config","xhr/config",994717665),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
}));

//# sourceMappingURL=xhr.js.map