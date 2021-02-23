// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.flash');
goog.require('cljs.core');
goog.require('app.styles');
goog.require('re_frame.core');
zframes.flash.gen_uuid = (function zframes$flash$gen_uuid(){
return cljs.core.random_uuid.call(null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.flash","flash","zframes.flash/flash",-184028119),(function (db,p__25253){
var vec__25254 = p__25253;
var _ = cljs.core.nth.call(null,vec__25254,(0),null);
var status = cljs.core.nth.call(null,vec__25254,(1),null);
var data_or_params = cljs.core.nth.call(null,vec__25254,(2),null);
var maybe_params = cljs.core.nth.call(null,vec__25254,(3),null);
var map__25257 = (function (){var or__4131__auto__ = maybe_params;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data_or_params;
}
})();
var map__25257__$1 = (((((!((map__25257 == null))))?(((((map__25257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);
var opts = map__25257__$1;
var id = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.flash.gen_uuid.call(null))));
var msg = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var time = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"time","time",1385887882),(8000));
setTimeout(((function (map__25257,map__25257__$1,opts,id,msg,time,vec__25254,_,status,data_or_params,maybe_params){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.flash","remove-flash","zframes.flash/remove-flash",1024096046),id], null));
});})(map__25257,map__25257__$1,opts,id,msg,time,vec__25254,_,status,data_or_params,maybe_params))
,time);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flash","flash",934660619),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"st","st",1455255828),status,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.flash","add-flash","zframes.flash/add-flash",134866307),(function (db,p__25259){
var vec__25260 = p__25259;
var _ = cljs.core.nth.call(null,vec__25260,(0),null);
var map__25263 = cljs.core.nth.call(null,vec__25260,(1),null);
var map__25263__$1 = (((((!((map__25263 == null))))?(((((map__25263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25263):map__25263);
var opts = map__25263__$1;
var status = cljs.core.get.call(null,map__25263__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__25263__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__25263__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flash","flash",934660619),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"st","st",1455255828),status,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.flash","remove-flash","zframes.flash/remove-flash",1024096046),(function (db,p__25265){
var vec__25266 = p__25265;
var _ = cljs.core.nth.call(null,vec__25266,(0),null);
var id = cljs.core.nth.call(null,vec__25266,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"flash","flash",934660619),cljs.core.dissoc,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("flash","flash","flash/flash",1027979771),(function (p__25269){
var vec__25270 = p__25269;
var seq__25271 = cljs.core.seq.call(null,vec__25270);
var first__25272 = cljs.core.first.call(null,seq__25271);
var seq__25271__$1 = cljs.core.next.call(null,seq__25271);
var status = first__25272;
var args = seq__25271__$1;
return re_frame.core.dispatch.call(null,cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword("zframes.flash","flash","zframes.flash/flash",-184028119),status,args));
}));
var seq__25273_25293 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"info","info",-317069002)], null));
var chunk__25274_25294 = null;
var count__25275_25295 = (0);
var i__25276_25296 = (0);
while(true){
if((i__25276_25296 < count__25275_25295)){
var type_25297 = cljs.core._nth.call(null,chunk__25274_25294,i__25276_25296);
var ev_25298 = cljs.core.keyword.call(null,"flash",cljs.core.name.call(null,type_25297));
re_frame.core.reg_event_fx.call(null,ev_25298,((function (seq__25273_25293,chunk__25274_25294,count__25275_25295,i__25276_25296,ev_25298,type_25297){
return (function (_,p__25285){
var vec__25286 = p__25285;
var seq__25287 = cljs.core.seq.call(null,vec__25286);
var first__25288 = cljs.core.first.call(null,seq__25287);
var seq__25287__$1 = cljs.core.next.call(null,seq__25287);
var ___$1 = first__25288;
var args = seq__25287__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("flash","flash","flash/flash",1027979771),cljs.core.vec.call(null,cljs.core.cons.call(null,type_25297,args))], null);
});})(seq__25273_25293,chunk__25274_25294,count__25275_25295,i__25276_25296,ev_25298,type_25297))
);


var G__25299 = seq__25273_25293;
var G__25300 = chunk__25274_25294;
var G__25301 = count__25275_25295;
var G__25302 = (i__25276_25296 + (1));
seq__25273_25293 = G__25299;
chunk__25274_25294 = G__25300;
count__25275_25295 = G__25301;
i__25276_25296 = G__25302;
continue;
} else {
var temp__5720__auto___25303 = cljs.core.seq.call(null,seq__25273_25293);
if(temp__5720__auto___25303){
var seq__25273_25304__$1 = temp__5720__auto___25303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25273_25304__$1)){
var c__4550__auto___25305 = cljs.core.chunk_first.call(null,seq__25273_25304__$1);
var G__25306 = cljs.core.chunk_rest.call(null,seq__25273_25304__$1);
var G__25307 = c__4550__auto___25305;
var G__25308 = cljs.core.count.call(null,c__4550__auto___25305);
var G__25309 = (0);
seq__25273_25293 = G__25306;
chunk__25274_25294 = G__25307;
count__25275_25295 = G__25308;
i__25276_25296 = G__25309;
continue;
} else {
var type_25310 = cljs.core.first.call(null,seq__25273_25304__$1);
var ev_25311 = cljs.core.keyword.call(null,"flash",cljs.core.name.call(null,type_25310));
re_frame.core.reg_event_fx.call(null,ev_25311,((function (seq__25273_25293,chunk__25274_25294,count__25275_25295,i__25276_25296,ev_25311,type_25310,seq__25273_25304__$1,temp__5720__auto___25303){
return (function (_,p__25289){
var vec__25290 = p__25289;
var seq__25291 = cljs.core.seq.call(null,vec__25290);
var first__25292 = cljs.core.first.call(null,seq__25291);
var seq__25291__$1 = cljs.core.next.call(null,seq__25291);
var ___$1 = first__25292;
var args = seq__25291__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("flash","flash","flash/flash",1027979771),cljs.core.vec.call(null,cljs.core.cons.call(null,type_25310,args))], null);
});})(seq__25273_25293,chunk__25274_25294,count__25275_25295,i__25276_25296,ev_25311,type_25310,seq__25273_25304__$1,temp__5720__auto___25303))
);


var G__25312 = cljs.core.next.call(null,seq__25273_25304__$1);
var G__25313 = null;
var G__25314 = (0);
var G__25315 = (0);
seq__25273_25293 = G__25312;
chunk__25274_25294 = G__25313;
count__25275_25295 = G__25314;
i__25276_25296 = G__25315;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zframes.flash","flashes","zframes.flash/flashes",1669157662),(function (db,_){
return new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(db);
}));
zframes.flash.flash_msg = (function zframes$flash$flash_msg(id,f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-dismissible","div.alert.alert-dismissible",-1191842267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["alert-",cljs.core.name.call(null,new cljs.core.Keyword(null,"st","st",1455255828).cljs$core$IFn$_invoke$arity$1(f))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.flash","remove-flash","zframes.flash/remove-flash",1024096046),id], null));
})], null),"\u00D7"], null),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(f)], null);
});
zframes.flash.styles = app.styles.style.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flashes",".flashes",732744110),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null)], null));
zframes.flash.flashes = (function zframes$flash$flashes(){
var flashes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.flash","flashes","zframes.flash/flashes",1669157662)], null));
return ((function (flashes){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flashes","div.flashes",1418773157)], null),cljs.core.reduce_kv.call(null,((function (flashes){
return (function (acc,k,f){
return cljs.core.conj.call(null,acc,zframes.flash.flash_msg.call(null,k,f));
});})(flashes))
,cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,flashes)));
});
;})(flashes))
});

//# sourceMappingURL=flash.js.map
