// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.mapper');
goog.require('cljs.core');
zframes.mapper.operand = (function zframes$mapper$operand(ex){
return (function (e){
if(cljs.core.coll_QMARK_.call(null,ex)){
return cljs.core.get_in.call(null,e,ex);
} else {
if((ex instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,e,ex);
} else {
return ex;
}
}
});
});
zframes.mapper.cmp = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"=","=",1152933628),cljs.core._EQ_,new cljs.core.Keyword(null,"<","<",-646864291),cljs.core._LT_,new cljs.core.Keyword(null,">",">",-555517146),cljs.core._GT_,new cljs.core.Keyword(null,"<=","<=",-395636158),cljs.core._LT__EQ_,new cljs.core.Keyword(null,">=",">=",-623615505),cljs.core._GT__EQ_], null);
zframes.mapper.pred = (function zframes$mapper$pred(p__25372){
var vec__25373 = p__25372;
var op = cljs.core.nth.call(null,vec__25373,(0),null);
var l = cljs.core.nth.call(null,vec__25373,(1),null);
var r = cljs.core.nth.call(null,vec__25373,(2),null);
return ((function (vec__25373,op,l,r){
return (function (p1__25371_SHARP_){
return cljs.core.get.call(null,zframes.mapper.cmp,op).call(null,zframes.mapper.operand.call(null,l).call(null,p1__25371_SHARP_),zframes.mapper.operand.call(null,r).call(null,p1__25371_SHARP_));
});
;})(vec__25373,op,l,r))
});
zframes.mapper.comp_expr = (function zframes$mapper$comp_expr(expr){
return (function (coll){
return cljs.core.filterv.call(null,zframes.mapper.pred.call(null,expr),coll);
});
});
zframes.mapper.and_expr = (function zframes$mapper$and_expr(p__25378){
var vec__25379 = p__25378;
var seq__25380 = cljs.core.seq.call(null,vec__25379);
var first__25381 = cljs.core.first.call(null,seq__25380);
var seq__25380__$1 = cljs.core.next.call(null,seq__25380);
var op = first__25381;
var exprs = seq__25380__$1;
return ((function (vec__25379,seq__25380,first__25381,seq__25380__$1,op,exprs){
return (function (coll){
return cljs.core.reduce.call(null,((function (vec__25379,seq__25380,first__25381,seq__25380__$1,op,exprs){
return (function (p1__25377_SHARP_,p2__25376_SHARP_){
return p2__25376_SHARP_.call(null,p1__25377_SHARP_);
});})(vec__25379,seq__25380,first__25381,seq__25380__$1,op,exprs))
,coll,cljs.core.map.call(null,zframes.mapper.comp_expr,exprs));
});
;})(vec__25379,seq__25380,first__25381,seq__25380__$1,op,exprs))
});
zframes.mapper.or_expr = (function zframes$mapper$or_expr(p__25384){
var vec__25385 = p__25384;
var seq__25386 = cljs.core.seq.call(null,vec__25385);
var first__25387 = cljs.core.first.call(null,seq__25386);
var seq__25386__$1 = cljs.core.next.call(null,seq__25386);
var op = first__25387;
var exprs = seq__25386__$1;
return ((function (vec__25385,seq__25386,first__25387,seq__25386__$1,op,exprs){
return (function (coll){
return cljs.core.reduce.call(null,((function (vec__25385,seq__25386,first__25387,seq__25386__$1,op,exprs){
return (function (p1__25382_SHARP_,p2__25383_SHARP_){
return cljs.core.concat.call(null,p1__25382_SHARP_,p2__25383_SHARP_.call(null,coll));
});})(vec__25385,seq__25386,first__25387,seq__25386__$1,op,exprs))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,zframes.mapper.comp_expr,exprs));
});
;})(vec__25385,seq__25386,first__25387,seq__25386__$1,op,exprs))
});
zframes.mapper.not_expr = (function zframes$mapper$not_expr(p__25389){
var vec__25390 = p__25389;
var op = cljs.core.nth.call(null,vec__25390,(0),null);
var l = cljs.core.nth.call(null,vec__25390,(1),null);
return ((function (vec__25390,op,l){
return (function (coll){
return cljs.core.filter.call(null,((function (vec__25390,op,l){
return (function (p1__25388_SHARP_){
return cljs.core.not.call(null,zframes.mapper.operand.call(null,l).call(null,p1__25388_SHARP_));
});})(vec__25390,op,l))
,coll);
});
;})(vec__25390,op,l))
});
zframes.mapper.contains_predicate = (function zframes$mapper$contains_predicate(p__25394){
var vec__25395 = p__25394;
var _ = cljs.core.nth.call(null,vec__25395,(0),null);
var l = cljs.core.nth.call(null,vec__25395,(1),null);
var r = cljs.core.nth.call(null,vec__25395,(2),null);
return ((function (vec__25395,_,l,r){
return (function (p1__25393_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,r),zframes.mapper.operand.call(null,l).call(null,p1__25393_SHARP_));
});
;})(vec__25395,_,l,r))
});
zframes.mapper.in_expr = (function zframes$mapper$in_expr(args){
return (function (coll){
return cljs.core.filter.call(null,zframes.mapper.contains_predicate.call(null,args),coll);
});
});
zframes.mapper.not_in_expr = (function zframes$mapper$not_in_expr(args){
return (function (coll){
return cljs.core.remove.call(null,zframes.mapper.contains_predicate.call(null,args),coll);
});
});
zframes.mapper.query = (function zframes$mapper$query(m,q){
var G__25398 = cljs.core.first.call(null,q);
var G__25398__$1 = (((G__25398 instanceof cljs.core.Keyword))?G__25398.fqn:null);
switch (G__25398__$1) {
case "and":
return zframes.mapper.and_expr.call(null,q).call(null,m);

break;
case "or":
return zframes.mapper.or_expr.call(null,q).call(null,m);

break;
case "not":
return zframes.mapper.not_expr.call(null,q).call(null,m);

break;
case "in":
return zframes.mapper.in_expr.call(null,q).call(null,m);

break;
case "not-in":
return zframes.mapper.not_in_expr.call(null,q).call(null,m);

break;
default:
return zframes.mapper.comp_expr.call(null,q).call(null,m);

}
});
zframes.mapper.indexof = (function zframes$mapper$indexof(x,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__25401_SHARP_,p2__25400_SHARP_){
if(cljs.core._EQ_.call(null,p2__25400_SHARP_,x)){
return p1__25401_SHARP_;
} else {
return null;
}
}),coll));
});
zframes.mapper.find_idx = (function zframes$mapper$find_idx(m,expr){
return zframes.mapper.indexof.call(null,cljs.core.first.call(null,zframes.mapper.query.call(null,m,expr)),m);
});
zframes.mapper.getin = (function zframes$mapper$getin(m,path){
return cljs.core.reduce.call(null,(function (acc,p){
if(cljs.core.map_QMARK_.call(null,p)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p))){
if(cljs.core.vector_QMARK_.call(null,acc)){
return cljs.core.mapv.call(null,(function (p1__25402_SHARP_){
return zframes.mapper.export$.call(null,p1__25402_SHARP_,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p));
}),acc);
} else {
return zframes.mapper.export$.call(null,acc,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p));
}
} else {
var res = cljs.core.vec.call(null,zframes.mapper.query.call(null,acc,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(p)));
if(cljs.core.empty_QMARK_.call(null,res)){
return new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(p);
} else {
return res;
}
}
} else {
if(((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"#","#",-275793773))) && (cljs.core.vector_QMARK_.call(null,acc)))){
return acc;
} else {
if(((cljs.core.vector_QMARK_.call(null,acc)) && ((p instanceof cljs.core.Keyword)))){
return cljs.core.mapv.call(null,p,acc);
} else {
return cljs.core.get.call(null,acc,p);
}
}
}
}),m,path);
});
/**
 * efficient deep merge
 */
zframes.mapper.deep_merge = (function zframes$mapper$deep_merge(a,b){
var G__25409 = b;
var vec__25410 = G__25409;
var seq__25411 = cljs.core.seq.call(null,vec__25410);
var first__25412 = cljs.core.first.call(null,seq__25411);
var seq__25411__$1 = cljs.core.next.call(null,seq__25411);
var vec__25413 = first__25412;
var k = cljs.core.nth.call(null,vec__25413,(0),null);
var v = cljs.core.nth.call(null,vec__25413,(1),null);
var i = vec__25413;
var ks = seq__25411__$1;
var acc = a;
var G__25409__$1 = G__25409;
var acc__$1 = acc;
while(true){
var vec__25416 = G__25409__$1;
var seq__25417 = cljs.core.seq.call(null,vec__25416);
var first__25418 = cljs.core.first.call(null,seq__25417);
var seq__25417__$1 = cljs.core.next.call(null,seq__25417);
var vec__25419 = first__25418;
var k__$1 = cljs.core.nth.call(null,vec__25419,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__25419,(1),null);
var i__$1 = vec__25419;
var ks__$1 = seq__25417__$1;
var acc__$2 = acc__$1;
if((i__$1 == null)){
return acc__$2;
} else {
var av = cljs.core.get.call(null,a,k__$1);
if(cljs.core._EQ_.call(null,v__$1,av)){
var G__25422 = ks__$1;
var G__25423 = acc__$2;
G__25409__$1 = G__25422;
acc__$1 = G__25423;
continue;
} else {
var G__25424 = ks__$1;
var G__25425 = ((((cljs.core.map_QMARK_.call(null,v__$1)) && (cljs.core.map_QMARK_.call(null,av))))?cljs.core.assoc.call(null,acc__$2,k__$1,zframes.mapper.deep_merge.call(null,av,v__$1)):cljs.core.assoc.call(null,acc__$2,k__$1,v__$1));
G__25409__$1 = G__25424;
acc__$1 = G__25425;
continue;
}
}
break;
}
});
zframes.mapper.setin = (function zframes$mapper$setin(m,p__25426,value){
var vec__25427 = p__25426;
var seq__25428 = cljs.core.seq.call(null,vec__25427);
var first__25429 = cljs.core.first.call(null,seq__25428);
var seq__25428__$1 = cljs.core.next.call(null,seq__25428);
var k = first__25429;
var ks = seq__25428__$1;
var path = vec__25427;
var v = ((ks)?((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"#","#",-275793773),cljs.core.first.call(null,ks))) && (cljs.core.vector_QMARK_.call(null,value))))?cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__25427,seq__25428,first__25429,seq__25428__$1,k,ks,path){
return (function (x){
return zframes.mapper.setin.call(null,null,cljs.core.rest.call(null,ks),x);
});})(vec__25427,seq__25428,first__25429,seq__25428__$1,k,ks,path))
,value)):((cljs.core.map_QMARK_.call(null,k))?(cljs.core.truth_(new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k))?zframes.mapper.setin.call(null,zframes.mapper.query.call(null,m,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k)),ks,value):null
):zframes.mapper.setin.call(null,cljs.core.get.call(null,m,k),ks,value))):(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(k);
if(cljs.core.truth_(temp__5718__auto__)){
var submap = temp__5718__auto__;
return zframes.mapper.import$.call(null,value,submap);
} else {
return value;
}
})());
if(cljs.core.integer_QMARK_.call(null,k)){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,k,null));
}
})(),k,v);
} else {
if(cljs.core.map_QMARK_.call(null,k)){
var set = new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(k);
var v__$1 = ((cljs.core.vector_QMARK_.call(null,v))?cljs.core.mapv.call(null,((function (set,v,vec__25427,seq__25428,first__25429,seq__25428__$1,k,ks,path){
return (function (x){
return zframes.mapper.deep_merge.call(null,set,x);
});})(set,v,vec__25427,seq__25428,first__25429,seq__25428__$1,k,ks,path))
,v):zframes.mapper.deep_merge.call(null,set,v));
var should_collection = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k);
var idx = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k);
if(cljs.core.truth_(temp__5720__auto__)){
var getter = temp__5720__auto__;
return zframes.mapper.find_idx.call(null,m,getter);
} else {
return null;
}
})();
if(cljs.core.truth_(should_collection)){
if(cljs.core.truth_(idx)){
if(cljs.core.vector_QMARK_.call(null,v__$1)){
return cljs.core.assoc.call(null,m,idx,cljs.core.first.call(null,v__$1));
} else {
return cljs.core.assoc.call(null,m,idx,v__$1);
}
} else {
if(cljs.core.vector_QMARK_.call(null,v__$1)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v__$1));
} else {
return cljs.core.conj.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v__$1);
}
}
} else {
return v__$1;
}
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,v], null))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,m,v));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null))){
return v;
} else {
if(((cljs.core.vector_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"#","#",-275793773),k)))){
return cljs.core.conj.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v);
} else {
return cljs.core.assoc.call(null,m,k,v);

}
}
}
}
}
});
zframes.mapper.import$ = (function zframes$mapper$import(d,m){
return cljs.core.reduce.call(null,(function (acc,p__25430){
var vec__25431 = p__25430;
var t = cljs.core.nth.call(null,vec__25431,(0),null);
var f = cljs.core.nth.call(null,vec__25431,(1),null);
var data = zframes.mapper.getin.call(null,d,f);
if((!((data == null)))){
return zframes.mapper.setin.call(null,acc,t,data);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
zframes.mapper.export$ = (function zframes$mapper$export(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25445 = arguments.length;
var i__4731__auto___25446 = (0);
while(true){
if((i__4731__auto___25446 < len__4730__auto___25445)){
args__4736__auto__.push((arguments[i__4731__auto___25446]));

var G__25447 = (i__4731__auto___25446 + (1));
i__4731__auto___25446 = G__25447;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zframes.mapper.export$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zframes.mapper.export$.cljs$core$IFn$_invoke$arity$variadic = (function (d,m,p__25437){
var vec__25438 = p__25437;
var default$ = cljs.core.nth.call(null,vec__25438,(0),null);
return cljs.core.reduce.call(null,((function (vec__25438,default$){
return (function (acc,p__25441){
var vec__25442 = p__25441;
var t = cljs.core.nth.call(null,vec__25442,(0),null);
var f = cljs.core.nth.call(null,vec__25442,(1),null);
var data = zframes.mapper.getin.call(null,d,t);
if((!((data == null)))){
return zframes.mapper.setin.call(null,acc,f,data);
} else {
return acc;
}
});})(vec__25438,default$))
,(function (){var or__4131__auto__ = default$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),m);
});

zframes.mapper.export$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zframes.mapper.export$.cljs$lang$applyTo = (function (seq25434){
var G__25435 = cljs.core.first.call(null,seq25434);
var seq25434__$1 = cljs.core.next.call(null,seq25434);
var G__25436 = cljs.core.first.call(null,seq25434__$1);
var seq25434__$2 = cljs.core.next.call(null,seq25434__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25435,G__25436,seq25434__$2);
});


//# sourceMappingURL=mapper.js.map
