// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__42028 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42029 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42029;

try{try{var seq__42030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42031 = null;
var count__42032 = (0);
var i__42033 = (0);
while(true){
if((i__42033 < count__42032)){
var vec__42040 = cljs.core._nth.call(null,chunk__42031,i__42033);
var effect_key = cljs.core.nth.call(null,vec__42040,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42040,(1),null);
var temp__5718__auto___42062 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42062)){
var effect_fn_42063 = temp__5718__auto___42062;
effect_fn_42063.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42064 = seq__42030;
var G__42065 = chunk__42031;
var G__42066 = count__42032;
var G__42067 = (i__42033 + (1));
seq__42030 = G__42064;
chunk__42031 = G__42065;
count__42032 = G__42066;
i__42033 = G__42067;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42030);
if(temp__5720__auto__){
var seq__42030__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42030__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42030__$1);
var G__42068 = cljs.core.chunk_rest.call(null,seq__42030__$1);
var G__42069 = c__4550__auto__;
var G__42070 = cljs.core.count.call(null,c__4550__auto__);
var G__42071 = (0);
seq__42030 = G__42068;
chunk__42031 = G__42069;
count__42032 = G__42070;
i__42033 = G__42071;
continue;
} else {
var vec__42043 = cljs.core.first.call(null,seq__42030__$1);
var effect_key = cljs.core.nth.call(null,vec__42043,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42043,(1),null);
var temp__5718__auto___42072 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42072)){
var effect_fn_42073 = temp__5718__auto___42072;
effect_fn_42073.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42074 = cljs.core.next.call(null,seq__42030__$1);
var G__42075 = null;
var G__42076 = (0);
var G__42077 = (0);
seq__42030 = G__42074;
chunk__42031 = G__42075;
count__42032 = G__42076;
i__42033 = G__42077;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__20196__auto___42078 = re_frame.interop.now.call(null);
var duration__20197__auto___42079 = (end__20196__auto___42078 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20197__auto___42079,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__20196__auto___42078);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42028;
}} else {
var seq__42046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42047 = null;
var count__42048 = (0);
var i__42049 = (0);
while(true){
if((i__42049 < count__42048)){
var vec__42056 = cljs.core._nth.call(null,chunk__42047,i__42049);
var effect_key = cljs.core.nth.call(null,vec__42056,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42056,(1),null);
var temp__5718__auto___42080 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42080)){
var effect_fn_42081 = temp__5718__auto___42080;
effect_fn_42081.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42082 = seq__42046;
var G__42083 = chunk__42047;
var G__42084 = count__42048;
var G__42085 = (i__42049 + (1));
seq__42046 = G__42082;
chunk__42047 = G__42083;
count__42048 = G__42084;
i__42049 = G__42085;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42046);
if(temp__5720__auto__){
var seq__42046__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42046__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42046__$1);
var G__42086 = cljs.core.chunk_rest.call(null,seq__42046__$1);
var G__42087 = c__4550__auto__;
var G__42088 = cljs.core.count.call(null,c__4550__auto__);
var G__42089 = (0);
seq__42046 = G__42086;
chunk__42047 = G__42087;
count__42048 = G__42088;
i__42049 = G__42089;
continue;
} else {
var vec__42059 = cljs.core.first.call(null,seq__42046__$1);
var effect_key = cljs.core.nth.call(null,vec__42059,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42059,(1),null);
var temp__5718__auto___42090 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42090)){
var effect_fn_42091 = temp__5718__auto___42090;
effect_fn_42091.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42092 = cljs.core.next.call(null,seq__42046__$1);
var G__42093 = null;
var G__42094 = (0);
var G__42095 = (0);
seq__42046 = G__42092;
chunk__42047 = G__42093;
count__42048 = G__42094;
i__42049 = G__42095;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__42096 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__42097 = null;
var count__42098 = (0);
var i__42099 = (0);
while(true){
if((i__42099 < count__42098)){
var map__42104 = cljs.core._nth.call(null,chunk__42097,i__42099);
var map__42104__$1 = (((((!((map__42104 == null))))?(((((map__42104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42104):map__42104);
var effect = map__42104__$1;
var ms = cljs.core.get.call(null,map__42104__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42104__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42096,chunk__42097,count__42098,i__42099,map__42104,map__42104__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42096,chunk__42097,count__42098,i__42099,map__42104,map__42104__$1,effect,ms,dispatch))
,ms);
}


var G__42108 = seq__42096;
var G__42109 = chunk__42097;
var G__42110 = count__42098;
var G__42111 = (i__42099 + (1));
seq__42096 = G__42108;
chunk__42097 = G__42109;
count__42098 = G__42110;
i__42099 = G__42111;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42096);
if(temp__5720__auto__){
var seq__42096__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42096__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42096__$1);
var G__42112 = cljs.core.chunk_rest.call(null,seq__42096__$1);
var G__42113 = c__4550__auto__;
var G__42114 = cljs.core.count.call(null,c__4550__auto__);
var G__42115 = (0);
seq__42096 = G__42112;
chunk__42097 = G__42113;
count__42098 = G__42114;
i__42099 = G__42115;
continue;
} else {
var map__42106 = cljs.core.first.call(null,seq__42096__$1);
var map__42106__$1 = (((((!((map__42106 == null))))?(((((map__42106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42106):map__42106);
var effect = map__42106__$1;
var ms = cljs.core.get.call(null,map__42106__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42106__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42096,chunk__42097,count__42098,i__42099,map__42106,map__42106__$1,effect,ms,dispatch,seq__42096__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42096,chunk__42097,count__42098,i__42099,map__42106,map__42106__$1,effect,ms,dispatch,seq__42096__$1,temp__5720__auto__))
,ms);
}


var G__42116 = cljs.core.next.call(null,seq__42096__$1);
var G__42117 = null;
var G__42118 = (0);
var G__42119 = (0);
seq__42096 = G__42116;
chunk__42097 = G__42117;
count__42098 = G__42118;
i__42099 = G__42119;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__42120 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__42121 = null;
var count__42122 = (0);
var i__42123 = (0);
while(true){
if((i__42123 < count__42122)){
var event = cljs.core._nth.call(null,chunk__42121,i__42123);
re_frame.router.dispatch.call(null,event);


var G__42124 = seq__42120;
var G__42125 = chunk__42121;
var G__42126 = count__42122;
var G__42127 = (i__42123 + (1));
seq__42120 = G__42124;
chunk__42121 = G__42125;
count__42122 = G__42126;
i__42123 = G__42127;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42120);
if(temp__5720__auto__){
var seq__42120__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42120__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42120__$1);
var G__42128 = cljs.core.chunk_rest.call(null,seq__42120__$1);
var G__42129 = c__4550__auto__;
var G__42130 = cljs.core.count.call(null,c__4550__auto__);
var G__42131 = (0);
seq__42120 = G__42128;
chunk__42121 = G__42129;
count__42122 = G__42130;
i__42123 = G__42131;
continue;
} else {
var event = cljs.core.first.call(null,seq__42120__$1);
re_frame.router.dispatch.call(null,event);


var G__42132 = cljs.core.next.call(null,seq__42120__$1);
var G__42133 = null;
var G__42134 = (0);
var G__42135 = (0);
seq__42120 = G__42132;
chunk__42121 = G__42133;
count__42122 = G__42134;
i__42123 = G__42135;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__42136 = cljs.core.seq.call(null,value);
var chunk__42137 = null;
var count__42138 = (0);
var i__42139 = (0);
while(true){
if((i__42139 < count__42138)){
var event = cljs.core._nth.call(null,chunk__42137,i__42139);
clear_event.call(null,event);


var G__42140 = seq__42136;
var G__42141 = chunk__42137;
var G__42142 = count__42138;
var G__42143 = (i__42139 + (1));
seq__42136 = G__42140;
chunk__42137 = G__42141;
count__42138 = G__42142;
i__42139 = G__42143;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42136);
if(temp__5720__auto__){
var seq__42136__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42136__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42136__$1);
var G__42144 = cljs.core.chunk_rest.call(null,seq__42136__$1);
var G__42145 = c__4550__auto__;
var G__42146 = cljs.core.count.call(null,c__4550__auto__);
var G__42147 = (0);
seq__42136 = G__42144;
chunk__42137 = G__42145;
count__42138 = G__42146;
i__42139 = G__42147;
continue;
} else {
var event = cljs.core.first.call(null,seq__42136__$1);
clear_event.call(null,event);


var G__42148 = cljs.core.next.call(null,seq__42136__$1);
var G__42149 = null;
var G__42150 = (0);
var G__42151 = (0);
seq__42136 = G__42148;
chunk__42137 = G__42149;
count__42138 = G__42150;
i__42139 = G__42151;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
