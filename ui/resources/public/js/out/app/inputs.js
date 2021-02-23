// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.inputs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
app.inputs.text_input = (function app$inputs$text_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25186 = arguments.length;
var i__4731__auto___25187 = (0);
while(true){
if((i__4731__auto___25187 < len__4730__auto___25186)){
args__4736__auto__.push((arguments[i__4731__auto___25187]));

var G__25188 = (i__4731__auto___25187 + (1));
i__4731__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__25182){
var vec__25183 = p__25182;
var attrs = cljs.core.nth.call(null,vec__25183,(0),null);
var node = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","node","zf/node",581196290),form_path,path], null));
var attrs__$1 = cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (node,vec__25183,attrs){
return (function (p1__25178_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","set-value","zf/set-value",445223036),form_path,path,p1__25178_SHARP_.target.value], null));
});})(node,vec__25183,attrs))
);
return ((function (node,attrs__$1,vec__25183,attrs){
return (function() { 
var G__25189__delegate = function (_){
var _STAR_node = cljs.core.deref.call(null,node);
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.update.call(null,cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"value","value",305978217),v),new cljs.core.Keyword(null,"class","class",-2030961996),((function (_STAR_node,v,errs,node,attrs__$1,vec__25183,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "form-control";
}
})()),(cljs.core.truth_(errs)?" is-invalid":null)].join('');
});})(_STAR_node,v,errs,node,attrs__$1,vec__25183,attrs))
)], null);
};
var G__25189 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__25190__i = 0, G__25190__a = new Array(arguments.length -  0);
while (G__25190__i < G__25190__a.length) {G__25190__a[G__25190__i] = arguments[G__25190__i + 0]; ++G__25190__i;}
  _ = new cljs.core.IndexedSeq(G__25190__a,0,null);
} 
return G__25189__delegate.call(this,_);};
G__25189.cljs$lang$maxFixedArity = 0;
G__25189.cljs$lang$applyTo = (function (arglist__25191){
var _ = cljs.core.seq(arglist__25191);
return G__25189__delegate(_);
});
G__25189.cljs$core$IFn$_invoke$arity$variadic = G__25189__delegate;
return G__25189;
})()
;
;})(node,attrs__$1,vec__25183,attrs))
});

app.inputs.text_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.text_input.cljs$lang$applyTo = (function (seq25179){
var G__25180 = cljs.core.first.call(null,seq25179);
var seq25179__$1 = cljs.core.next.call(null,seq25179);
var G__25181 = cljs.core.first.call(null,seq25179__$1);
var seq25179__$2 = cljs.core.next.call(null,seq25179__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25180,G__25181,seq25179__$2);
});

app.inputs.select = (function app$inputs$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25209 = arguments.length;
var i__4731__auto___25210 = (0);
while(true){
if((i__4731__auto___25210 < len__4730__auto___25209)){
args__4736__auto__.push((arguments[i__4731__auto___25210]));

var G__25211 = (i__4731__auto___25210 + (1));
i__4731__auto___25210 = G__25211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.select.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__25195){
var vec__25196 = p__25195;
var attrs = cljs.core.nth.call(null,vec__25196,(0),null);
var node = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","node","zf/node",581196290),form_path,path], null)));
var on_change = ((function (node,vec__25196,attrs){
return (function (x){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","set-value","zf/set-value",445223036),form_path,path,x.target.value], null));
});})(node,vec__25196,attrs))
;
var map__25199 = node;
var map__25199__$1 = (((((!((map__25199 == null))))?(((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);
var value_current = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"value","value",305978217));
var errors = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value_current__$1 = (function (){var or__4131__auto__ = value_current;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),value_current__$1], null)),(function (){var iter__4523__auto__ = ((function (map__25199,map__25199__$1,value_current,errors,value_current__$1,node,on_change,vec__25196,attrs){
return (function app$inputs$iter__25201(s__25202){
return (new cljs.core.LazySeq(null,((function (map__25199,map__25199__$1,value_current,errors,value_current__$1,node,on_change,vec__25196,attrs){
return (function (){
var s__25202__$1 = s__25202;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25202__$1);
if(temp__5720__auto__){
var s__25202__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25202__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25202__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25204 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25203 = (0);
while(true){
if((i__25203 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__25203);
var map__25205 = item;
var map__25205__$1 = (((((!((map__25205 == null))))?(((((map__25205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25205):map__25205);
var id = cljs.core.get.call(null,map__25205__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__25205__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__25205__$1,new cljs.core.Keyword(null,"display","display",242065432));
var key = (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
cljs.core.chunk_append.call(null,b__25204,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null),(function (){var or__4131__auto__ = display;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})()], null));

var G__25212 = (i__25203 + (1));
i__25203 = G__25212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25204),app$inputs$iter__25201.call(null,cljs.core.chunk_rest.call(null,s__25202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25204),null);
}
} else {
var item = cljs.core.first.call(null,s__25202__$2);
var map__25207 = item;
var map__25207__$1 = (((((!((map__25207 == null))))?(((((map__25207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25207):map__25207);
var id = cljs.core.get.call(null,map__25207__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__25207__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__25207__$1,new cljs.core.Keyword(null,"display","display",242065432));
var key = (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null),(function (){var or__4131__auto__ = display;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})()], null),app$inputs$iter__25201.call(null,cljs.core.rest.call(null,s__25202__$2)));
}
} else {
return null;
}
break;
}
});})(map__25199,map__25199__$1,value_current,errors,value_current__$1,node,on_change,vec__25196,attrs))
,null,null));
});})(map__25199,map__25199__$1,value_current,errors,value_current__$1,node,on_change,vec__25196,attrs))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(node));
})()], null);
});

app.inputs.select.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.select.cljs$lang$applyTo = (function (seq25192){
var G__25193 = cljs.core.first.call(null,seq25192);
var seq25192__$1 = cljs.core.next.call(null,seq25192);
var G__25194 = cljs.core.first.call(null,seq25192__$1);
var seq25192__$2 = cljs.core.next.call(null,seq25192__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25193,G__25194,seq25192__$2);
});

app.inputs.date_input = (function app$inputs$date_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25220 = arguments.length;
var i__4731__auto___25221 = (0);
while(true){
if((i__4731__auto___25221 < len__4730__auto___25220)){
args__4736__auto__.push((arguments[i__4731__auto___25221]));

var G__25222 = (i__4731__auto___25221 + (1));
i__4731__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.inputs.date_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.inputs.date_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__25216){
var vec__25217 = p__25216;
var attrs = cljs.core.nth.call(null,vec__25217,(0),null);
var node = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","node","zf/node",581196290),form_path,path], null));
var state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (node,state,vec__25217,attrs){
return (function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),e.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","set-value","zf/set-value",445223036),form_path,path,e.target.value], null));
});})(node,state,vec__25217,attrs))
);
return ((function (node,state,attrs__$1,vec__25217,attrs){
return (function() { 
var G__25223__delegate = function (_){
var _STAR_node = cljs.core.deref.call(null,node);
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),v),new cljs.core.Keyword(null,"value","value",305978217),v),new cljs.core.Keyword(null,"type","type",1174270348),"date"),new cljs.core.Keyword(null,"class","class",-2030961996),((function (_STAR_node,v,errs,node,state,attrs__$1,vec__25217,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),(cljs.core.truth_(errs)?" is-invalid":null)].join('');
});})(_STAR_node,v,errs,node,state,attrs__$1,vec__25217,attrs))
)], null);
};
var G__25223 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__25224__i = 0, G__25224__a = new Array(arguments.length -  0);
while (G__25224__i < G__25224__a.length) {G__25224__a[G__25224__i] = arguments[G__25224__i + 0]; ++G__25224__i;}
  _ = new cljs.core.IndexedSeq(G__25224__a,0,null);
} 
return G__25223__delegate.call(this,_);};
G__25223.cljs$lang$maxFixedArity = 0;
G__25223.cljs$lang$applyTo = (function (arglist__25225){
var _ = cljs.core.seq(arglist__25225);
return G__25223__delegate(_);
});
G__25223.cljs$core$IFn$_invoke$arity$variadic = G__25223__delegate;
return G__25223;
})()
;
;})(node,state,attrs__$1,vec__25217,attrs))
});

app.inputs.date_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.inputs.date_input.cljs$lang$applyTo = (function (seq25213){
var G__25214 = cljs.core.first.call(null,seq25213);
var seq25213__$1 = cljs.core.next.call(null,seq25213);
var G__25215 = cljs.core.first.call(null,seq25213__$1);
var seq25213__$2 = cljs.core.next.call(null,seq25213__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25214,G__25215,seq25213__$2);
});


//# sourceMappingURL=inputs.js.map
