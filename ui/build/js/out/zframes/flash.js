// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.flash');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.styles');
goog.require('re_frame.core');
zframes.flash.gen_uuid = (function zframes$flash$gen_uuid(){
return cljs.core.random_uuid();
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_flash,(function (db,p__12142){
var vec__12143 = p__12142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12143,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12143,(1),null);
var data_or_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12143,(2),null);
var maybe_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12143,(3),null);
var map__12146 = (function (){var or__4131__auto__ = maybe_params;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data_or_params;
}
})();
var map__12146__$1 = (((((!((map__12146 == null))))?(((((map__12146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12146):map__12146);
var opts = map__12146__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12146__$1,cljs.core.cst$kw$id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.flash.gen_uuid())));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12146__$1,cljs.core.cst$kw$msg);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12146__$1,cljs.core.cst$kw$time,(8000));
setTimeout(((function (map__12146,map__12146__$1,opts,id,msg,time,vec__12143,_,status,data_or_params,maybe_params){
return (function (){
var G__12148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12148) : re_frame.core.dispatch.call(null,G__12148));
});})(map__12146,map__12146__$1,opts,id,msg,time,vec__12143,_,status,data_or_params,maybe_params))
,time);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash,id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$st,status,cljs.core.cst$kw$msg,msg], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_add_DASH_flash,(function (db,p__12149){
var vec__12150 = p__12149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12150,(0),null);
var map__12153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12150,(1),null);
var map__12153__$1 = (((((!((map__12153 == null))))?(((((map__12153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12153):map__12153);
var opts = map__12153__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153__$1,cljs.core.cst$kw$status);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153__$1,cljs.core.cst$kw$id);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153__$1,cljs.core.cst$kw$msg);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash,id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$st,status,cljs.core.cst$kw$msg,msg], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,(function (db,p__12155){
var vec__12156 = p__12155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12156,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12156,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$flash,cljs.core.dissoc,id);
}));
var G__12159_12166 = cljs.core.cst$kw$flash_SLASH_flash;
var G__12160_12167 = ((function (G__12159_12166){
return (function (p__12161){
var vec__12162 = p__12161;
var seq__12163 = cljs.core.seq(vec__12162);
var first__12164 = cljs.core.first(seq__12163);
var seq__12163__$1 = cljs.core.next(seq__12163);
var status = first__12164;
var args = seq__12163__$1;
var G__12165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.cst$kw$zframes$flash_SLASH_flash,status,args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12165) : re_frame.core.dispatch.call(null,G__12165));
});})(G__12159_12166))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12159_12166,G__12160_12167) : re_frame.core.reg_fx.call(null,G__12159_12166,G__12160_12167));
var seq__12168_12188 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,cljs.core.cst$kw$danger,cljs.core.cst$kw$warning,cljs.core.cst$kw$primary,cljs.core.cst$kw$light,cljs.core.cst$kw$dark,cljs.core.cst$kw$secondary,cljs.core.cst$kw$info], null));
var chunk__12169_12189 = null;
var count__12170_12190 = (0);
var i__12171_12191 = (0);
while(true){
if((i__12171_12191 < count__12170_12190)){
var type_12192 = chunk__12169_12189.cljs$core$IIndexed$_nth$arity$2(null,i__12171_12191);
var ev_12193 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flash",cljs.core.name(type_12192));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ev_12193,((function (seq__12168_12188,chunk__12169_12189,count__12170_12190,i__12171_12191,ev_12193,type_12192){
return (function (_,p__12180){
var vec__12181 = p__12180;
var seq__12182 = cljs.core.seq(vec__12181);
var first__12183 = cljs.core.first(seq__12182);
var seq__12182__$1 = cljs.core.next(seq__12182);
var ___$1 = first__12183;
var args = seq__12182__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flash_SLASH_flash,cljs.core.vec(cljs.core.cons(type_12192,args))], null);
});})(seq__12168_12188,chunk__12169_12189,count__12170_12190,i__12171_12191,ev_12193,type_12192))
);


var G__12194 = seq__12168_12188;
var G__12195 = chunk__12169_12189;
var G__12196 = count__12170_12190;
var G__12197 = (i__12171_12191 + (1));
seq__12168_12188 = G__12194;
chunk__12169_12189 = G__12195;
count__12170_12190 = G__12196;
i__12171_12191 = G__12197;
continue;
} else {
var temp__5720__auto___12198 = cljs.core.seq(seq__12168_12188);
if(temp__5720__auto___12198){
var seq__12168_12199__$1 = temp__5720__auto___12198;
if(cljs.core.chunked_seq_QMARK_(seq__12168_12199__$1)){
var c__4550__auto___12200 = cljs.core.chunk_first(seq__12168_12199__$1);
var G__12201 = cljs.core.chunk_rest(seq__12168_12199__$1);
var G__12202 = c__4550__auto___12200;
var G__12203 = cljs.core.count(c__4550__auto___12200);
var G__12204 = (0);
seq__12168_12188 = G__12201;
chunk__12169_12189 = G__12202;
count__12170_12190 = G__12203;
i__12171_12191 = G__12204;
continue;
} else {
var type_12205 = cljs.core.first(seq__12168_12199__$1);
var ev_12206 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flash",cljs.core.name(type_12205));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ev_12206,((function (seq__12168_12188,chunk__12169_12189,count__12170_12190,i__12171_12191,ev_12206,type_12205,seq__12168_12199__$1,temp__5720__auto___12198){
return (function (_,p__12184){
var vec__12185 = p__12184;
var seq__12186 = cljs.core.seq(vec__12185);
var first__12187 = cljs.core.first(seq__12186);
var seq__12186__$1 = cljs.core.next(seq__12186);
var ___$1 = first__12187;
var args = seq__12186__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flash_SLASH_flash,cljs.core.vec(cljs.core.cons(type_12205,args))], null);
});})(seq__12168_12188,chunk__12169_12189,count__12170_12190,i__12171_12191,ev_12206,type_12205,seq__12168_12199__$1,temp__5720__auto___12198))
);


var G__12207 = cljs.core.next(seq__12168_12199__$1);
var G__12208 = null;
var G__12209 = (0);
var G__12210 = (0);
seq__12168_12188 = G__12207;
chunk__12169_12189 = G__12208;
count__12170_12190 = G__12209;
i__12171_12191 = G__12210;
continue;
}
} else {
}
}
break;
}
var G__12211_12213 = cljs.core.cst$kw$zframes$flash_SLASH_flashes;
var G__12212_12214 = ((function (G__12211_12213){
return (function (db,_){
return cljs.core.cst$kw$flash.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12211_12213))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12211_12213,G__12212_12214) : re_frame.core.reg_sub.call(null,G__12211_12213,G__12212_12214));
zframes.flash.flash_msg = (function zframes$flash$flash_msg(id,f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$alert$alert_DASH_dismissible,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["alert-",cljs.core.name(cljs.core.cst$kw$st.cljs$core$IFn$_invoke$arity$1(f))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__12215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12215) : re_frame.core.dispatch.call(null,G__12215));
})], null),"\u00D7"], null),cljs.core.cst$kw$msg.cljs$core$IFn$_invoke$arity$1(f)], null);
});
zframes.flash.styles = app.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flashes,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"20px",cljs.core.cst$kw$right,"20px",cljs.core.cst$kw$max_DASH_width,"500px",cljs.core.cst$kw$z_DASH_index,(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null)], null)], 0));
zframes.flash.flashes = (function zframes$flash$flashes(){
var flashes = (function (){var G__12216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_flashes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12216) : re_frame.core.subscribe.call(null,G__12216));
})();
return ((function (flashes){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flashes], null),cljs.core.reduce_kv(((function (flashes){
return (function (acc,k,f){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,zframes.flash.flash_msg(k,f));
});})(flashes))
,cljs.core.PersistentVector.EMPTY,cljs.core.deref(flashes)));
});
;})(flashes))
});
