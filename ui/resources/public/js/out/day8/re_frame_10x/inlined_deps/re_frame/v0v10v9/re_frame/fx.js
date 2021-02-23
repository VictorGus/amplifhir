// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39965 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39966 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39966;

try{try{var seq__39967 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39968 = null;
var count__39969 = (0);
var i__39970 = (0);
while(true){
if((i__39970 < count__39969)){
var vec__39977 = cljs.core._nth.call(null,chunk__39968,i__39970);
var effect_key = cljs.core.nth.call(null,vec__39977,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39977,(1),null);
var temp__5718__auto___39999 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___39999)){
var effect_fn_40000 = temp__5718__auto___39999;
effect_fn_40000.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__40001 = seq__39967;
var G__40002 = chunk__39968;
var G__40003 = count__39969;
var G__40004 = (i__39970 + (1));
seq__39967 = G__40001;
chunk__39968 = G__40002;
count__39969 = G__40003;
i__39970 = G__40004;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39967);
if(temp__5720__auto__){
var seq__39967__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39967__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39967__$1);
var G__40005 = cljs.core.chunk_rest.call(null,seq__39967__$1);
var G__40006 = c__4550__auto__;
var G__40007 = cljs.core.count.call(null,c__4550__auto__);
var G__40008 = (0);
seq__39967 = G__40005;
chunk__39968 = G__40006;
count__39969 = G__40007;
i__39970 = G__40008;
continue;
} else {
var vec__39980 = cljs.core.first.call(null,seq__39967__$1);
var effect_key = cljs.core.nth.call(null,vec__39980,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39980,(1),null);
var temp__5718__auto___40009 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___40009)){
var effect_fn_40010 = temp__5718__auto___40009;
effect_fn_40010.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__40011 = cljs.core.next.call(null,seq__39967__$1);
var G__40012 = null;
var G__40013 = (0);
var G__40014 = (0);
seq__39967 = G__40011;
chunk__39968 = G__40012;
count__39969 = G__40013;
i__39970 = G__40014;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39525__auto___40015 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__39526__auto___40016 = (end__39525__auto___40015 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39526__auto___40016,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__39525__auto___40015);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39965;
}} else {
var seq__39983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39984 = null;
var count__39985 = (0);
var i__39986 = (0);
while(true){
if((i__39986 < count__39985)){
var vec__39993 = cljs.core._nth.call(null,chunk__39984,i__39986);
var effect_key = cljs.core.nth.call(null,vec__39993,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39993,(1),null);
var temp__5718__auto___40017 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___40017)){
var effect_fn_40018 = temp__5718__auto___40017;
effect_fn_40018.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__40019 = seq__39983;
var G__40020 = chunk__39984;
var G__40021 = count__39985;
var G__40022 = (i__39986 + (1));
seq__39983 = G__40019;
chunk__39984 = G__40020;
count__39985 = G__40021;
i__39986 = G__40022;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39983);
if(temp__5720__auto__){
var seq__39983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39983__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39983__$1);
var G__40023 = cljs.core.chunk_rest.call(null,seq__39983__$1);
var G__40024 = c__4550__auto__;
var G__40025 = cljs.core.count.call(null,c__4550__auto__);
var G__40026 = (0);
seq__39983 = G__40023;
chunk__39984 = G__40024;
count__39985 = G__40025;
i__39986 = G__40026;
continue;
} else {
var vec__39996 = cljs.core.first.call(null,seq__39983__$1);
var effect_key = cljs.core.nth.call(null,vec__39996,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39996,(1),null);
var temp__5718__auto___40027 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___40027)){
var effect_fn_40028 = temp__5718__auto___40027;
effect_fn_40028.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__40029 = cljs.core.next.call(null,seq__39983__$1);
var G__40030 = null;
var G__40031 = (0);
var G__40032 = (0);
seq__39983 = G__40029;
chunk__39984 = G__40030;
count__39985 = G__40031;
i__39986 = G__40032;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__40033 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__40034 = null;
var count__40035 = (0);
var i__40036 = (0);
while(true){
if((i__40036 < count__40035)){
var map__40041 = cljs.core._nth.call(null,chunk__40034,i__40036);
var map__40041__$1 = (((((!((map__40041 == null))))?(((((map__40041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40041):map__40041);
var effect = map__40041__$1;
var ms = cljs.core.get.call(null,map__40041__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__40041__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__40033,chunk__40034,count__40035,i__40036,map__40041,map__40041__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__40033,chunk__40034,count__40035,i__40036,map__40041,map__40041__$1,effect,ms,dispatch))
,ms);
}


var G__40045 = seq__40033;
var G__40046 = chunk__40034;
var G__40047 = count__40035;
var G__40048 = (i__40036 + (1));
seq__40033 = G__40045;
chunk__40034 = G__40046;
count__40035 = G__40047;
i__40036 = G__40048;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40033);
if(temp__5720__auto__){
var seq__40033__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40033__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40033__$1);
var G__40049 = cljs.core.chunk_rest.call(null,seq__40033__$1);
var G__40050 = c__4550__auto__;
var G__40051 = cljs.core.count.call(null,c__4550__auto__);
var G__40052 = (0);
seq__40033 = G__40049;
chunk__40034 = G__40050;
count__40035 = G__40051;
i__40036 = G__40052;
continue;
} else {
var map__40043 = cljs.core.first.call(null,seq__40033__$1);
var map__40043__$1 = (((((!((map__40043 == null))))?(((((map__40043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40043):map__40043);
var effect = map__40043__$1;
var ms = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__40033,chunk__40034,count__40035,i__40036,map__40043,map__40043__$1,effect,ms,dispatch,seq__40033__$1,temp__5720__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__40033,chunk__40034,count__40035,i__40036,map__40043,map__40043__$1,effect,ms,dispatch,seq__40033__$1,temp__5720__auto__))
,ms);
}


var G__40053 = cljs.core.next.call(null,seq__40033__$1);
var G__40054 = null;
var G__40055 = (0);
var G__40056 = (0);
seq__40033 = G__40053;
chunk__40034 = G__40054;
count__40035 = G__40055;
i__40036 = G__40056;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__40057 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__40058 = null;
var count__40059 = (0);
var i__40060 = (0);
while(true){
if((i__40060 < count__40059)){
var event = cljs.core._nth.call(null,chunk__40058,i__40060);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__40061 = seq__40057;
var G__40062 = chunk__40058;
var G__40063 = count__40059;
var G__40064 = (i__40060 + (1));
seq__40057 = G__40061;
chunk__40058 = G__40062;
count__40059 = G__40063;
i__40060 = G__40064;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40057);
if(temp__5720__auto__){
var seq__40057__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40057__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40057__$1);
var G__40065 = cljs.core.chunk_rest.call(null,seq__40057__$1);
var G__40066 = c__4550__auto__;
var G__40067 = cljs.core.count.call(null,c__4550__auto__);
var G__40068 = (0);
seq__40057 = G__40065;
chunk__40058 = G__40066;
count__40059 = G__40067;
i__40060 = G__40068;
continue;
} else {
var event = cljs.core.first.call(null,seq__40057__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__40069 = cljs.core.next.call(null,seq__40057__$1);
var G__40070 = null;
var G__40071 = (0);
var G__40072 = (0);
seq__40057 = G__40069;
chunk__40058 = G__40070;
count__40059 = G__40071;
i__40060 = G__40072;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__40073 = cljs.core.seq.call(null,value);
var chunk__40074 = null;
var count__40075 = (0);
var i__40076 = (0);
while(true){
if((i__40076 < count__40075)){
var event = cljs.core._nth.call(null,chunk__40074,i__40076);
clear_event.call(null,event);


var G__40077 = seq__40073;
var G__40078 = chunk__40074;
var G__40079 = count__40075;
var G__40080 = (i__40076 + (1));
seq__40073 = G__40077;
chunk__40074 = G__40078;
count__40075 = G__40079;
i__40076 = G__40080;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40073);
if(temp__5720__auto__){
var seq__40073__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40073__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40073__$1);
var G__40081 = cljs.core.chunk_rest.call(null,seq__40073__$1);
var G__40082 = c__4550__auto__;
var G__40083 = cljs.core.count.call(null,c__4550__auto__);
var G__40084 = (0);
seq__40073 = G__40081;
chunk__40074 = G__40082;
count__40075 = G__40083;
i__40076 = G__40084;
continue;
} else {
var event = cljs.core.first.call(null,seq__40073__$1);
clear_event.call(null,event);


var G__40085 = cljs.core.next.call(null,seq__40073__$1);
var G__40086 = null;
var G__40087 = (0);
var G__40088 = (0);
seq__40073 = G__40085;
chunk__40074 = G__40086;
count__40075 = G__40087;
i__40076 = G__40088;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
