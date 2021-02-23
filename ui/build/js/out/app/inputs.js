// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.inputs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
app.inputs.text_input = (function app$inputs$text_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12082 = arguments.length;
var i__4731__auto___12083 = (0);
while(true){
if((i__4731__auto___12083 < len__4730__auto___12082)){
args__4736__auto__.push((arguments[i__4731__auto___12083]));

var G__12084 = (i__4731__auto___12083 + (1));
i__4731__auto___12083 = G__12084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__12076){
var vec__12077 = p__12076;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12077,(0),null);
var node = (function (){var G__12080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12080) : re_frame.core.subscribe.call(null,G__12080));
})();
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$on_DASH_change,((function (node,vec__12077,attrs){
return (function (p1__12072_SHARP_){
var G__12081 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,p1__12072_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12081) : re_frame.core.dispatch.call(null,G__12081));
});})(node,vec__12077,attrs))
);
return ((function (node,attrs__$1,vec__12077,attrs){
return (function() { 
var G__12085__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$value,v),cljs.core.cst$kw$class,((function (_STAR_node,v,errs,node,attrs__$1,vec__12077,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "form-control";
}
})()),(cljs.core.truth_(errs)?" is-invalid":null)].join('');
});})(_STAR_node,v,errs,node,attrs__$1,vec__12077,attrs))
)], null);
};
var G__12085 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12086__i = 0, G__12086__a = new Array(arguments.length -  0);
while (G__12086__i < G__12086__a.length) {G__12086__a[G__12086__i] = arguments[G__12086__i + 0]; ++G__12086__i;}
  _ = new cljs.core.IndexedSeq(G__12086__a,0,null);
} 
return G__12085__delegate.call(this,_);};
G__12085.cljs$lang$maxFixedArity = 0;
G__12085.cljs$lang$applyTo = (function (arglist__12087){
var _ = cljs.core.seq(arglist__12087);
return G__12085__delegate(_);
});
G__12085.cljs$core$IFn$_invoke$arity$variadic = G__12085__delegate;
return G__12085;
})()
;
;})(node,attrs__$1,vec__12077,attrs))
});

app.inputs.text_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.text_input.cljs$lang$applyTo = (function (seq12073){
var G__12074 = cljs.core.first(seq12073);
var seq12073__$1 = cljs.core.next(seq12073);
var G__12075 = cljs.core.first(seq12073__$1);
var seq12073__$2 = cljs.core.next(seq12073__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12074,G__12075,seq12073__$2);
});

app.inputs.select = (function app$inputs$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12107 = arguments.length;
var i__4731__auto___12108 = (0);
while(true){
if((i__4731__auto___12108 < len__4730__auto___12107)){
args__4736__auto__.push((arguments[i__4731__auto___12108]));

var G__12109 = (i__4731__auto___12108 + (1));
i__4731__auto___12108 = G__12109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.select.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__12091){
var vec__12092 = p__12091;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12092,(0),null);
var node = cljs.core.deref((function (){var G__12095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12095) : re_frame.core.subscribe.call(null,G__12095));
})());
var on_change = ((function (node,vec__12092,attrs){
return (function (x){
var G__12096 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,x.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12096) : re_frame.core.dispatch.call(null,G__12096));
});})(node,vec__12092,attrs))
;
var map__12097 = node;
var map__12097__$1 = (((((!((map__12097 == null))))?(((((map__12097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12097):map__12097);
var value_current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12097__$1,cljs.core.cst$kw$value);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12097__$1,cljs.core.cst$kw$errors);
var value_current__$1 = (function (){var or__4131__auto__ = value_current;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$value,value_current__$1], null)], 0)),(function (){var iter__4523__auto__ = ((function (map__12097,map__12097__$1,value_current,errors,value_current__$1,node,on_change,vec__12092,attrs){
return (function app$inputs$iter__12099(s__12100){
return (new cljs.core.LazySeq(null,((function (map__12097,map__12097__$1,value_current,errors,value_current__$1,node,on_change,vec__12092,attrs){
return (function (){
var s__12100__$1 = s__12100;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__12100__$1);
if(temp__5720__auto__){
var s__12100__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12100__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__12100__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__12102 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__12101 = (0);
while(true){
if((i__12101 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__12101);
var map__12103 = item;
var map__12103__$1 = (((((!((map__12103 == null))))?(((((map__12103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12103):map__12103);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12103__$1,cljs.core.cst$kw$id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12103__$1,cljs.core.cst$kw$value);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12103__$1,cljs.core.cst$kw$display);
var key = (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
cljs.core.chunk_append(b__12102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$value,value], null),(function (){var or__4131__auto__ = display;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})()], null));

var G__12110 = (i__12101 + (1));
i__12101 = G__12110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12102),app$inputs$iter__12099(cljs.core.chunk_rest(s__12100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12102),null);
}
} else {
var item = cljs.core.first(s__12100__$2);
var map__12105 = item;
var map__12105__$1 = (((((!((map__12105 == null))))?(((((map__12105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12105):map__12105);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12105__$1,cljs.core.cst$kw$id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12105__$1,cljs.core.cst$kw$value);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12105__$1,cljs.core.cst$kw$display);
var key = (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$value,value], null),(function (){var or__4131__auto__ = display;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})()], null),app$inputs$iter__12099(cljs.core.rest(s__12100__$2)));
}
} else {
return null;
}
break;
}
});})(map__12097,map__12097__$1,value_current,errors,value_current__$1,node,on_change,vec__12092,attrs))
,null,null));
});})(map__12097,map__12097__$1,value_current,errors,value_current__$1,node,on_change,vec__12092,attrs))
;
return iter__4523__auto__(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(node));
})()], null);
});

app.inputs.select.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.select.cljs$lang$applyTo = (function (seq12088){
var G__12089 = cljs.core.first(seq12088);
var seq12088__$1 = cljs.core.next(seq12088);
var G__12090 = cljs.core.first(seq12088__$1);
var seq12088__$2 = cljs.core.next(seq12088__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12089,G__12090,seq12088__$2);
});

app.inputs.date_input = (function app$inputs$date_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12120 = arguments.length;
var i__4731__auto___12121 = (0);
while(true){
if((i__4731__auto___12121 < len__4730__auto___12120)){
args__4736__auto__.push((arguments[i__4731__auto___12121]));

var G__12122 = (i__4731__auto___12121 + (1));
i__4731__auto___12121 = G__12122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.date_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.date_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__12114){
var vec__12115 = p__12114;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12115,(0),null);
var node = (function (){var G__12118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12118) : re_frame.core.subscribe.call(null,G__12118));
})();
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$on_DASH_change,((function (node,state,vec__12115,attrs){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$value,e.target.value);

var G__12119 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12119) : re_frame.core.dispatch.call(null,G__12119));
});})(node,state,vec__12115,attrs))
);
return ((function (node,state,attrs__$1,vec__12115,attrs){
return (function() { 
var G__12123__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$default_DASH_value,v),cljs.core.cst$kw$value,v),cljs.core.cst$kw$type,"date"),cljs.core.cst$kw$class,((function (_STAR_node,v,errs,node,state,attrs__$1,vec__12115,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),(cljs.core.truth_(errs)?" is-invalid":null)].join('');
});})(_STAR_node,v,errs,node,state,attrs__$1,vec__12115,attrs))
)], null);
};
var G__12123 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12124__i = 0, G__12124__a = new Array(arguments.length -  0);
while (G__12124__i < G__12124__a.length) {G__12124__a[G__12124__i] = arguments[G__12124__i + 0]; ++G__12124__i;}
  _ = new cljs.core.IndexedSeq(G__12124__a,0,null);
} 
return G__12123__delegate.call(this,_);};
G__12123.cljs$lang$maxFixedArity = 0;
G__12123.cljs$lang$applyTo = (function (arglist__12125){
var _ = cljs.core.seq(arglist__12125);
return G__12123__delegate(_);
});
G__12123.cljs$core$IFn$_invoke$arity$variadic = G__12123__delegate;
return G__12123;
})()
;
;})(node,state,attrs__$1,vec__12115,attrs))
});

app.inputs.date_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.date_input.cljs$lang$applyTo = (function (seq12111){
var G__12112 = cljs.core.first(seq12111);
var seq12111__$1 = cljs.core.next(seq12111);
var G__12113 = cljs.core.first(seq12111__$1);
var seq12111__$2 = cljs.core.next(seq12111__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12112,G__12113,seq12111__$2);
});

