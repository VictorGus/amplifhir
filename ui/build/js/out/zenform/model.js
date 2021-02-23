// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zenform.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.validators');
goog.require('clojure.string');
goog.require('re_frame.core');
zenform.model._STAR_form = (function zenform$model$_STAR_form(p__9927,path,val){
var map__9928 = p__9927;
var map__9928__$1 = (((((!((map__9928 == null))))?(((((map__9928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9928):map__9928);
var sch = map__9928__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9928__$1,cljs.core.cst$kw$type);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9928__$1,cljs.core.cst$kw$default);
var v = (((!((val == null))))?val:((cljs.core.fn_QMARK_(default$))?(default$.cljs$core$IFn$_invoke$arity$0 ? default$.cljs$core$IFn$_invoke$arity$0() : default$.call(null)):default$
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sch,cljs.core.cst$kw$fields),cljs.core.cst$kw$value,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (v,map__9928,map__9928__$1,sch,type,default$){
return (function (acc,p__9930){
var vec__9931 = p__9930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9931,(0),null);
var _STAR_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9931,(1),null);
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__9934 = _STAR_sch;
var G__9935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__9936 = v__$1;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__9934,G__9935,G__9936) : zenform.model._STAR_form.call(null,G__9934,G__9935,G__9936));
})());
});})(v,map__9928,map__9928__$1,sch,type,default$))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(sch)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (v,map__9928,map__9928__$1,sch,type,default$){
return (function (i,_STAR_val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__9937 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(sch),cljs.core.cst$kw$value);
var G__9938 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__9939 = _STAR_val;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__9937,G__9938,G__9939) : zenform.model._STAR_form.call(null,G__9937,G__9938,G__9939));
})()], null);
});})(v,map__9928,map__9928__$1,sch,type,default$))
),v));
} else {
if(cljs.core.truth_(type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,v);
} else {
return v;

}
}
}
});
/**
 * create form model from schema and defaults
 */
zenform.model.form = (function zenform$model$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9946 = arguments.length;
var i__4731__auto___9947 = (0);
while(true){
if((i__4731__auto___9947 < len__4730__auto___9946)){
args__4736__auto__.push((arguments[i__4731__auto___9947]));

var G__9948 = (i__4731__auto___9947 + (1));
i__4731__auto___9947 = G__9948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model.form.cljs$core$IFn$_invoke$arity$variadic = (function (schema,p__9942){
var vec__9943 = p__9942;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943,(0),null);
return zenform.model._STAR_form(schema,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

zenform.model.form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model.form.cljs$lang$applyTo = (function (seq9940){
var G__9941 = cljs.core.first(seq9940);
var seq9940__$1 = cljs.core.next(seq9940);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9941,seq9940__$1);
});

zenform.model.get_node_path = (function zenform$model$get_node_path(pth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}),cljs.core.PersistentVector.EMPTY,pth);
});
zenform.model.get_value_path = (function zenform$model$get_value_path(pth){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(zenform.model.get_node_path(pth),cljs.core.cst$kw$value);
});
zenform.model._STAR_get_value = (function zenform$model$_STAR_get_value(form){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form));
} else {
return and__4120__auto__;
}
})())){
var res = cljs.core.filterv((function (p1__9949_SHARP_){
return (!((p1__9949_SHARP_ == null)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zenform.model._STAR_get_value,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form)))));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form))))){
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__9950){
var vec__9951 = p__9950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9951,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9951,(1),null);
var v = (zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1(node) : zenform.model._STAR_get_value.call(null,node));
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);

}
}
});
/**
 * Get value for specific path; if path not passed returns form value
 */
zenform.model.get_value = (function zenform$model$get_value(var_args){
var G__9955 = arguments.length;
switch (G__9955) {
case 2:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$2 = (function (form,path){
return zenform.model._STAR_get_value(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path)));
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$1 = (function (form){
return zenform.model._STAR_get_value(form);
});

zenform.model.get_value.cljs$lang$maxFixedArity = 2;

zenform.model.validate_node = (function zenform$model$validate_node(node,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (errs,p__9957){
var vec__9958 = p__9957;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9958,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9958,(1),null);
var temp__5718__auto__ = (function (){var G__9961 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,k,cljs.core.cst$kw$node,node], null),cfg], 0));
var G__9962 = v;
return (zenform.validators.validate.cljs$core$IFn$_invoke$arity$2 ? zenform.validators.validate.cljs$core$IFn$_invoke$arity$2(G__9961,G__9962) : zenform.validators.validate.call(null,G__9961,G__9962));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errs,k,msg);
} else {
return errs;
}
}),null,cljs.core.cst$kw$validators.cljs$core$IFn$_invoke$arity$1(node));
});
zenform.model.fire_on_change = (function zenform$model$fire_on_change(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9983 = arguments.length;
var i__4731__auto___9984 = (0);
while(true){
if((i__4731__auto___9984 < len__4730__auto___9983)){
args__4736__auto__.push((arguments[i__4731__auto___9984]));

var G__9985 = (i__4731__auto___9984 + (1));
i__4731__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,form,p__9967){
var vec__9968 = p__9967;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9968,(0),null);
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,(function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5720__auto___9986__$1 = cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5720__auto___9986__$1)){
var change_9987 = temp__5720__auto___9986__$1;
var ppth_9988 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path){
return (function (p1__9963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__9963_SHARP_);
});})(change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path))
,path));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (ppth_9988,change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path){
return (function zenform$model$iter__9971(s__9972){
return (new cljs.core.LazySeq(null,((function (ppth_9988,change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path){
return (function (){
var s__9972__$1 = s__9972;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__9972__$1);
if(temp__5720__auto____$2){
var s__9972__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__9972__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9972__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9974 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9973 = (0);
while(true){
if((i__9973 < size__4522__auto__)){
var vec__9975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9975,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9975,(1),null);
cljs.core.chunk_append(b__9974,(function (){var G__9978 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_9988,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9978) : re_frame.core.dispatch.call(null,G__9978));
})());

var G__9989 = (i__9973 + (1));
i__9973 = G__9989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9974),zenform$model$iter__9971(cljs.core.chunk_rest(s__9972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9974),null);
}
} else {
var vec__9979 = cljs.core.first(s__9972__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9979,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9979,(1),null);
return cljs.core.cons((function (){var G__9982 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_9988,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9982) : re_frame.core.dispatch.call(null,G__9982));
})(),zenform$model$iter__9971(cljs.core.rest(s__9972__$2)));
}
} else {
return null;
}
break;
}
});})(ppth_9988,change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path))
,null,null));
});})(ppth_9988,change_9987,temp__5720__auto___9986__$1,node,temp__5720__auto__,vec__9968,path))
;
return iter__4523__auto__(change_9987);
})());
} else {
}

if(cljs.core.map_QMARK_(node)){
return cljs.core.reduce_kv(((function (node,temp__5720__auto__,vec__9968,path){
return (function (path__$1,k,v){
zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic(form_path,form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,k)], 0));

return path__$1;
});})(node,temp__5720__auto__,vec__9968,path))
,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$value):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)))))?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node):null));
} else {
return null;
}
} else {
return null;
}
});

zenform.model.fire_on_change.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.model.fire_on_change.cljs$lang$applyTo = (function (seq9964){
var G__9965 = cljs.core.first(seq9964);
var seq9964__$1 = cljs.core.next(seq9964);
var G__9966 = cljs.core.first(seq9964__$1);
var seq9964__$2 = cljs.core.next(seq9964__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9965,G__9966,seq9964__$2);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_fire_DASH_on_DASH_change,(function (p__9990,p__9991){
var map__9992 = p__9990;
var map__9992__$1 = (((((!((map__9992 == null))))?(((((map__9992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9992):map__9992);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992__$1,cljs.core.cst$kw$db);
var vec__9993 = p__9991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993,(1),null);
zenform.model.fire_on_change(form_path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path));

return cljs.core.PersistentArrayMap.EMPTY;
}));
zenform.model._STAR_on_value_set = (function zenform$model$_STAR_on_value_set(node,form_path,path){
var v = zenform.model._STAR_get_value(node);
var errs = zenform.model.validate_node(node,v);
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (v,errs){
return (function zenform$model$_STAR_on_value_set_$_iter__9997(s__9998){
return (new cljs.core.LazySeq(null,((function (v,errs){
return (function (){
var s__9998__$1 = s__9998;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9998__$1);
if(temp__5720__auto__){
var s__9998__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9998__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9998__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10000 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9999 = (0);
while(true){
if((i__9999 < size__4522__auto__)){
var vec__10001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9999);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10001,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10001,(1),null);
cljs.core.chunk_append(b__10000,(function (){var G__10004 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__10004) : re_frame.core.dispatch.call(null,G__10004));
})());

var G__10010 = (i__9999 + (1));
i__9999 = G__10010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10000),zenform$model$_STAR_on_value_set_$_iter__9997(cljs.core.chunk_rest(s__9998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10000),null);
}
} else {
var vec__10005 = cljs.core.first(s__9998__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10005,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10005,(1),null);
return cljs.core.cons((function (){var G__10008 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__10008) : re_frame.core.dispatch.call(null,G__10008));
})(),zenform$model$_STAR_on_value_set_$_iter__9997(cljs.core.rest(s__9998__$2)));
}
} else {
return null;
}
break;
}
});})(v,errs))
,null,null));
});})(v,errs))
;
return iter__4523__auto__(cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(node));
})());

var G__10009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10009,cljs.core.cst$kw$errors,errs);
} else {
return G__10009;
}
});
zenform.model._STAR_on_value_set_loop = (function zenform$model$_STAR_on_value_set_loop(form,form_path,path){
var form__$1 = form;
var path__$1 = path;
while(true){
if((path__$1 == null)){
return zenform.model._STAR_on_value_set(form__$1,form_path,path__$1);
} else {
var G__10012 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form__$1,zenform.model.get_node_path(path__$1),((function (form__$1,path__$1){
return (function (p1__10011_SHARP_){
return zenform.model._STAR_on_value_set(p1__10011_SHARP_,form_path,path__$1);
});})(form__$1,path__$1))
);
var G__10013 = cljs.core.butlast(path__$1);
form__$1 = G__10012;
path__$1 = G__10013;
continue;
}
break;
}
});
zenform.model._STAR_set_value = (function zenform$model$_STAR_set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10023 = arguments.length;
var i__4731__auto___10024 = (0);
while(true){
if((i__4731__auto___10024 < len__4730__auto___10023)){
args__4736__auto__.push((arguments[i__4731__auto___10024]));

var G__10025 = (i__4731__auto___10024 + (1));
i__4731__auto___10024 = G__10025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__10019){
var vec__10020 = p__10019;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10020,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return form__$1;
});

zenform.model._STAR_set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model._STAR_set_value.cljs$lang$applyTo = (function (seq10014){
var G__10015 = cljs.core.first(seq10014);
var seq10014__$1 = cljs.core.next(seq10014);
var G__10016 = cljs.core.first(seq10014__$1);
var seq10014__$2 = cljs.core.next(seq10014__$1);
var G__10017 = cljs.core.first(seq10014__$2);
var seq10014__$3 = cljs.core.next(seq10014__$2);
var G__10018 = cljs.core.first(seq10014__$3);
var seq10014__$4 = cljs.core.next(seq10014__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10015,G__10016,G__10017,G__10018,seq10014__$4);
});

/**
 * Put value for specific path; run validations
 */
zenform.model.set_value = (function zenform$model$set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10035 = arguments.length;
var i__4731__auto___10036 = (0);
while(true){
if((i__4731__auto___10036 < len__4730__auto___10035)){
args__4736__auto__.push((arguments[i__4731__auto___10036]));

var G__10037 = (i__4731__auto___10036 + (1));
i__4731__auto___10036 = G__10037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__10031){
var vec__10032 = p__10031;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10032,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form__$1,form_path,path,value__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)),form_path,path);
});

zenform.model.set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model.set_value.cljs$lang$applyTo = (function (seq10026){
var G__10027 = cljs.core.first(seq10026);
var seq10026__$1 = cljs.core.next(seq10026);
var G__10028 = cljs.core.first(seq10026__$1);
var seq10026__$2 = cljs.core.next(seq10026__$1);
var G__10029 = cljs.core.first(seq10026__$2);
var seq10026__$3 = cljs.core.next(seq10026__$2);
var G__10030 = cljs.core.first(seq10026__$3);
var seq10026__$4 = cljs.core.next(seq10026__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10027,G__10028,G__10029,G__10030,seq10026__$4);
});

/**
 * Return raw form value
 */
zenform.model.raw_value = (function zenform$model$raw_value(v){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),v);
});
zenform.model.aggregate_errors = (function zenform$model$aggregate_errors(form_value,p__10038,node_index){
var map__10039 = p__10038;
var map__10039__$1 = (((((!((map__10039 == null))))?(((((map__10039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10039):map__10039);
var node = map__10039__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,cljs.core.cst$kw$value);

return cljs.core.reduce_kv(((function (map__10039,map__10039__$1,node,node_value){
return (function (acc,idx,child_node){
var node_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_index,idx);
var errors = (zenform.model.eval_errors.cljs$core$IFn$_invoke$arity$3 ? zenform.model.eval_errors.cljs$core$IFn$_invoke$arity$3(form_value,child_node,node_path) : zenform.model.eval_errors.call(null,form_value,child_node,node_path));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,errors], 0));
});})(map__10039,map__10039__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_errors = (function zenform$model$eval_errors(form_value,p__10041,node_index){
var map__10042 = p__10041;
var map__10042__$1 = (((((!((map__10042 == null))))?(((((map__10042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10042):map__10042);
var node = map__10042__$1;
var node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,cljs.core.cst$kw$type);

var child_errors = (cljs.core.truth_((function (){var fexpr__10044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,null,cljs.core.cst$kw$collection,null], null), null);
return (fexpr__10044.cljs$core$IFn$_invoke$arity$1 ? fexpr__10044.cljs$core$IFn$_invoke$arity$1(node_type) : fexpr__10044.call(null,node_type));
})())?zenform.model.aggregate_errors(form_value,node,node_index):null);
var node_errors = zenform.model.validate_node(node,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_value,node_index));
var G__10045 = child_errors;
if(cljs.core.truth_(node_errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10045,node_index,node_errors);
} else {
return G__10045;
}
});
zenform.model.eval_form_node = (function zenform$model$eval_form_node(p__10046){
var map__10047 = p__10046;
var map__10047__$1 = (((((!((map__10047 == null))))?(((((map__10047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10047):map__10047);
var node = map__10047__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10047__$1,cljs.core.cst$kw$value);
return cljs.core.reduce_kv(((function (map__10047,map__10047__$1,node,node_value){
return (function (acc,field,child_node){
var evalled_node = (zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1(child_node) : zenform.model._STAR__STAR_eval_form.call(null,child_node));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,field,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__10047,map__10047__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_collection_node = (function zenform$model$eval_collection_node(p__10049){
var map__10050 = p__10049;
var map__10050__$1 = (((((!((map__10050 == null))))?(((((map__10050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10050):map__10050);
var node = map__10050__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10050__$1,cljs.core.cst$kw$value);
return cljs.core.reduce_kv(((function (map__10050,map__10050__$1,node,node_value){
return (function (acc,index,child_node){
var evalled_node = (zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1(child_node) : zenform.model._STAR__STAR_eval_form.call(null,child_node));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__10050,map__10050__$1,node,node_value))
,cljs.core.PersistentVector.EMPTY,node_value);
});
zenform.model.eval_node = (function zenform$model$eval_node(p__10052){
var map__10053 = p__10052;
var map__10053__$1 = (((((!((map__10053 == null))))?(((((map__10053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10053):map__10053);
var node = map__10053__$1;
var node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10053__$1,cljs.core.cst$kw$type);
var G__10055 = node_type;
var G__10055__$1 = (((G__10055 instanceof cljs.core.Keyword))?G__10055.fqn:null);
switch (G__10055__$1) {
case "form":
return zenform.model.eval_form_node(node);

break;
case "collection":
return zenform.model.eval_collection_node(node);

break;
default:
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);

}
});
zenform.model.inject_errors = (function zenform$model$inject_errors(errors,form){
return cljs.core.reduce_kv((function (acc,path,errs){
var node_path = zenform.model.get_node_path(path);
return cljs.core.assoc_in(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$errors),errs);
}),form,errors);
});
zenform.model._STAR__STAR_eval_form = (function zenform$model$_STAR__STAR_eval_form(form){

var value = zenform.model.eval_node(form);
var errors = zenform.model.eval_errors(value,form,cljs.core.PersistentVector.EMPTY);
var form__$1 = zenform.model.inject_errors(errors,form);
var G__10057 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$form,form__$1], null);
if(cljs.core.truth_(errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10057,cljs.core.cst$kw$errors,errors);
} else {
return G__10057;
}
});
zenform.model._STAR_eval_form = (function zenform$model$_STAR_eval_form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10083 = arguments.length;
var i__4731__auto___10084 = (0);
while(true){
if((i__4731__auto___10084 < len__4730__auto___10083)){
args__4736__auto__.push((arguments[i__4731__auto___10084]));

var G__10085 = (i__4731__auto___10084 + (1));
i__4731__auto___10084 = G__10085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic = (function (p__10060,p__10061){
var map__10062 = p__10060;
var map__10062__$1 = (((((!((map__10062 == null))))?(((((map__10062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10062):map__10062);
var node = map__10062__$1;
var tp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10062__$1,cljs.core.cst$kw$type);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10062__$1,cljs.core.cst$kw$value);
var vec__10063 = p__10061;
var pth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063,(0),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$collection)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form)))){
var map__10067 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__10062,map__10062__$1,node,tp,v,vec__10063,pth){
return (function (res,p__10068){
var vec__10069 = p__10068;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(1),null);
var pth__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = pth;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),idx);
var map__10072 = zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic(n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pth__$1], 0));
var map__10072__$1 = (((((!((map__10072 == null))))?(((((map__10072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10072):map__10072);
var eval_res = map__10072__$1;
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10072__$1,cljs.core.cst$kw$value);
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10072__$1,cljs.core.cst$kw$errors);
var ch_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10072__$1,cljs.core.cst$kw$form);
var res__$1 = ((cljs.core.empty_QMARK_(err))?res:cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$errors,((function (pth__$1,map__10072,map__10072__$1,eval_res,v__$1,err,ch_node,vec__10069,idx,n,map__10062,map__10062__$1,node,tp,v,vec__10063,pth){
return (function (es){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pth__$1,map__10072,map__10072__$1,eval_res,v__$1,err,ch_node,vec__10069,idx,n,map__10062,map__10062__$1,node,tp,v,vec__10063,pth){
return (function (es__$1,p__10074){
var vec__10075 = p__10074;
var err_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,(0),null);
var err_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(es__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),err_k),err_v);
});})(pth__$1,map__10072,map__10072__$1,eval_res,v__$1,err,ch_node,vec__10069,idx,n,map__10062,map__10062__$1,node,tp,v,vec__10063,pth))
,es,err);
});})(pth__$1,map__10072,map__10072__$1,eval_res,v__$1,err,ch_node,vec__10069,idx,n,map__10062,map__10062__$1,node,tp,v,vec__10063,pth))
));
var res__$2 = cljs.core.assoc_in(res__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$value,idx], null),ch_node);
var G__10078 = res__$2;
var G__10078__$1 = (((((!((v__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$collection))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__10078,cljs.core.cst$kw$value,cljs.core.conj,v__$1):G__10078);
if((((!((v__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form)))){
return cljs.core.assoc_in(G__10078__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,idx], null),v__$1);
} else {
return G__10078__$1;
}
});})(map__10062,map__10062__$1,node,tp,v,vec__10063,pth))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$form,node], null),v);
var map__10067__$1 = (((((!((map__10067 == null))))?(((((map__10067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10067):map__10067);
var res = map__10067__$1;
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10067__$1,cljs.core.cst$kw$value);
var errs = zenform.model.validate_node(node,v__$1);
var G__10080 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,((function (map__10067,map__10067__$1,res,v__$1,errs,map__10062,map__10062__$1,node,tp,v,vec__10063,pth){
return (function (x){
if(cljs.core.empty_QMARK_(x)){
return null;
} else {
return x;
}
});})(map__10067,map__10067__$1,res,v__$1,errs,map__10062,map__10062__$1,node,tp,v,vec__10063,pth))
);
var G__10080__$1 = (cljs.core.truth_(errs)?cljs.core.assoc_in(G__10080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),errs):G__10080);
if(cljs.core.truth_(errs)){
return cljs.core.assoc_in(G__10080__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$errors], null),errs);
} else {
return G__10080__$1;
}
} else {
var errs = zenform.model.validate_node(node,v);
var node__$1 = (function (){var G__10081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$touched,true);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10081,cljs.core.cst$kw$errors,errs);
} else {
return G__10081;
}
})();
var G__10082 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$form,node__$1], null);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10082,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,errs]));
} else {
return G__10082;
}
}
});

zenform.model._STAR_eval_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model._STAR_eval_form.cljs$lang$applyTo = (function (seq10058){
var G__10059 = cljs.core.first(seq10058);
var seq10058__$1 = cljs.core.next(seq10058);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10059,seq10058__$1);
});

zenform.model.eval_form = (function zenform$model$eval_form(form){
return zenform.model._STAR_eval_form(form);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_init,(function (db,p__10086){
var vec__10087 = p__10086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(1),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(3),null);
return cljs.core.assoc_in(db,form_path,zenform.model.form.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_value,(function (db,p__10090){
var vec__10091 = p__10090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__10091,_,form_path,path,v){
return (function (form){
return zenform.model.set_value(form,form_path,path,v);
});})(vec__10091,_,form_path,path,v))
);
}));
var G__10094_10100 = cljs.core.cst$kw$zf_SLASH_collection_DASH_indexes;
var G__10095_10101 = ((function (G__10094_10100){
return (function (db,p__10096){
var vec__10097 = p__10096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097,(2),null);
return cljs.core.keys(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path),zenform.model.get_node_path(path))));
});})(G__10094_10100))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__10094_10100,G__10095_10101) : re_frame.core.reg_sub.call(null,G__10094_10100,G__10095_10101));
var G__10102_10108 = cljs.core.cst$kw$zf_SLASH_node;
var G__10103_10109 = ((function (G__10102_10108){
return (function (db,p__10104){
var vec__10105 = p__10104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10105,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10105,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10105,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path),zenform.model.get_node_path(path));
});})(G__10102_10108))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__10102_10108,G__10103_10109) : re_frame.core.reg_sub.call(null,G__10102_10108,G__10103_10109));
var G__10110_10116 = cljs.core.cst$kw$zf_SLASH_form;
var G__10111_10117 = ((function (G__10110_10116){
return (function (db,p__10112){
var vec__10113 = p__10112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10113,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10113,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path);
});})(G__10110_10116))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__10110_10116,G__10111_10117) : re_frame.core.reg_sub.call(null,G__10110_10116,G__10111_10117));
var G__10118_10124 = cljs.core.cst$kw$zf_SLASH_get_DASH_value;
var G__10119_10125 = ((function (G__10118_10124){
return (function (db,p__10120){
var vec__10121 = p__10120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10121,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10121,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10121,(2),null);
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path);
if(cljs.core.truth_(path)){
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2(form,path);
} else {
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1(form);
}
});})(G__10118_10124))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__10118_10124,G__10119_10125) : re_frame.core.reg_sub.call(null,G__10118_10124,G__10119_10125));
zenform.model.add_collection_item = (function zenform$model$add_collection_item(form,form_path,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
var coll = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
var idx = ((cljs.core.empty_QMARK_(coll))?(0):(cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.key,coll)) + (1)));
var sch = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(node);
var v__$1 = zenform.model._STAR_form(sch,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form,form_path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),v__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)], 0)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path)),path);
} else {
return form;
}
});
zenform.model.remove_collection_item = (function zenform$model$remove_collection_item(form,path,idx){
var node_path = zenform.model.get_node_path(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$type)))){
return zenform.model._STAR_on_value_set_loop(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$value),cljs.core.dissoc,idx),node_path,path);
} else {
return form;
}
});
zenform.model.set_collection = (function zenform$model$set_collection(form,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
return zenform.model.set_value(form,path,zenform.model._STAR_form(node,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node));
} else {
return form;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_add_DASH_collection_DASH_item,(function (db,p__10126){
var vec__10127 = p__10126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__10127,_,form_path,path,v){
return (function (form){
return zenform.model.add_collection_item(form,form_path,path,v);
});})(vec__10127,_,form_path,path,v))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,(function (db,p__10130){
var vec__10131 = p__10130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10131,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10131,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10131,(2),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10131,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__10131,_,form_path,path,idx){
return (function (form){
return zenform.model.remove_collection_item(form,path,idx);
});})(vec__10131,_,form_path,path,idx))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_collection,(function (db,p__10134){
var vec__10135 = p__10134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__10135,_,form_path,path,v){
return (function (form){
return zenform.model.set_collection(form,path,v);
});})(vec__10135,_,form_path,path,v))
);
}));
var G__10138_10146 = cljs.core.cst$kw$zf_SLASH_collection;
var G__10139_10147 = ((function (G__10138_10146){
return (function (p__10141,_){
var vec__10142 = p__10141;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10142,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10142,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10142,(2),null);
var G__10145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__10145) : re_frame.core.subscribe.call(null,G__10145));
});})(G__10138_10146))
;
var G__10140_10148 = ((function (G__10138_10146,G__10139_10147){
return (function (node,_){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
});})(G__10138_10146,G__10139_10147))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__10138_10146,G__10139_10147,G__10140_10148) : re_frame.core.reg_sub.call(null,G__10138_10146,G__10139_10147,G__10140_10148));
zenform.model.get_full_path = (function zenform$model$get_full_path(form_path,path){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_update_DASH_node_DASH_schema,(function (p__10150,p__10151){
var map__10152 = p__10150;
var map__10152__$1 = (((((!((map__10152 == null))))?(((((map__10152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10152):map__10152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10152__$1,cljs.core.cst$kw$db);
var vec__10153 = p__10151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10153,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10153,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10153,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10153,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,zenform.model.get_full_path(form_path,path),((function (map__10152,map__10152__$1,db,vec__10153,_,form_path,path,value){
return (function (p1__10149_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10149_SHARP_,value], 0));
});})(map__10152,map__10152__$1,db,vec__10153,_,form_path,path,value))
)], null);
}));
