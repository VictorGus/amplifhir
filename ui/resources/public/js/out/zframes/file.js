// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.file');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
zframes.file.storage_url = (function zframes$file$storage_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"storage-url","storage-url",-174576307)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.file.make_binary_file = (function zframes$file$make_binary_file(file){
var type = "application/octet-stream";
return (new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null))));
});
zframes.file._STAR_file_fetch = (function zframes$file$_STAR_file_fetch(p__25318){
var map__25319 = p__25318;
var map__25319__$1 = (((((!((map__25319 == null))))?(((((map__25319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25319):map__25319);
var opts = map__25319__$1;
var uri = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"method","method",55703592));
var success = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var body = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url = zframes.file.storage_url.call(null,cljs.core.deref.call(null,re_frame.db.app_db),uri);
var fetch_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__4131__auto__ = method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "GET";
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/octet-stream"], null),new cljs.core.Keyword(null,"body","body",-2049205669),zframes.file.make_binary_file.call(null,body)], null);
return fetch(url,cljs.core.clj__GT_js.call(null,fetch_opts)).then(((function (url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (resp){
return resp.json().then(((function (url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (doc){
var data = cljs.core.js__GT_clj.call(null,doc,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.mapv.call(null,re_frame.core.dispatch,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"req-id","req-id",-471642231).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","done","file/done",-886694752),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)], null):null),(function (){var temp__5720__auto__ = (((resp.status <= (299)))?success:error);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((((resp.status > (299))) && ((!(new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(error) === false)))))?(function (){var errors = cljs.core.map.call(null,((function (data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagnostics","diagnostics",359783524).cljs$core$IFn$_invoke$arity$1(e))].join('');
});})(data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
,new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),resp.status], null)," ",resp.statusText], null),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),msg], null);
} else {
var G__25321 = resp.status;
switch (G__25321) {
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25321)].join('')));

}
}
})(),(((((!(cljs.core.empty_QMARK_.call(null,errors)))) && (cljs.core._EQ_.call(null,(422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (errors,data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function zframes$file$_STAR_file_fetch_$_iter__25322(s__25323){
return (new cljs.core.LazySeq(null,((function (errors,data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (){
var s__25323__$1 = s__25323;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25323__$1);
if(temp__5720__auto__){
var s__25323__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25323__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25323__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25325 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25324 = (0);
while(true){
if((i__25324 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__25324);
cljs.core.chunk_append.call(null,b__25325,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)));

var G__25328 = (i__25324 + (1));
i__25324 = G__25328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25325),zframes$file$_STAR_file_fetch_$_iter__25322.call(null,cljs.core.chunk_rest.call(null,s__25323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25325),null);
}
} else {
var e = cljs.core.first.call(null,s__25323__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)),zframes$file$_STAR_file_fetch_$_iter__25322.call(null,cljs.core.rest.call(null,s__25323__$2)));
}
} else {
return null;
}
break;
}
});})(errors,data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
,null,null));
});})(errors,data,url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
;
return iter__4523__auto__.call(null,errors);
})()], null):null)], null)], null)], null);
})():null)], null)));
});})(url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
,((function (url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
});})(url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
);
});})(url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
).catch(((function (url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body){
return (function (err){
console.error(err);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),err.status], null)," ",err.statusText], null),(function (){var G__25326 = err.status;
switch (G__25326) {
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25326)].join('')));

}
})()], null)], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.call(null,error,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"error","error",-978969032),err], null))], null));
});})(url,fetch_opts,map__25319,map__25319__$1,opts,uri,method,success,error,body))
);
});
zframes.file.file_fetch = (function zframes$file$file_fetch(opts){
if(cljs.core.vector_QMARK_.call(null,opts)){
var seq__25330 = cljs.core.seq.call(null,opts);
var chunk__25331 = null;
var count__25332 = (0);
var i__25333 = (0);
while(true){
if((i__25333 < count__25332)){
var o = cljs.core._nth.call(null,chunk__25331,i__25333);
zframes.file._STAR_file_fetch.call(null,o);


var G__25334 = seq__25330;
var G__25335 = chunk__25331;
var G__25336 = count__25332;
var G__25337 = (i__25333 + (1));
seq__25330 = G__25334;
chunk__25331 = G__25335;
count__25332 = G__25336;
i__25333 = G__25337;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25330);
if(temp__5720__auto__){
var seq__25330__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25330__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25330__$1);
var G__25338 = cljs.core.chunk_rest.call(null,seq__25330__$1);
var G__25339 = c__4550__auto__;
var G__25340 = cljs.core.count.call(null,c__4550__auto__);
var G__25341 = (0);
seq__25330 = G__25338;
chunk__25331 = G__25339;
count__25332 = G__25340;
i__25333 = G__25341;
continue;
} else {
var o = cljs.core.first.call(null,seq__25330__$1);
zframes.file._STAR_file_fetch.call(null,o);


var G__25342 = cljs.core.next.call(null,seq__25330__$1);
var G__25343 = null;
var G__25344 = (0);
var G__25345 = (0);
seq__25330 = G__25342;
chunk__25331 = G__25343;
count__25332 = G__25344;
i__25333 = G__25345;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.file._STAR_file_fetch.call(null,opts);
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("file","fetch","file/fetch",-1093523784),zframes.file.file_fetch);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("file","upload","file/upload",-74360838),(function (_,p__25346){
var vec__25347 = p__25346;
var ___$1 = cljs.core.nth.call(null,vec__25347,(0),null);
var map__25350 = cljs.core.nth.call(null,vec__25347,(1),null);
var map__25350__$1 = (((((!((map__25350 == null))))?(((((map__25350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25350):map__25350);
var req = map__25350__$1;
var name = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var folder = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var uri = ["/storage/upload/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","fetch","file/fetch",-1093523784),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"uri","uri",-774711847),uri),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"folder","folder",1515881736))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("file","done","file/done",-886694752),(function (p__25352,p__25353){
var map__25354 = p__25352;
var map__25354__$1 = (((((!((map__25354 == null))))?(((((map__25354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25354):map__25354);
var db = cljs.core.get.call(null,map__25354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25355 = p__25353;
var _ = cljs.core.nth.call(null,vec__25355,(0),null);
var map__25358 = cljs.core.nth.call(null,vec__25355,(1),null);
var map__25358__$1 = (((((!((map__25358 == null))))?(((((map__25358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25358):map__25358);
var resp = map__25358__$1;
var map__25359 = cljs.core.get.call(null,map__25358__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__25359__$1 = (((((!((map__25359 == null))))?(((((map__25359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25359):map__25359);
var req_id = cljs.core.get.call(null,map__25359__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
cljs.core.println.call(null,resp);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null),resp)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("file","upload","file/upload",-74360838),(function (req){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","upload","file/upload",-74360838),req], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("file","response","file/response",-1065280892),(function (db,p__25363){
var vec__25364 = p__25363;
var _ = cljs.core.nth.call(null,vec__25364,(0),null);
var req_id = cljs.core.nth.call(null,vec__25364,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null));
}));

//# sourceMappingURL=file.js.map
