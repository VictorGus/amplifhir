// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33698__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33699__i = 0, G__33699__a = new Array(arguments.length -  0);
while (G__33699__i < G__33699__a.length) {G__33699__a[G__33699__i] = arguments[G__33699__i + 0]; ++G__33699__i;}
  args = new cljs.core.IndexedSeq(G__33699__a,0,null);
} 
return G__33698__delegate.call(this,args);};
G__33698.cljs$lang$maxFixedArity = 0;
G__33698.cljs$lang$applyTo = (function (arglist__33700){
var args = cljs.core.seq(arglist__33700);
return G__33698__delegate(args);
});
G__33698.cljs$core$IFn$_invoke$arity$variadic = G__33698__delegate;
return G__33698;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33701__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33702__i = 0, G__33702__a = new Array(arguments.length -  0);
while (G__33702__i < G__33702__a.length) {G__33702__a[G__33702__i] = arguments[G__33702__i + 0]; ++G__33702__i;}
  args = new cljs.core.IndexedSeq(G__33702__a,0,null);
} 
return G__33701__delegate.call(this,args);};
G__33701.cljs$lang$maxFixedArity = 0;
G__33701.cljs$lang$applyTo = (function (arglist__33703){
var args = cljs.core.seq(arglist__33703);
return G__33701__delegate(args);
});
G__33701.cljs$core$IFn$_invoke$arity$variadic = G__33701__delegate;
return G__33701;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
