// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.debounce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
if((typeof zframes !== 'undefined') && (typeof zframes.debounce !== 'undefined') && (typeof zframes.debounce.debounce_events !== 'undefined')){
} else {
zframes.debounce.debounce_events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
zframes.debounce.debounce = (function zframes$debounce$debounce(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12045 = arguments.length;
var i__4731__auto___12046 = (0);
while(true){
if((i__4731__auto___12046 < len__4730__auto___12045)){
args__4736__auto__.push((arguments[i__4731__auto___12046]));

var G__12047 = (i__4731__auto___12046 + (1));
i__4731__auto___12046 = G__12047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic = (function (p__12041,ms){
var vec__12042 = p__12041;
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042,(0),null);
var ev = vec__12042;
var temp__5720__auto___12048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zframes.debounce.debounce_events),nm);
if(cljs.core.truth_(temp__5720__auto___12048)){
var h_12049 = temp__5720__auto___12048;
clearTimeout(h_12049);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zframes.debounce.debounce_events,cljs.core.assoc,nm,setTimeout(((function (vec__12042,nm,ev){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(ev) : re_frame.core.dispatch.call(null,ev));
});})(vec__12042,nm,ev))
,(function (){var or__4131__auto__ = ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (400);
}
})()));
});

zframes.debounce.debounce.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zframes.debounce.debounce.cljs$lang$applyTo = (function (seq12039){
var G__12040 = cljs.core.first(seq12039);
var seq12039__$1 = cljs.core.next(seq12039);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12040,seq12039__$1);
});

