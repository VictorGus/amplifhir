// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
goog.require('goog.object');
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.generation !== 'undefined')){
} else {
reagent.ratom.generation = (0);
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref(reagent.ratom._running);
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len(x);
var and__4120__auto__ = (len === reagent.ratom.arr_len(y));
if(and__4120__auto__){
var i = (0);
while(true){
var or__4131__auto__ = (i === len);
if(or__4131__auto__){
return or__4131__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__5284 = (i + (1));
i = G__5284;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4120__auto__;
}
});
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){

var _STAR_ratom_context_STAR__orig_val__5285 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__5286 = obj;
reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__5286;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__5285;
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 * `deref`ed atoms captured during `in-context`, if any differ from the
 * `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 * Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 * the reaction is also added to the list of watches on each ratoms f derefs.
 */
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = reagent.ratom.generation = (reagent.ratom.generation + (1));


var res = reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5724__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto__ == null)){
return null;
} else {
var r = temp__5724__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__5287_SHARP_,p2__5288_SHARP_,p3__5289_SHARP_){
var G__5290 = p1__5287_SHARP_;
G__5290.push(p2__5288_SHARP_);

G__5290.push(p3__5289_SHARP_);

return G__5290;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_5291 = (a[i]);
var f_5292 = (a[(i + (1))]);
(f_5292.cljs$core$IFn$_invoke$arity$4 ? f_5292.cljs$core$IFn$_invoke$arity$4(k_5291,this$,old,new$) : f_5292.call(null,k_5291,this$,old,new$));

var G__5293 = ((2) + i);
i = G__5293;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__5294 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__5295 = null;
reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__5295;

try{return cljs.core._deref(a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__5294;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.rea_queue !== 'undefined')){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
reagent.ratom.rea_queue = [];

reagent.impl.batching.schedule();
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
reagent.ratom.rea_queue = null;

var n__4607__auto___5296 = q.length;
var i_5297 = (0);
while(true){
if((i_5297 < n__4607__auto___5296)){
(q[i_5297])._queued_run();

var G__5298 = (i_5297 + (1));
i_5297 = G__5298;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$meta,cljs.core.cst$sym$validator,cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.ratom/RAtom");
});

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__5302 = arguments.length;
switch (G__5302) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5307 = arguments.length;
var i__4731__auto___5308 = (0);
while(true){
if((i__4731__auto___5308 < len__4730__auto___5307)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5308]));

var G__5309 = (i__4731__auto___5308 + (1));
i__4731__auto___5308 = G__5309;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom(x,null,null,null);
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__5303){
var map__5304 = p__5303;
var map__5304__$1 = (((((!((map__5304 == null))))?(((((map__5304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5304):map__5304);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$validator);
return reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
reagent.ratom.atom.cljs$lang$applyTo = (function (seq5300){
var G__5301 = cljs.core.first(seq5300);
var seq5300__$1 = cljs.core.next(seq5300);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5301,seq5300__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__5310 = f;
var G__5311 = cljs.core.cst$kw$on_DASH_dispose;
var G__5312 = ((function (G__5310,G__5311,m,m__$1,r){
return (function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

var __5313 = o.reagReactionCache;
var __5314__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__5313,k);
o.reagReactionCache = __5314__$1;

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__5310,G__5311,m,m__$1,r))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__5310,G__5311,G__5312) : reagent.ratom.make_reaction.call(null,G__5310,G__5311,G__5312));
})();
var v = cljs.core._deref(r__$1);
o.reagReactionCache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1);

if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5722__auto__ = self__.reaction;
if((temp__5722__auto__ == null)){
return reagent.ratom.cached_reaction(((function (temp__5722__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5722__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5722__auto__;
return cljs.core._deref(r);
}
});

reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$reaction,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Track.cljs$lang$type = true;

reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";

reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.ratom/Track");
});

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track(f,args);
var r = (function (){var G__5315 = ((function (t){
return (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});})(t))
;
var G__5316 = cljs.core.cst$kw$auto_DASH_run;
var G__5317 = true;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__5315,G__5316,G__5317) : reagent.ratom.make_reaction.call(null,G__5315,G__5316,G__5317));
})();
cljs.core.deref(r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5320 = arguments.length;
var i__4731__auto___5321 = (0);
while(true){
if((i__4731__auto___5321 < len__4730__auto___5320)){
args__4736__auto__.push((arguments[i__4731__auto___5321]));

var G__5322 = (i__4731__auto___5321 + (1));
i__4731__auto___5321 = G__5322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track(f,args);
});

reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.track.cljs$lang$applyTo = (function (seq5318){
var G__5319 = cljs.core.first(seq5318);
var seq5318__$1 = cljs.core.next(seq5318);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5319,seq5318__$1);
});

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5325 = arguments.length;
var i__4731__auto___5326 = (0);
while(true){
if((i__4731__auto___5326 < len__4730__auto___5325)){
args__4736__auto__.push((arguments[i__4731__auto___5326]));

var G__5327 = (i__4731__auto___5326 + (1));
i__4731__auto___5326 = G__5327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_(f,args);
});

reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq5323){
var G__5324 = cljs.core.first(seq5323);
var seq5323__$1 = cljs.core.next(seq5323);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5324,seq5323__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__5328 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__5329 = null;
reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__5329;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__5328;
}});

reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if((!((self__.watches == null)))){
return reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5331 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__5331) : f.call(null,G__5331));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5332 = a__$1._peek();
var G__5333 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5332,G__5333) : f.call(null,G__5332,G__5333));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5334 = a__$1._peek();
var G__5335 = x;
var G__5336 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__5334,G__5335,G__5336) : f.call(null,G__5334,G__5335,G__5336));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5722__auto__ = self__.reaction;
if((temp__5722__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5722__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5722__auto__,oldstate,this$__$1))
:((function (temp__5722__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5722__auto__,oldstate,this$__$1))
);
return reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5722__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ratom,cljs.core.cst$sym$path,cljs.core.with_meta(cljs.core.cst$sym$reaction,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.ratom/RCursor");
});

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__4131__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))," while attempting to get path: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__5724__auto__ = v.destroy;
if((temp__5724__auto__ == null)){
return null;
} else {
var f = temp__5724__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__5722__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5722__auto__ == null)){
return [];
} else {
var c = temp__5722__auto__;
return reagent.ratom.cached_reaction(cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reagent.ratom.dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4434__auto__.call(null,this$,f));
} else {
var m__4431__auto__ = (reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4431__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.ratom.run[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reagent.ratom.run["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__5340 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__5341 = null;
reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__5341;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__5340;
}});

reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__5342_5365 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__5343_5366 = null;
var count__5344_5367 = (0);
var i__5345_5368 = (0);
while(true){
if((i__5345_5368 < count__5344_5367)){
var w_5369 = chunk__5343_5366.cljs$core$IIndexed$_nth$arity$2(null,i__5345_5368);
cljs.core._add_watch(w_5369,this$,reagent.ratom.handle_reaction_change);


var G__5370 = seq__5342_5365;
var G__5371 = chunk__5343_5366;
var G__5372 = count__5344_5367;
var G__5373 = (i__5345_5368 + (1));
seq__5342_5365 = G__5370;
chunk__5343_5366 = G__5371;
count__5344_5367 = G__5372;
i__5345_5368 = G__5373;
continue;
} else {
var temp__5720__auto___5374 = cljs.core.seq(seq__5342_5365);
if(temp__5720__auto___5374){
var seq__5342_5375__$1 = temp__5720__auto___5374;
if(cljs.core.chunked_seq_QMARK_(seq__5342_5375__$1)){
var c__4550__auto___5376 = cljs.core.chunk_first(seq__5342_5375__$1);
var G__5377 = cljs.core.chunk_rest(seq__5342_5375__$1);
var G__5378 = c__4550__auto___5376;
var G__5379 = cljs.core.count(c__4550__auto___5376);
var G__5380 = (0);
seq__5342_5365 = G__5377;
chunk__5343_5366 = G__5378;
count__5344_5367 = G__5379;
i__5345_5368 = G__5380;
continue;
} else {
var w_5381 = cljs.core.first(seq__5342_5375__$1);
cljs.core._add_watch(w_5381,this$,reagent.ratom.handle_reaction_change);


var G__5382 = cljs.core.next(seq__5342_5375__$1);
var G__5383 = null;
var G__5384 = (0);
var G__5385 = (0);
seq__5342_5365 = G__5382;
chunk__5343_5366 = G__5383;
count__5344_5367 = G__5384;
i__5345_5368 = G__5385;
continue;
}
} else {
}
}
break;
}

var seq__5346 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__5347 = null;
var count__5348 = (0);
var i__5349 = (0);
while(true){
if((i__5349 < count__5348)){
var w = chunk__5347.cljs$core$IIndexed$_nth$arity$2(null,i__5349);
cljs.core._remove_watch(w,this$);


var G__5386 = seq__5346;
var G__5387 = chunk__5347;
var G__5388 = count__5348;
var G__5389 = (i__5349 + (1));
seq__5346 = G__5386;
chunk__5347 = G__5387;
count__5348 = G__5388;
i__5349 = G__5389;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5346);
if(temp__5720__auto__){
var seq__5346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5346__$1);
var G__5390 = cljs.core.chunk_rest(seq__5346__$1);
var G__5391 = c__4550__auto__;
var G__5392 = cljs.core.count(c__4550__auto__);
var G__5393 = (0);
seq__5346 = G__5390;
chunk__5347 = G__5391;
count__5348 = G__5392;
i__5349 = G__5393;
continue;
} else {
var w = cljs.core.first(seq__5346__$1);
cljs.core._remove_watch(w,this$);


var G__5394 = cljs.core.next(seq__5346__$1);
var G__5395 = null;
var G__5396 = (0);
var G__5397 = (0);
seq__5346 = G__5394;
chunk__5347 = G__5395;
count__5348 = G__5396;
i__5349 = G__5397;
continue;
}
} else {
return null;
}
}
break;
}
});

reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return reagent.ratom.deref_capture(f__$1,this$);
}catch (e5350){var e = e5350;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

reagent.ratom.Reaction.prototype._set_opts = (function (p__5351){
var self__ = this;
var map__5352 = p__5351;
var map__5352__$1 = (((((!((map__5352 == null))))?(((((map__5352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5352):map__5352);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5352__$1,cljs.core.cst$kw$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5352__$1,cljs.core.cst$kw$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5352__$1,cljs.core.cst$kw$on_DASH_dispose);
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5352__$1,cljs.core.cst$kw$no_DASH_cache);
var this$ = this;
if((!((auto_run__$1 == null)))){
this$.auto_run = auto_run__$1;
} else {
}

if((!((on_set == null)))){
this$.on_set = on_set;
} else {
}

if((!((on_dispose == null)))){
this$.on_dispose = on_dispose;
} else {
}

if((!((no_cache == null)))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__5354_5398 = cljs.core.seq(cljs.core.set(wg));
var chunk__5355_5399 = null;
var count__5356_5400 = (0);
var i__5357_5401 = (0);
while(true){
if((i__5357_5401 < count__5356_5400)){
var w_5402 = chunk__5355_5399.cljs$core$IIndexed$_nth$arity$2(null,i__5357_5401);
cljs.core._remove_watch(w_5402,this$__$1);


var G__5403 = seq__5354_5398;
var G__5404 = chunk__5355_5399;
var G__5405 = count__5356_5400;
var G__5406 = (i__5357_5401 + (1));
seq__5354_5398 = G__5403;
chunk__5355_5399 = G__5404;
count__5356_5400 = G__5405;
i__5357_5401 = G__5406;
continue;
} else {
var temp__5720__auto___5407 = cljs.core.seq(seq__5354_5398);
if(temp__5720__auto___5407){
var seq__5354_5408__$1 = temp__5720__auto___5407;
if(cljs.core.chunked_seq_QMARK_(seq__5354_5408__$1)){
var c__4550__auto___5409 = cljs.core.chunk_first(seq__5354_5408__$1);
var G__5410 = cljs.core.chunk_rest(seq__5354_5408__$1);
var G__5411 = c__4550__auto___5409;
var G__5412 = cljs.core.count(c__4550__auto___5409);
var G__5413 = (0);
seq__5354_5398 = G__5410;
chunk__5355_5399 = G__5411;
count__5356_5400 = G__5412;
i__5357_5401 = G__5413;
continue;
} else {
var w_5414 = cljs.core.first(seq__5354_5408__$1);
cljs.core._remove_watch(w_5414,this$__$1);


var G__5415 = cljs.core.next(seq__5354_5408__$1);
var G__5416 = null;
var G__5417 = (0);
var G__5418 = (0);
seq__5354_5398 = G__5415;
chunk__5355_5399 = G__5416;
count__5356_5400 = G__5417;
i__5357_5401 = G__5418;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5724__auto__ = this$__$1.on_dispose_arr;
if((temp__5724__auto__ == null)){
return null;
} else {
var a = temp__5724__auto__;
var n__4607__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4607__auto__)){
var fexpr__5358_5419 = (a[i]);
(fexpr__5358_5419.cljs$core$IFn$_invoke$arity$1 ? fexpr__5358_5419.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__5358_5419.call(null,this$__$1));

var G__5420 = (i + (1));
i = G__5420;
continue;
} else {
return null;
}
break;
}
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5722__auto__ = this$__$1.on_dispose_arr;
if((temp__5722__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5722__auto__;
return a.push(f__$1);
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5359 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__5359) : f__$1.call(null,G__5359));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5360 = a__$1._peek_at();
var G__5361 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__5360,G__5361) : f__$1.call(null,G__5360,G__5361));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__5362 = a__$1._peek_at();
var G__5363 = x;
var G__5364 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__5362,G__5363,G__5364) : f__$1.call(null,G__5362,G__5363,G__5364));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5724__auto___5421 = self__.caught;
if((temp__5724__auto___5421 == null)){
} else {
var e_5422 = temp__5724__auto___5421;
throw e_5422;
}

var non_reactive_5423 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_5423){
reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_5423) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_5424 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_5424,self__.state)))){
} else {
reagent.ratom.notify_w(this$__$1,oldstate_5424,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$dirty_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$nocache_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null)),cljs.core.with_meta(cljs.core.cst$sym$watching,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$auto_DASH_run,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$caught,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.ratom/Reaction");
});

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5430 = arguments.length;
var i__4731__auto___5431 = (0);
while(true){
if((i__4731__auto___5431 < len__4730__auto___5430)){
args__4736__auto__.push((arguments[i__4731__auto___5431]));

var G__5432 = (i__4731__auto___5431 + (1));
i__4731__auto___5431 = G__5432;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__5427){
var map__5428 = p__5427;
var map__5428__$1 = (((((!((map__5428 == null))))?(((((map__5428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5428):map__5428);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5428__$1,cljs.core.cst$kw$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5428__$1,cljs.core.cst$kw$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5428__$1,cljs.core.cst$kw$on_DASH_dispose);
var reaction = reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$auto_DASH_run,auto_run,cljs.core.cst$kw$on_DASH_set,on_set,cljs.core.cst$kw$on_DASH_dispose,on_dispose], null));

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq5425){
var G__5426 = cljs.core.first(seq5425);
var seq5425__$1 = cljs.core.next(seq5425);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5426,seq5425__$1);
});

reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

goog.object.set(obj,key,r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = ({});
var res = reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((!((self__.watches == null)))){
reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$callback,cljs.core.with_meta(cljs.core.cst$sym$changed,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.ratom/Wrapper");
});

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper(value,reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});