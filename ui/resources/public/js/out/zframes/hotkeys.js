// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.hotkeys');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
if((typeof zframes !== 'undefined') && (typeof zframes.hotkeys !== 'undefined') && (typeof zframes.hotkeys.handlers !== 'undefined')){
} else {
zframes.hotkeys.handlers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Slash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("zframes.hotkeys","help","zframes.hotkeys/help",-1558332937)], null)], null));
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.hotkeys","help","zframes.hotkeys/help",-1558332937),(function() { 
var G__22784__delegate = function (_){
return cljs.core.println.call(null,cljs.core.deref.call(null,zframes.hotkeys.handlers));
};
var G__22784 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22785__i = 0, G__22785__a = new Array(arguments.length -  0);
while (G__22785__i < G__22785__a.length) {G__22785__a[G__22785__i] = arguments[G__22785__i + 0]; ++G__22785__i;}
  _ = new cljs.core.IndexedSeq(G__22785__a,0,null);
} 
return G__22784__delegate.call(this,_);};
G__22784.cljs$lang$maxFixedArity = 0;
G__22784.cljs$lang$applyTo = (function (arglist__22786){
var _ = cljs.core.seq(arglist__22786);
return G__22784__delegate(_);
});
G__22784.cljs$core$IFn$_invoke$arity$variadic = G__22784__delegate;
return G__22784;
})()
);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("hotkey","init","hotkey/init",-681385556),(function (opts){
cljs.core.swap_BANG_.call(null,zframes.hotkeys.handlers,cljs.core.merge,opts);

return document.addEventListener("keyup",(function (ev){
var temp__5720__auto__ = (function (){var and__4120__auto__ = ev.altKey;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.get.call(null,cljs.core.deref.call(null,zframes.hotkeys.handlers),ev.code);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var h = temp__5720__auto__;
cljs.core.println.call(null,"Hotkey ",ev.code,cljs.core.deref.call(null,zframes.hotkeys.handlers));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(h),h], null));
} else {
return null;
}
}),false);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("hotkey","add","hotkey/add",1177071149),(function (opts){
return cljs.core.swap_BANG_.call(null,zframes.hotkeys.handlers,(function (old){
return cljs.core.reduce.call(null,(function (ks,p__22787){
var vec__22788 = p__22787;
var id = cljs.core.nth.call(null,vec__22788,(0),null);
var ev = cljs.core.nth.call(null,vec__22788,(1),null);
return cljs.core.assoc.call(null,ks,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ev),cljs.core.assoc.call(null,ev,new cljs.core.Keyword(null,"id","id",-1388402092),id));
}),old,opts);
}));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("hotkey","clear","hotkey/clear",-1198006707),(function (id){
var ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_.call(null,id))?id:cljs.core.PersistentHashSet.createAsIfByAssoc([id])));
return cljs.core.swap_BANG_.call(null,zframes.hotkeys.handlers,((function (ids){
return (function (old){
return cljs.core.reduce.call(null,((function (ids){
return (function (ks,p__22791){
var vec__22792 = p__22791;
var k = cljs.core.nth.call(null,vec__22792,(0),null);
var ev = cljs.core.nth.call(null,vec__22792,(1),null);
if(cljs.core.contains_QMARK_.call(null,ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ev))){
return cljs.core.dissoc.call(null,ks,k);
} else {
return ks;
}
});})(ids))
,old,old);
});})(ids))
);
}));

//# sourceMappingURL=hotkeys.js.map
