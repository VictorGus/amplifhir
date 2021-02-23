// Compiled by ClojureScript 1.10.520 {}
goog.provide('zenform.model');
goog.require('cljs.core');
goog.require('zenform.validators');
goog.require('clojure.string');
goog.require('re_frame.core');
zenform.model._STAR_form = (function zenform$model$_STAR_form(p__22817,path,val){
var map__22818 = p__22817;
var map__22818__$1 = (((((!((map__22818 == null))))?(((((map__22818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22818):map__22818);
var sch = map__22818__$1;
var type = cljs.core.get.call(null,map__22818__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var default$ = cljs.core.get.call(null,map__22818__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var v = (((!((val == null))))?val:((cljs.core.fn_QMARK_.call(null,default$))?default$.call(null):default$
));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),type)){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,sch,new cljs.core.Keyword(null,"fields","fields",-1932066230)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.reduce.call(null,((function (v,map__22818,map__22818__$1,sch,type,default$){
return (function (acc,p__22820){
var vec__22821 = p__22820;
var k = cljs.core.nth.call(null,vec__22821,(0),null);
var _STAR_sch = cljs.core.nth.call(null,vec__22821,(1),null);
var v__$1 = cljs.core.get.call(null,val,k);
return cljs.core.assoc.call(null,acc,k,zenform.model._STAR_form.call(null,_STAR_sch,cljs.core.conj.call(null,path,k),v__$1));
});})(v,map__22818,map__22818__$1,sch,type,default$))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(sch)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),type)){
return cljs.core.assoc.call(null,sch,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (v,map__22818,map__22818__$1,sch,type,default$){
return (function (i,_STAR_val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,zenform.model._STAR_form.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(sch),new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.conj.call(null,path,i),_STAR_val)], null);
});})(v,map__22818,map__22818__$1,sch,type,default$))
),v));
} else {
if(cljs.core.truth_(type)){
return cljs.core.assoc.call(null,sch,new cljs.core.Keyword(null,"value","value",305978217),v);
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
var len__4730__auto___22830 = arguments.length;
var i__4731__auto___22831 = (0);
while(true){
if((i__4731__auto___22831 < len__4730__auto___22830)){
args__4736__auto__.push((arguments[i__4731__auto___22831]));

var G__22832 = (i__4731__auto___22831 + (1));
i__4731__auto___22831 = G__22832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model.form.cljs$core$IFn$_invoke$arity$variadic = (function (schema,p__22826){
var vec__22827 = p__22826;
var value = cljs.core.nth.call(null,vec__22827,(0),null);
return zenform.model._STAR_form.call(null,schema,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

zenform.model.form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model.form.cljs$lang$applyTo = (function (seq22824){
var G__22825 = cljs.core.first.call(null,seq22824);
var seq22824__$1 = cljs.core.next.call(null,seq22824);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22825,seq22824__$1);
});

zenform.model.get_node_path = (function zenform$model$get_node_path(pth){
return cljs.core.reduce.call(null,(function (acc,x){
return cljs.core.conj.call(null,acc,new cljs.core.Keyword(null,"value","value",305978217),x);
}),cljs.core.PersistentVector.EMPTY,pth);
});
zenform.model.get_value_path = (function zenform$model$get_value_path(pth){
return cljs.core.conj.call(null,zenform.model.get_node_path.call(null,pth),new cljs.core.Keyword(null,"value","value",305978217));
});
zenform.model._STAR_get_value = (function zenform$model$_STAR_get_value(form){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(form));
} else {
return and__4120__auto__;
}
})())){
var res = cljs.core.filterv.call(null,(function (p1__22833_SHARP_){
return (!((p1__22833_SHARP_ == null)));
}),cljs.core.mapv.call(null,zenform.model._STAR_get_value,cljs.core.mapv.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form)))));
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(form))))){
var res = cljs.core.reduce.call(null,(function (acc,p__22834){
var vec__22835 = p__22834;
var k = cljs.core.nth.call(null,vec__22835,(0),null);
var node = cljs.core.nth.call(null,vec__22835,(1),null);
var v = zenform.model._STAR_get_value.call(null,node);
if((!((v == null)))){
return cljs.core.assoc.call(null,acc,k,v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form);

}
}
});
/**
 * Get value for specific path; if path not passed returns form value
 */
zenform.model.get_value = (function zenform$model$get_value(var_args){
var G__22839 = arguments.length;
switch (G__22839) {
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
return zenform.model._STAR_get_value.call(null,cljs.core.get_in.call(null,form,zenform.model.get_node_path.call(null,path)));
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$1 = (function (form){
return zenform.model._STAR_get_value.call(null,form);
});

zenform.model.get_value.cljs$lang$maxFixedArity = 2;

zenform.model.validate_node = (function zenform$model$validate_node(node,v){
return cljs.core.reduce.call(null,(function (errs,p__22841){
var vec__22842 = p__22841;
var k = cljs.core.nth.call(null,vec__22842,(0),null);
var cfg = cljs.core.nth.call(null,vec__22842,(1),null);
var temp__5718__auto__ = zenform.validators.validate.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),k,new cljs.core.Keyword(null,"node","node",581201198),node], null),cfg),v);
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return cljs.core.assoc.call(null,errs,k,msg);
} else {
return errs;
}
}),null,new cljs.core.Keyword(null,"validators","validators",-1973346672).cljs$core$IFn$_invoke$arity$1(node));
});
zenform.model.fire_on_change = (function zenform$model$fire_on_change(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22863 = arguments.length;
var i__4731__auto___22864 = (0);
while(true){
if((i__4731__auto___22864 < len__4730__auto___22863)){
args__4736__auto__.push((arguments[i__4731__auto___22864]));

var G__22865 = (i__4731__auto___22864 + (1));
i__4731__auto___22864 = G__22865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,form,p__22849){
var vec__22850 = p__22849;
var path = cljs.core.nth.call(null,vec__22850,(0),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,form,(function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5720__auto___22866__$1 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5720__auto___22866__$1)){
var change_22867 = temp__5720__auto___22866__$1;
var ppth_22868 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path){
return (function (p1__22845_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__22845_SHARP_);
});})(change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path))
,path));
cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (ppth_22868,change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path){
return (function zenform$model$iter__22853(s__22854){
return (new cljs.core.LazySeq(null,((function (ppth_22868,change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path){
return (function (){
var s__22854__$1 = s__22854;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__22854__$1);
if(temp__5720__auto____$2){
var s__22854__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22854__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22854__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22856 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22855 = (0);
while(true){
if((i__22855 < size__4522__auto__)){
var vec__22857 = cljs.core._nth.call(null,c__4521__auto__,i__22855);
var k = cljs.core.nth.call(null,vec__22857,(0),null);
var args = cljs.core.nth.call(null,vec__22857,(1),null);
cljs.core.chunk_append.call(null,b__22856,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_22868,args], null)));

var G__22869 = (i__22855 + (1));
i__22855 = G__22869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22856),zenform$model$iter__22853.call(null,cljs.core.chunk_rest.call(null,s__22854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22856),null);
}
} else {
var vec__22860 = cljs.core.first.call(null,s__22854__$2);
var k = cljs.core.nth.call(null,vec__22860,(0),null);
var args = cljs.core.nth.call(null,vec__22860,(1),null);
return cljs.core.cons.call(null,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_22868,args], null)),zenform$model$iter__22853.call(null,cljs.core.rest.call(null,s__22854__$2)));
}
} else {
return null;
}
break;
}
});})(ppth_22868,change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path))
,null,null));
});})(ppth_22868,change_22867,temp__5720__auto___22866__$1,node,temp__5720__auto__,vec__22850,path))
;
return iter__4523__auto__.call(null,change_22867);
})());
} else {
}

if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.reduce_kv.call(null,((function (node,temp__5720__auto__,vec__22850,path){
return (function (path__$1,k,v){
zenform.model.fire_on_change.call(null,form_path,form,cljs.core.conj.call(null,path__$1,k));

return path__$1;
});})(node,temp__5720__auto__,vec__22850,path))
,((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node)))))?cljs.core.conj.call(null,(function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"value","value",305978217)):null),((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node)))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node):null));
} else {
return null;
}
} else {
return null;
}
});

zenform.model.fire_on_change.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.model.fire_on_change.cljs$lang$applyTo = (function (seq22846){
var G__22847 = cljs.core.first.call(null,seq22846);
var seq22846__$1 = cljs.core.next.call(null,seq22846);
var G__22848 = cljs.core.first.call(null,seq22846__$1);
var seq22846__$2 = cljs.core.next.call(null,seq22846__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22847,G__22848,seq22846__$2);
});

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zf","fire-on-change","zf/fire-on-change",-183948674),(function (p__22870,p__22871){
var map__22872 = p__22870;
var map__22872__$1 = (((((!((map__22872 == null))))?(((((map__22872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var db = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22873 = p__22871;
var _ = cljs.core.nth.call(null,vec__22873,(0),null);
var form_path = cljs.core.nth.call(null,vec__22873,(1),null);
zenform.model.fire_on_change.call(null,form_path,cljs.core.get_in.call(null,db,form_path));

return cljs.core.PersistentArrayMap.EMPTY;
}));
zenform.model._STAR_on_value_set = (function zenform$model$_STAR_on_value_set(node,form_path,path){
var v = zenform.model._STAR_get_value.call(null,node);
var errs = zenform.model.validate_node.call(null,node,v);
cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (v,errs){
return (function zenform$model$_STAR_on_value_set_$_iter__22877(s__22878){
return (new cljs.core.LazySeq(null,((function (v,errs){
return (function (){
var s__22878__$1 = s__22878;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22878__$1);
if(temp__5720__auto__){
var s__22878__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22878__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22878__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22880 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22879 = (0);
while(true){
if((i__22879 < size__4522__auto__)){
var vec__22881 = cljs.core._nth.call(null,c__4521__auto__,i__22879);
var k = cljs.core.nth.call(null,vec__22881,(0),null);
var args = cljs.core.nth.call(null,vec__22881,(1),null);
cljs.core.chunk_append.call(null,b__22880,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null)));

var G__22888 = (i__22879 + (1));
i__22879 = G__22888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22880),zenform$model$_STAR_on_value_set_$_iter__22877.call(null,cljs.core.chunk_rest.call(null,s__22878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22880),null);
}
} else {
var vec__22884 = cljs.core.first.call(null,s__22878__$2);
var k = cljs.core.nth.call(null,vec__22884,(0),null);
var args = cljs.core.nth.call(null,vec__22884,(1),null);
return cljs.core.cons.call(null,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null)),zenform$model$_STAR_on_value_set_$_iter__22877.call(null,cljs.core.rest.call(null,s__22878__$2)));
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
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(node));
})());

var G__22887 = cljs.core.dissoc.call(null,node,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errs)){
return cljs.core.assoc.call(null,G__22887,new cljs.core.Keyword(null,"errors","errors",-908790718),errs);
} else {
return G__22887;
}
});
zenform.model._STAR_on_value_set_loop = (function zenform$model$_STAR_on_value_set_loop(form,form_path,path){
var form__$1 = form;
var path__$1 = path;
while(true){
if((path__$1 == null)){
return zenform.model._STAR_on_value_set.call(null,form__$1,form_path,path__$1);
} else {
var G__22890 = cljs.core.update_in.call(null,form__$1,zenform.model.get_node_path.call(null,path__$1),((function (form__$1,path__$1){
return (function (p1__22889_SHARP_){
return zenform.model._STAR_on_value_set.call(null,p1__22889_SHARP_,form_path,path__$1);
});})(form__$1,path__$1))
);
var G__22891 = cljs.core.butlast.call(null,path__$1);
form__$1 = G__22890;
path__$1 = G__22891;
continue;
}
break;
}
});
zenform.model._STAR_set_value = (function zenform$model$_STAR_set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22901 = arguments.length;
var i__4731__auto___22902 = (0);
while(true){
if((i__4731__auto___22902 < len__4730__auto___22901)){
args__4736__auto__.push((arguments[i__4731__auto___22902]));

var G__22903 = (i__4731__auto___22902 + (1));
i__4731__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__22897){
var vec__22898 = p__22897;
var type = cljs.core.nth.call(null,vec__22898,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_.call(null,value))))?null:value);
var form__$1 = cljs.core.assoc_in.call(null,form,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"collection","collection",-683361892)))?zenform.model.get_node_path.call(null,path):zenform.model.get_value_path.call(null,path)),value__$1);
return form__$1;
});

zenform.model._STAR_set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model._STAR_set_value.cljs$lang$applyTo = (function (seq22892){
var G__22893 = cljs.core.first.call(null,seq22892);
var seq22892__$1 = cljs.core.next.call(null,seq22892);
var G__22894 = cljs.core.first.call(null,seq22892__$1);
var seq22892__$2 = cljs.core.next.call(null,seq22892__$1);
var G__22895 = cljs.core.first.call(null,seq22892__$2);
var seq22892__$3 = cljs.core.next.call(null,seq22892__$2);
var G__22896 = cljs.core.first.call(null,seq22892__$3);
var seq22892__$4 = cljs.core.next.call(null,seq22892__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22893,G__22894,G__22895,G__22896,seq22892__$4);
});

/**
 * Put value for specific path; run validations
 */
zenform.model.set_value = (function zenform$model$set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22913 = arguments.length;
var i__4731__auto___22914 = (0);
while(true){
if((i__4731__auto___22914 < len__4730__auto___22913)){
args__4736__auto__.push((arguments[i__4731__auto___22914]));

var G__22915 = (i__4731__auto___22914 + (1));
i__4731__auto___22914 = G__22915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__22909){
var vec__22910 = p__22909;
var type = cljs.core.nth.call(null,vec__22910,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_.call(null,value))))?null:value);
var form__$1 = cljs.core.assoc_in.call(null,form,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"collection","collection",-683361892)))?zenform.model.get_node_path.call(null,path):zenform.model.get_value_path.call(null,path)),value__$1);
return zenform.model._STAR_on_value_set_loop.call(null,zenform.model._STAR_set_value.call(null,form__$1,form_path,path,value__$1,type),form_path,path);
});

zenform.model.set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model.set_value.cljs$lang$applyTo = (function (seq22904){
var G__22905 = cljs.core.first.call(null,seq22904);
var seq22904__$1 = cljs.core.next.call(null,seq22904);
var G__22906 = cljs.core.first.call(null,seq22904__$1);
var seq22904__$2 = cljs.core.next.call(null,seq22904__$1);
var G__22907 = cljs.core.first.call(null,seq22904__$2);
var seq22904__$3 = cljs.core.next.call(null,seq22904__$2);
var G__22908 = cljs.core.first.call(null,seq22904__$3);
var seq22904__$4 = cljs.core.next.call(null,seq22904__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22905,G__22906,G__22907,G__22908,seq22904__$4);
});

/**
 * Return raw form value
 */
zenform.model.raw_value = (function zenform$model$raw_value(v){
return clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),v);
});
zenform.model.aggregate_errors = (function zenform$model$aggregate_errors(form_value,p__22916,node_index){
var map__22917 = p__22916;
var map__22917__$1 = (((((!((map__22917 == null))))?(((((map__22917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22917):map__22917);
var node = map__22917__$1;
var node_value = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"value","value",305978217));

return cljs.core.reduce_kv.call(null,((function (map__22917,map__22917__$1,node,node_value){
return (function (acc,idx,child_node){
var node_path = cljs.core.conj.call(null,node_index,idx);
var errors = zenform.model.eval_errors.call(null,form_value,child_node,node_path);
return cljs.core.merge.call(null,acc,errors);
});})(map__22917,map__22917__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_errors = (function zenform$model$eval_errors(form_value,p__22919,node_index){
var map__22920 = p__22919;
var map__22920__$1 = (((((!((map__22920 == null))))?(((((map__22920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22920):map__22920);
var node = map__22920__$1;
var node_type = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"type","type",1174270348));

var child_errors = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),null,new cljs.core.Keyword(null,"collection","collection",-683361892),null], null), null).call(null,node_type))?zenform.model.aggregate_errors.call(null,form_value,node,node_index):null);
var node_errors = zenform.model.validate_node.call(null,node,cljs.core.get_in.call(null,form_value,node_index));
var G__22922 = child_errors;
if(cljs.core.truth_(node_errors)){
return cljs.core.assoc.call(null,G__22922,node_index,node_errors);
} else {
return G__22922;
}
});
zenform.model.eval_form_node = (function zenform$model$eval_form_node(p__22923){
var map__22924 = p__22923;
var map__22924__$1 = (((((!((map__22924 == null))))?(((((map__22924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22924):map__22924);
var node = map__22924__$1;
var node_value = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.reduce_kv.call(null,((function (map__22924,map__22924__$1,node,node_value){
return (function (acc,field,child_node){
var evalled_node = zenform.model._STAR__STAR_eval_form.call(null,child_node);
return cljs.core.assoc.call(null,acc,field,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__22924,map__22924__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_collection_node = (function zenform$model$eval_collection_node(p__22926){
var map__22927 = p__22926;
var map__22927__$1 = (((((!((map__22927 == null))))?(((((map__22927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22927):map__22927);
var node = map__22927__$1;
var node_value = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.reduce_kv.call(null,((function (map__22927,map__22927__$1,node,node_value){
return (function (acc,index,child_node){
var evalled_node = zenform.model._STAR__STAR_eval_form.call(null,child_node);
return cljs.core.conj.call(null,acc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__22927,map__22927__$1,node,node_value))
,cljs.core.PersistentVector.EMPTY,node_value);
});
zenform.model.eval_node = (function zenform$model$eval_node(p__22929){
var map__22930 = p__22929;
var map__22930__$1 = (((((!((map__22930 == null))))?(((((map__22930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22930):map__22930);
var node = map__22930__$1;
var node_type = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__22932 = node_type;
var G__22932__$1 = (((G__22932 instanceof cljs.core.Keyword))?G__22932.fqn:null);
switch (G__22932__$1) {
case "form":
return zenform.model.eval_form_node.call(null,node);

break;
case "collection":
return zenform.model.eval_collection_node.call(null,node);

break;
default:
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);

}
});
zenform.model.inject_errors = (function zenform$model$inject_errors(errors,form){
return cljs.core.reduce_kv.call(null,(function (acc,path,errs){
var node_path = zenform.model.get_node_path.call(null,path);
return cljs.core.assoc_in.call(null,acc,cljs.core.conj.call(null,node_path,new cljs.core.Keyword(null,"errors","errors",-908790718)),errs);
}),form,errors);
});
zenform.model._STAR__STAR_eval_form = (function zenform$model$_STAR__STAR_eval_form(form){

var value = zenform.model.eval_node.call(null,form);
var errors = zenform.model.eval_errors.call(null,value,form,cljs.core.PersistentVector.EMPTY);
var form__$1 = zenform.model.inject_errors.call(null,errors,form);
var G__22934 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"form","form",-1624062471),form__$1], null);
if(cljs.core.truth_(errors)){
return cljs.core.assoc.call(null,G__22934,new cljs.core.Keyword(null,"errors","errors",-908790718),errors);
} else {
return G__22934;
}
});
zenform.model._STAR_eval_form = (function zenform$model$_STAR_eval_form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22960 = arguments.length;
var i__4731__auto___22961 = (0);
while(true){
if((i__4731__auto___22961 < len__4730__auto___22960)){
args__4736__auto__.push((arguments[i__4731__auto___22961]));

var G__22962 = (i__4731__auto___22961 + (1));
i__4731__auto___22961 = G__22962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic = (function (p__22937,p__22938){
var map__22939 = p__22937;
var map__22939__$1 = (((((!((map__22939 == null))))?(((((map__22939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22939):map__22939);
var node = map__22939__$1;
var tp = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var v = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"value","value",305978217));
var vec__22940 = p__22938;
var pth = cljs.core.nth.call(null,vec__22940,(0),null);
if(((cljs.core._EQ_.call(null,tp,new cljs.core.Keyword(null,"collection","collection",-683361892))) || (cljs.core._EQ_.call(null,tp,new cljs.core.Keyword(null,"form","form",-1624062471))))){
var map__22944 = cljs.core.reduce.call(null,((function (map__22939,map__22939__$1,node,tp,v,vec__22940,pth){
return (function (res,p__22945){
var vec__22946 = p__22945;
var idx = cljs.core.nth.call(null,vec__22946,(0),null);
var n = cljs.core.nth.call(null,vec__22946,(1),null);
var pth__$1 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = pth;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),idx);
var map__22949 = zenform.model._STAR_eval_form.call(null,n,pth__$1);
var map__22949__$1 = (((((!((map__22949 == null))))?(((((map__22949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);
var eval_res = map__22949__$1;
var v__$1 = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"value","value",305978217));
var err = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var ch_node = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var res__$1 = ((cljs.core.empty_QMARK_.call(null,err))?res:cljs.core.update.call(null,res,new cljs.core.Keyword(null,"errors","errors",-908790718),((function (pth__$1,map__22949,map__22949__$1,eval_res,v__$1,err,ch_node,vec__22946,idx,n,map__22939,map__22939__$1,node,tp,v,vec__22940,pth){
return (function (es){
return cljs.core.reduce.call(null,((function (pth__$1,map__22949,map__22949__$1,eval_res,v__$1,err,ch_node,vec__22946,idx,n,map__22939,map__22939__$1,node,tp,v,vec__22940,pth){
return (function (es__$1,p__22951){
var vec__22952 = p__22951;
var err_k = cljs.core.nth.call(null,vec__22952,(0),null);
var err_v = cljs.core.nth.call(null,vec__22952,(1),null);
return cljs.core.assoc.call(null,es__$1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),err_k),err_v);
});})(pth__$1,map__22949,map__22949__$1,eval_res,v__$1,err,ch_node,vec__22946,idx,n,map__22939,map__22939__$1,node,tp,v,vec__22940,pth))
,es,err);
});})(pth__$1,map__22949,map__22949__$1,eval_res,v__$1,err,ch_node,vec__22946,idx,n,map__22939,map__22939__$1,node,tp,v,vec__22940,pth))
));
var res__$2 = cljs.core.assoc_in.call(null,res__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"value","value",305978217),idx], null),ch_node);
var G__22955 = res__$2;
var G__22955__$1 = (((((!((v__$1 == null)))) && (cljs.core._EQ_.call(null,tp,new cljs.core.Keyword(null,"collection","collection",-683361892)))))?cljs.core.update.call(null,G__22955,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj,v__$1):G__22955);
if((((!((v__$1 == null)))) && (cljs.core._EQ_.call(null,tp,new cljs.core.Keyword(null,"form","form",-1624062471))))){
return cljs.core.assoc_in.call(null,G__22955__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),idx], null),v__$1);
} else {
return G__22955__$1;
}
});})(map__22939,map__22939__$1,node,tp,v,vec__22940,pth))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,tp,new cljs.core.Keyword(null,"form","form",-1624062471)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471),node], null),v);
var map__22944__$1 = (((((!((map__22944 == null))))?(((((map__22944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22944):map__22944);
var res = map__22944__$1;
var v__$1 = cljs.core.get.call(null,map__22944__$1,new cljs.core.Keyword(null,"value","value",305978217));
var errs = zenform.model.validate_node.call(null,node,v__$1);
var G__22957 = cljs.core.update.call(null,res,new cljs.core.Keyword(null,"value","value",305978217),((function (map__22944,map__22944__$1,res,v__$1,errs,map__22939,map__22939__$1,node,tp,v,vec__22940,pth){
return (function (x){
if(cljs.core.empty_QMARK_.call(null,x)){
return null;
} else {
return x;
}
});})(map__22944,map__22944__$1,res,v__$1,errs,map__22939,map__22939__$1,node,tp,v,vec__22940,pth))
);
var G__22957__$1 = (cljs.core.truth_(errs)?cljs.core.assoc_in.call(null,G__22957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null),errs):G__22957);
if(cljs.core.truth_(errs)){
return cljs.core.assoc_in.call(null,G__22957__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"errors","errors",-908790718)], null),errs);
} else {
return G__22957__$1;
}
} else {
var errs = zenform.model.validate_node.call(null,node,v);
var node__$1 = (function (){var G__22958 = cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"touched","touched",-609134419),true);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.call(null,G__22958,new cljs.core.Keyword(null,"errors","errors",-908790718),errs);
} else {
return G__22958;
}
})();
var G__22959 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"form","form",-1624062471),node__$1], null);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.call(null,G__22959,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,errs]));
} else {
return G__22959;
}
}
});

zenform.model._STAR_eval_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model._STAR_eval_form.cljs$lang$applyTo = (function (seq22935){
var G__22936 = cljs.core.first.call(null,seq22935);
var seq22935__$1 = cljs.core.next.call(null,seq22935);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22936,seq22935__$1);
});

zenform.model.eval_form = (function zenform$model$eval_form(form){
return zenform.model._STAR_eval_form.call(null,form);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zf","init","zf/init",-1875485326),(function (db,p__22963){
var vec__22964 = p__22963;
var _ = cljs.core.nth.call(null,vec__22964,(0),null);
var form_path = cljs.core.nth.call(null,vec__22964,(1),null);
var schema = cljs.core.nth.call(null,vec__22964,(2),null);
var value = cljs.core.nth.call(null,vec__22964,(3),null);
return cljs.core.assoc_in.call(null,db,form_path,zenform.model.form.call(null,schema,value));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zf","set-value","zf/set-value",445223036),(function (db,p__22967){
var vec__22968 = p__22967;
var _ = cljs.core.nth.call(null,vec__22968,(0),null);
var form_path = cljs.core.nth.call(null,vec__22968,(1),null);
var path = cljs.core.nth.call(null,vec__22968,(2),null);
var v = cljs.core.nth.call(null,vec__22968,(3),null);
return cljs.core.update_in.call(null,db,form_path,((function (vec__22968,_,form_path,path,v){
return (function (form){
return zenform.model.set_value.call(null,form,form_path,path,v);
});})(vec__22968,_,form_path,path,v))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zf","collection-indexes","zf/collection-indexes",876236944),(function (db,p__22971){
var vec__22972 = p__22971;
var _ = cljs.core.nth.call(null,vec__22972,(0),null);
var form_path = cljs.core.nth.call(null,vec__22972,(1),null);
var path = cljs.core.nth.call(null,vec__22972,(2),null);
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.get_in.call(null,db,form_path),zenform.model.get_node_path.call(null,path))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zf","node","zf/node",581196290),(function (db,p__22975){
var vec__22976 = p__22975;
var _ = cljs.core.nth.call(null,vec__22976,(0),null);
var form_path = cljs.core.nth.call(null,vec__22976,(1),null);
var path = cljs.core.nth.call(null,vec__22976,(2),null);
return cljs.core.get_in.call(null,cljs.core.get_in.call(null,db,form_path),zenform.model.get_node_path.call(null,path));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zf","form","zf/form",-1624098507),(function (db,p__22979){
var vec__22980 = p__22979;
var _ = cljs.core.nth.call(null,vec__22980,(0),null);
var form_path = cljs.core.nth.call(null,vec__22980,(1),null);
return cljs.core.get_in.call(null,db,form_path);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zf","get-value","zf/get-value",2108460760),(function (db,p__22983){
var vec__22984 = p__22983;
var _ = cljs.core.nth.call(null,vec__22984,(0),null);
var form_path = cljs.core.nth.call(null,vec__22984,(1),null);
var path = cljs.core.nth.call(null,vec__22984,(2),null);
var form = cljs.core.get_in.call(null,db,form_path);
if(cljs.core.truth_(path)){
return zenform.model.get_value.call(null,form,path);
} else {
return zenform.model.get_value.call(null,form);
}
}));
zenform.model.add_collection_item = (function zenform$model$add_collection_item(form,form_path,path,v){
var node = cljs.core.get_in.call(null,form,zenform.model.get_node_path.call(null,path));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
var coll = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
var idx = ((cljs.core.empty_QMARK_.call(null,coll))?(0):(cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.key,coll)) + (1)));
var sch = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(node);
var v__$1 = zenform.model._STAR_form.call(null,sch,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return zenform.model._STAR_on_value_set_loop.call(null,zenform.model._STAR_set_value.call(null,form,form_path,cljs.core.conj.call(null,path,idx),v__$1,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.get_in.call(null,form,zenform.model.get_node_path.call(null,path)),path);
} else {
return form;
}
});
zenform.model.remove_collection_item = (function zenform$model$remove_collection_item(form,path,idx){
var node_path = zenform.model.get_node_path.call(null,path);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.get_in.call(null,form,cljs.core.conj.call(null,node_path,new cljs.core.Keyword(null,"type","type",1174270348))))){
return zenform.model._STAR_on_value_set_loop.call(null,cljs.core.update_in.call(null,form,cljs.core.conj.call(null,node_path,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.dissoc,idx),node_path,path);
} else {
return form;
}
});
zenform.model.set_collection = (function zenform$model$set_collection(form,path,v){
var node = cljs.core.get_in.call(null,form,zenform.model.get_node_path.call(null,path));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return zenform.model.set_value.call(null,form,path,zenform.model._STAR_form.call(null,node,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node));
} else {
return form;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zf","add-collection-item","zf/add-collection-item",-1341068558),(function (db,p__22987){
var vec__22988 = p__22987;
var _ = cljs.core.nth.call(null,vec__22988,(0),null);
var form_path = cljs.core.nth.call(null,vec__22988,(1),null);
var path = cljs.core.nth.call(null,vec__22988,(2),null);
var v = cljs.core.nth.call(null,vec__22988,(3),null);
return cljs.core.update_in.call(null,db,form_path,((function (vec__22988,_,form_path,path,v){
return (function (form){
return zenform.model.add_collection_item.call(null,form,form_path,path,v);
});})(vec__22988,_,form_path,path,v))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zf","remove-collection-item","zf/remove-collection-item",-1271479980),(function (db,p__22991){
var vec__22992 = p__22991;
var _ = cljs.core.nth.call(null,vec__22992,(0),null);
var form_path = cljs.core.nth.call(null,vec__22992,(1),null);
var path = cljs.core.nth.call(null,vec__22992,(2),null);
var idx = cljs.core.nth.call(null,vec__22992,(3),null);
return cljs.core.update_in.call(null,db,form_path,((function (vec__22992,_,form_path,path,idx){
return (function (form){
return zenform.model.remove_collection_item.call(null,form,path,idx);
});})(vec__22992,_,form_path,path,idx))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zf","set-collection","zf/set-collection",-1587588052),(function (db,p__22995){
var vec__22996 = p__22995;
var _ = cljs.core.nth.call(null,vec__22996,(0),null);
var form_path = cljs.core.nth.call(null,vec__22996,(1),null);
var path = cljs.core.nth.call(null,vec__22996,(2),null);
var v = cljs.core.nth.call(null,vec__22996,(3),null);
return cljs.core.update_in.call(null,db,form_path,((function (vec__22996,_,form_path,path,v){
return (function (form){
return zenform.model.set_collection.call(null,form,path,v);
});})(vec__22996,_,form_path,path,v))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("zf","collection","zf/collection",-683358128),(function (p__22999,_){
var vec__23000 = p__22999;
var ___$1 = cljs.core.nth.call(null,vec__23000,(0),null);
var form_path = cljs.core.nth.call(null,vec__23000,(1),null);
var path = cljs.core.nth.call(null,vec__23000,(2),null);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","node","zf/node",581196290),form_path,path], null));
}),(function (node,_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
}));
zenform.model.get_full_path = (function zenform$model$get_full_path(form_path,path){
return cljs.core.into.call(null,form_path,zenform.model.get_node_path.call(null,path));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zf","update-node-schema","zf/update-node-schema",-2011875334),(function (p__23004,p__23005){
var map__23006 = p__23004;
var map__23006__$1 = (((((!((map__23006 == null))))?(((((map__23006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23006):map__23006);
var db = cljs.core.get.call(null,map__23006__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23007 = p__23005;
var _ = cljs.core.nth.call(null,vec__23007,(0),null);
var form_path = cljs.core.nth.call(null,vec__23007,(1),null);
var path = cljs.core.nth.call(null,vec__23007,(2),null);
var value = cljs.core.nth.call(null,vec__23007,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,zenform.model.get_full_path.call(null,form_path,path),((function (map__23006,map__23006__$1,db,vec__23007,_,form_path,path,value){
return (function (p1__23003_SHARP_){
return cljs.core.merge.call(null,p1__23003_SHARP_,value);
});})(map__23006,map__23006__$1,db,vec__23007,_,form_path,path,value))
)], null);
}));

//# sourceMappingURL=model.js.map
