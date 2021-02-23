// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__41227){
var map__41228 = p__41227;
var map__41228__$1 = (((((!((map__41228 == null))))?(((((map__41228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41228):map__41228);
var operation = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__41230_41250 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__41231_41251 = null;
var count__41232_41252 = (0);
var i__41233_41253 = (0);
while(true){
if((i__41233_41253 < count__41232_41252)){
var vec__41242_41254 = cljs.core._nth.call(null,chunk__41231_41251,i__41233_41253);
var k_41255 = cljs.core.nth.call(null,vec__41242_41254,(0),null);
var cb_41256 = cljs.core.nth.call(null,vec__41242_41254,(1),null);
try{cb_41256.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e41245){var e_41257 = e41245;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_41255,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_41257);
}

var G__41258 = seq__41230_41250;
var G__41259 = chunk__41231_41251;
var G__41260 = count__41232_41252;
var G__41261 = (i__41233_41253 + (1));
seq__41230_41250 = G__41258;
chunk__41231_41251 = G__41259;
count__41232_41252 = G__41260;
i__41233_41253 = G__41261;
continue;
} else {
var temp__5720__auto___41262 = cljs.core.seq.call(null,seq__41230_41250);
if(temp__5720__auto___41262){
var seq__41230_41263__$1 = temp__5720__auto___41262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41230_41263__$1)){
var c__4550__auto___41264 = cljs.core.chunk_first.call(null,seq__41230_41263__$1);
var G__41265 = cljs.core.chunk_rest.call(null,seq__41230_41263__$1);
var G__41266 = c__4550__auto___41264;
var G__41267 = cljs.core.count.call(null,c__4550__auto___41264);
var G__41268 = (0);
seq__41230_41250 = G__41265;
chunk__41231_41251 = G__41266;
count__41232_41252 = G__41267;
i__41233_41253 = G__41268;
continue;
} else {
var vec__41246_41269 = cljs.core.first.call(null,seq__41230_41263__$1);
var k_41270 = cljs.core.nth.call(null,vec__41246_41269,(0),null);
var cb_41271 = cljs.core.nth.call(null,vec__41246_41269,(1),null);
try{cb_41271.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e41249){var e_41272 = e41249;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_41270,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_41272);
}

var G__41273 = cljs.core.next.call(null,seq__41230_41263__$1);
var G__41274 = null;
var G__41275 = (0);
var G__41276 = (0);
seq__41230_41250 = G__41273;
chunk__41231_41251 = G__41274;
count__41232_41252 = G__41275;
i__41233_41253 = G__41276;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
