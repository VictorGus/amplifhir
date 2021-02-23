// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6551){
var map__6552 = p__6551;
var map__6552__$1 = (((((!((map__6552 == null))))?(((((map__6552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6552):map__6552);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6552__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6552__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6552__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6552__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6554_6578 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6555_6579 = null;
var count__6556_6580 = (0);
var i__6557_6581 = (0);
while(true){
if((i__6557_6581 < count__6556_6580)){
var vec__6568_6582 = chunk__6555_6579.cljs$core$IIndexed$_nth$arity$2(null,i__6557_6581);
var k_6583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568_6582,(0),null);
var cb_6584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568_6582,(1),null);
try{var G__6572_6585 = cljs.core.deref(re_frame.trace.traces);
(cb_6584.cljs$core$IFn$_invoke$arity$1 ? cb_6584.cljs$core$IFn$_invoke$arity$1(G__6572_6585) : cb_6584.call(null,G__6572_6585));
}catch (e6571){var e_6586 = e6571;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6583,"while storing",cljs.core.deref(re_frame.trace.traces),e_6586], 0));
}

var G__6587 = seq__6554_6578;
var G__6588 = chunk__6555_6579;
var G__6589 = count__6556_6580;
var G__6590 = (i__6557_6581 + (1));
seq__6554_6578 = G__6587;
chunk__6555_6579 = G__6588;
count__6556_6580 = G__6589;
i__6557_6581 = G__6590;
continue;
} else {
var temp__5720__auto___6591 = cljs.core.seq(seq__6554_6578);
if(temp__5720__auto___6591){
var seq__6554_6592__$1 = temp__5720__auto___6591;
if(cljs.core.chunked_seq_QMARK_(seq__6554_6592__$1)){
var c__4550__auto___6593 = cljs.core.chunk_first(seq__6554_6592__$1);
var G__6594 = cljs.core.chunk_rest(seq__6554_6592__$1);
var G__6595 = c__4550__auto___6593;
var G__6596 = cljs.core.count(c__4550__auto___6593);
var G__6597 = (0);
seq__6554_6578 = G__6594;
chunk__6555_6579 = G__6595;
count__6556_6580 = G__6596;
i__6557_6581 = G__6597;
continue;
} else {
var vec__6573_6598 = cljs.core.first(seq__6554_6592__$1);
var k_6599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6573_6598,(0),null);
var cb_6600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6573_6598,(1),null);
try{var G__6577_6601 = cljs.core.deref(re_frame.trace.traces);
(cb_6600.cljs$core$IFn$_invoke$arity$1 ? cb_6600.cljs$core$IFn$_invoke$arity$1(G__6577_6601) : cb_6600.call(null,G__6577_6601));
}catch (e6576){var e_6602 = e6576;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6599,"while storing",cljs.core.deref(re_frame.trace.traces),e_6602], 0));
}

var G__6603 = cljs.core.next(seq__6554_6592__$1);
var G__6604 = null;
var G__6605 = (0);
var G__6606 = (0);
seq__6554_6578 = G__6603;
chunk__6555_6579 = G__6604;
count__6556_6580 = G__6605;
i__6557_6581 = G__6606;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
