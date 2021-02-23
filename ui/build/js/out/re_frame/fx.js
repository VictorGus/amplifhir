// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__6946 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__6947 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__6947;

try{try{var seq__6948 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6949 = null;
var count__6950 = (0);
var i__6951 = (0);
while(true){
if((i__6951 < count__6950)){
var vec__6958 = chunk__6949.cljs$core$IIndexed$_nth$arity$2(null,i__6951);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(1),null);
var temp__5718__auto___6980 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6980)){
var effect_fn_6981 = temp__5718__auto___6980;
(effect_fn_6981.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6981.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6981.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6982 = seq__6948;
var G__6983 = chunk__6949;
var G__6984 = count__6950;
var G__6985 = (i__6951 + (1));
seq__6948 = G__6982;
chunk__6949 = G__6983;
count__6950 = G__6984;
i__6951 = G__6985;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6948);
if(temp__5720__auto__){
var seq__6948__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6948__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6948__$1);
var G__6986 = cljs.core.chunk_rest(seq__6948__$1);
var G__6987 = c__4550__auto__;
var G__6988 = cljs.core.count(c__4550__auto__);
var G__6989 = (0);
seq__6948 = G__6986;
chunk__6949 = G__6987;
count__6950 = G__6988;
i__6951 = G__6989;
continue;
} else {
var vec__6961 = cljs.core.first(seq__6948__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6961,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6961,(1),null);
var temp__5718__auto___6990 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6990)){
var effect_fn_6991 = temp__5718__auto___6990;
(effect_fn_6991.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6991.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6991.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6992 = cljs.core.next(seq__6948__$1);
var G__6993 = null;
var G__6994 = (0);
var G__6995 = (0);
seq__6948 = G__6992;
chunk__6949 = G__6993;
count__6950 = G__6994;
i__6951 = G__6995;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6468__auto___6996 = re_frame.interop.now();
var duration__6469__auto___6997 = (end__6468__auto___6996 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6469__auto___6997,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6468__auto___6996);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__6946;
}} else {
var seq__6964 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6965 = null;
var count__6966 = (0);
var i__6967 = (0);
while(true){
if((i__6967 < count__6966)){
var vec__6974 = chunk__6965.cljs$core$IIndexed$_nth$arity$2(null,i__6967);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6974,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6974,(1),null);
var temp__5718__auto___6998 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6998)){
var effect_fn_6999 = temp__5718__auto___6998;
(effect_fn_6999.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6999.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6999.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7000 = seq__6964;
var G__7001 = chunk__6965;
var G__7002 = count__6966;
var G__7003 = (i__6967 + (1));
seq__6964 = G__7000;
chunk__6965 = G__7001;
count__6966 = G__7002;
i__6967 = G__7003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6964);
if(temp__5720__auto__){
var seq__6964__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6964__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6964__$1);
var G__7004 = cljs.core.chunk_rest(seq__6964__$1);
var G__7005 = c__4550__auto__;
var G__7006 = cljs.core.count(c__4550__auto__);
var G__7007 = (0);
seq__6964 = G__7004;
chunk__6965 = G__7005;
count__6966 = G__7006;
i__6967 = G__7007;
continue;
} else {
var vec__6977 = cljs.core.first(seq__6964__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6977,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6977,(1),null);
var temp__5718__auto___7008 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___7008)){
var effect_fn_7009 = temp__5718__auto___7008;
(effect_fn_7009.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7009.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7009.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7010 = cljs.core.next(seq__6964__$1);
var G__7011 = null;
var G__7012 = (0);
var G__7013 = (0);
seq__6964 = G__7010;
chunk__6965 = G__7011;
count__6966 = G__7012;
i__6967 = G__7013;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__7014 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7015 = null;
var count__7016 = (0);
var i__7017 = (0);
while(true){
if((i__7017 < count__7016)){
var map__7022 = chunk__7015.cljs$core$IIndexed$_nth$arity$2(null,i__7017);
var map__7022__$1 = (((((!((map__7022 == null))))?(((((map__7022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7022):map__7022);
var effect = map__7022__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7022__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7022__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__7014,chunk__7015,count__7016,i__7017,map__7022,map__7022__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__7014,chunk__7015,count__7016,i__7017,map__7022,map__7022__$1,effect,ms,dispatch))
,ms);
}


var G__7026 = seq__7014;
var G__7027 = chunk__7015;
var G__7028 = count__7016;
var G__7029 = (i__7017 + (1));
seq__7014 = G__7026;
chunk__7015 = G__7027;
count__7016 = G__7028;
i__7017 = G__7029;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7014);
if(temp__5720__auto__){
var seq__7014__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7014__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7014__$1);
var G__7030 = cljs.core.chunk_rest(seq__7014__$1);
var G__7031 = c__4550__auto__;
var G__7032 = cljs.core.count(c__4550__auto__);
var G__7033 = (0);
seq__7014 = G__7030;
chunk__7015 = G__7031;
count__7016 = G__7032;
i__7017 = G__7033;
continue;
} else {
var map__7024 = cljs.core.first(seq__7014__$1);
var map__7024__$1 = (((((!((map__7024 == null))))?(((((map__7024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7024):map__7024);
var effect = map__7024__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7024__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7024__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__7014,chunk__7015,count__7016,i__7017,map__7024,map__7024__$1,effect,ms,dispatch,seq__7014__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__7014,chunk__7015,count__7016,i__7017,map__7024,map__7024__$1,effect,ms,dispatch,seq__7014__$1,temp__5720__auto__))
,ms);
}


var G__7034 = cljs.core.next(seq__7014__$1);
var G__7035 = null;
var G__7036 = (0);
var G__7037 = (0);
seq__7014 = G__7034;
chunk__7015 = G__7035;
count__7016 = G__7036;
i__7017 = G__7037;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__7038 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7039 = null;
var count__7040 = (0);
var i__7041 = (0);
while(true){
if((i__7041 < count__7040)){
var event = chunk__7039.cljs$core$IIndexed$_nth$arity$2(null,i__7041);
re_frame.router.dispatch(event);


var G__7042 = seq__7038;
var G__7043 = chunk__7039;
var G__7044 = count__7040;
var G__7045 = (i__7041 + (1));
seq__7038 = G__7042;
chunk__7039 = G__7043;
count__7040 = G__7044;
i__7041 = G__7045;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7038);
if(temp__5720__auto__){
var seq__7038__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7038__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7038__$1);
var G__7046 = cljs.core.chunk_rest(seq__7038__$1);
var G__7047 = c__4550__auto__;
var G__7048 = cljs.core.count(c__4550__auto__);
var G__7049 = (0);
seq__7038 = G__7046;
chunk__7039 = G__7047;
count__7040 = G__7048;
i__7041 = G__7049;
continue;
} else {
var event = cljs.core.first(seq__7038__$1);
re_frame.router.dispatch(event);


var G__7050 = cljs.core.next(seq__7038__$1);
var G__7051 = null;
var G__7052 = (0);
var G__7053 = (0);
seq__7038 = G__7050;
chunk__7039 = G__7051;
count__7040 = G__7052;
i__7041 = G__7053;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__7054 = cljs.core.seq(value);
var chunk__7055 = null;
var count__7056 = (0);
var i__7057 = (0);
while(true){
if((i__7057 < count__7056)){
var event = chunk__7055.cljs$core$IIndexed$_nth$arity$2(null,i__7057);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__7058 = seq__7054;
var G__7059 = chunk__7055;
var G__7060 = count__7056;
var G__7061 = (i__7057 + (1));
seq__7054 = G__7058;
chunk__7055 = G__7059;
count__7056 = G__7060;
i__7057 = G__7061;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7054);
if(temp__5720__auto__){
var seq__7054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7054__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7054__$1);
var G__7062 = cljs.core.chunk_rest(seq__7054__$1);
var G__7063 = c__4550__auto__;
var G__7064 = cljs.core.count(c__4550__auto__);
var G__7065 = (0);
seq__7054 = G__7062;
chunk__7055 = G__7063;
count__7056 = G__7064;
i__7057 = G__7065;
continue;
} else {
var event = cljs.core.first(seq__7054__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__7066 = cljs.core.next(seq__7054__$1);
var G__7067 = null;
var G__7068 = (0);
var G__7069 = (0);
seq__7054 = G__7066;
chunk__7055 = G__7067;
count__7056 = G__7068;
i__7057 = G__7069;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
