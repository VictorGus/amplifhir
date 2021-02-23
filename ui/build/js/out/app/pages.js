// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.pages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
if((typeof app !== 'undefined') && (typeof app.pages !== 'undefined') && (typeof app.pages.pages !== 'undefined')){
} else {
app.pages.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
var G__9873_9879 = cljs.core.cst$kw$pages_SLASH_get_DASH_in;
var G__9874_9880 = ((function (G__9873_9879){
return (function (db,p__9875){
var vec__9876 = p__9875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9876,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9876,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__9873_9879))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9873_9879,G__9874_9880) : re_frame.core.reg_sub.call(null,G__9873_9879,G__9874_9880));
var G__9881_9887 = cljs.core.cst$kw$pages_SLASH_data;
var G__9882_9888 = ((function (G__9881_9887){
return (function (db,p__9883){
var vec__9884 = p__9883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9884,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9884,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,pid);
});})(G__9881_9887))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9881_9887,G__9882_9888) : re_frame.core.reg_sub.call(null,G__9881_9887,G__9882_9888));
app.pages.reg_page = (function app$pages$reg_page(key,page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.pages,cljs.core.assoc,key,page);
});
app.pages.subscribed_page = (function app$pages$subscribed_page(page_idx,view){
return (function (params){
var m = (function (){var G__9889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_idx], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__9889) : re_frame.core.subscribe.call(null,G__9889));
})();
return ((function (m){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(m),params], null);
});
;})(m))
});
});
app.pages.reg_subs_page = (function app$pages$reg_subs_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9897 = arguments.length;
var i__4731__auto___9898 = (0);
while(true){
if((i__4731__auto___9898 < len__4730__auto___9897)){
args__4736__auto__.push((arguments[i__4731__auto___9898]));

var G__9899 = (i__4731__auto___9898 + (1));
i__4731__auto___9898 = G__9899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,p__9893){
var vec__9894 = p__9893;
var layout_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9894,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.pages,cljs.core.assoc,key,app.pages.subscribed_page(key,f));
});

app.pages.reg_subs_page.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.pages.reg_subs_page.cljs$lang$applyTo = (function (seq9890){
var G__9891 = cljs.core.first(seq9890);
var seq9890__$1 = cljs.core.next(seq9890);
var G__9892 = cljs.core.first(seq9890__$1);
var seq9890__$2 = cljs.core.next(seq9890__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9891,G__9892,seq9890__$2);
});

var G__9900_9902 = cljs.core.cst$kw$config;
var G__9901_9903 = ((function (G__9900_9902){
return (function (db,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__9900_9902))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9900_9902,G__9901_9903) : re_frame.core.reg_sub.call(null,G__9900_9902,G__9901_9903));
