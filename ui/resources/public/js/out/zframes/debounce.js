// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.debounce');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof zframes !== 'undefined') && (typeof zframes.debounce !== 'undefined') && (typeof zframes.debounce.debounce_events !== 'undefined')){
} else {
zframes.debounce.debounce_events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
zframes.debounce.debounce = (function zframes$debounce$debounce(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25154 = arguments.length;
var i__4731__auto___25155 = (0);
while(true){
if((i__4731__auto___25155 < len__4730__auto___25154)){
args__4736__auto__.push((arguments[i__4731__auto___25155]));

var G__25156 = (i__4731__auto___25155 + (1));
i__4731__auto___25155 = G__25156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic = (function (p__25150,ms){
var vec__25151 = p__25150;
var nm = cljs.core.nth.call(null,vec__25151,(0),null);
var ev = vec__25151;
var temp__5720__auto___25157 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.debounce.debounce_events),nm);
if(cljs.core.truth_(temp__5720__auto___25157)){
var h_25158 = temp__5720__auto___25157;
clearTimeout(h_25158);
} else {
}

return cljs.core.swap_BANG_.call(null,zframes.debounce.debounce_events,cljs.core.assoc,nm,setTimeout(((function (vec__25151,nm,ev){
return (function (){
return re_frame.core.dispatch.call(null,ev);
});})(vec__25151,nm,ev))
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
zframes.debounce.debounce.cljs$lang$applyTo = (function (seq25148){
var G__25149 = cljs.core.first.call(null,seq25148);
var seq25148__$1 = cljs.core.next.call(null,seq25148);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25149,seq25148__$1);
});


//# sourceMappingURL=debounce.js.map
