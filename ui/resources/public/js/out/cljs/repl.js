// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22556){
var map__22557 = p__22556;
var map__22557__$1 = (((((!((map__22557 == null))))?(((((map__22557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22557):map__22557);
var m = map__22557__$1;
var n = cljs.core.get.call(null,map__22557__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22557__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22559_22591 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22560_22592 = null;
var count__22561_22593 = (0);
var i__22562_22594 = (0);
while(true){
if((i__22562_22594 < count__22561_22593)){
var f_22595 = cljs.core._nth.call(null,chunk__22560_22592,i__22562_22594);
cljs.core.println.call(null,"  ",f_22595);


var G__22596 = seq__22559_22591;
var G__22597 = chunk__22560_22592;
var G__22598 = count__22561_22593;
var G__22599 = (i__22562_22594 + (1));
seq__22559_22591 = G__22596;
chunk__22560_22592 = G__22597;
count__22561_22593 = G__22598;
i__22562_22594 = G__22599;
continue;
} else {
var temp__5720__auto___22600 = cljs.core.seq.call(null,seq__22559_22591);
if(temp__5720__auto___22600){
var seq__22559_22601__$1 = temp__5720__auto___22600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22559_22601__$1)){
var c__4550__auto___22602 = cljs.core.chunk_first.call(null,seq__22559_22601__$1);
var G__22603 = cljs.core.chunk_rest.call(null,seq__22559_22601__$1);
var G__22604 = c__4550__auto___22602;
var G__22605 = cljs.core.count.call(null,c__4550__auto___22602);
var G__22606 = (0);
seq__22559_22591 = G__22603;
chunk__22560_22592 = G__22604;
count__22561_22593 = G__22605;
i__22562_22594 = G__22606;
continue;
} else {
var f_22607 = cljs.core.first.call(null,seq__22559_22601__$1);
cljs.core.println.call(null,"  ",f_22607);


var G__22608 = cljs.core.next.call(null,seq__22559_22601__$1);
var G__22609 = null;
var G__22610 = (0);
var G__22611 = (0);
seq__22559_22591 = G__22608;
chunk__22560_22592 = G__22609;
count__22561_22593 = G__22610;
i__22562_22594 = G__22611;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22612 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22612);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22612)))?cljs.core.second.call(null,arglists_22612):arglists_22612));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22563_22613 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22564_22614 = null;
var count__22565_22615 = (0);
var i__22566_22616 = (0);
while(true){
if((i__22566_22616 < count__22565_22615)){
var vec__22577_22617 = cljs.core._nth.call(null,chunk__22564_22614,i__22566_22616);
var name_22618 = cljs.core.nth.call(null,vec__22577_22617,(0),null);
var map__22580_22619 = cljs.core.nth.call(null,vec__22577_22617,(1),null);
var map__22580_22620__$1 = (((((!((map__22580_22619 == null))))?(((((map__22580_22619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22580_22619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22580_22619):map__22580_22619);
var doc_22621 = cljs.core.get.call(null,map__22580_22620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22622 = cljs.core.get.call(null,map__22580_22620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22618);

cljs.core.println.call(null," ",arglists_22622);

if(cljs.core.truth_(doc_22621)){
cljs.core.println.call(null," ",doc_22621);
} else {
}


var G__22623 = seq__22563_22613;
var G__22624 = chunk__22564_22614;
var G__22625 = count__22565_22615;
var G__22626 = (i__22566_22616 + (1));
seq__22563_22613 = G__22623;
chunk__22564_22614 = G__22624;
count__22565_22615 = G__22625;
i__22566_22616 = G__22626;
continue;
} else {
var temp__5720__auto___22627 = cljs.core.seq.call(null,seq__22563_22613);
if(temp__5720__auto___22627){
var seq__22563_22628__$1 = temp__5720__auto___22627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22563_22628__$1)){
var c__4550__auto___22629 = cljs.core.chunk_first.call(null,seq__22563_22628__$1);
var G__22630 = cljs.core.chunk_rest.call(null,seq__22563_22628__$1);
var G__22631 = c__4550__auto___22629;
var G__22632 = cljs.core.count.call(null,c__4550__auto___22629);
var G__22633 = (0);
seq__22563_22613 = G__22630;
chunk__22564_22614 = G__22631;
count__22565_22615 = G__22632;
i__22566_22616 = G__22633;
continue;
} else {
var vec__22582_22634 = cljs.core.first.call(null,seq__22563_22628__$1);
var name_22635 = cljs.core.nth.call(null,vec__22582_22634,(0),null);
var map__22585_22636 = cljs.core.nth.call(null,vec__22582_22634,(1),null);
var map__22585_22637__$1 = (((((!((map__22585_22636 == null))))?(((((map__22585_22636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22585_22636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22585_22636):map__22585_22636);
var doc_22638 = cljs.core.get.call(null,map__22585_22637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22639 = cljs.core.get.call(null,map__22585_22637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22635);

cljs.core.println.call(null," ",arglists_22639);

if(cljs.core.truth_(doc_22638)){
cljs.core.println.call(null," ",doc_22638);
} else {
}


var G__22640 = cljs.core.next.call(null,seq__22563_22628__$1);
var G__22641 = null;
var G__22642 = (0);
var G__22643 = (0);
seq__22563_22613 = G__22640;
chunk__22564_22614 = G__22641;
count__22565_22615 = G__22642;
i__22566_22616 = G__22643;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__22587 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22588 = null;
var count__22589 = (0);
var i__22590 = (0);
while(true){
if((i__22590 < count__22589)){
var role = cljs.core._nth.call(null,chunk__22588,i__22590);
var temp__5720__auto___22644__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22644__$1)){
var spec_22645 = temp__5720__auto___22644__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22645));
} else {
}


var G__22646 = seq__22587;
var G__22647 = chunk__22588;
var G__22648 = count__22589;
var G__22649 = (i__22590 + (1));
seq__22587 = G__22646;
chunk__22588 = G__22647;
count__22589 = G__22648;
i__22590 = G__22649;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22587);
if(temp__5720__auto____$1){
var seq__22587__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22587__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22587__$1);
var G__22650 = cljs.core.chunk_rest.call(null,seq__22587__$1);
var G__22651 = c__4550__auto__;
var G__22652 = cljs.core.count.call(null,c__4550__auto__);
var G__22653 = (0);
seq__22587 = G__22650;
chunk__22588 = G__22651;
count__22589 = G__22652;
i__22590 = G__22653;
continue;
} else {
var role = cljs.core.first.call(null,seq__22587__$1);
var temp__5720__auto___22654__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22654__$2)){
var spec_22655 = temp__5720__auto___22654__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22655));
} else {
}


var G__22656 = cljs.core.next.call(null,seq__22587__$1);
var G__22657 = null;
var G__22658 = (0);
var G__22659 = (0);
seq__22587 = G__22656;
chunk__22588 = G__22657;
count__22589 = G__22658;
i__22590 = G__22659;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22660 = cljs.core.conj.call(null,via,t);
var G__22661 = cljs.core.ex_cause.call(null,t);
via = G__22660;
t = G__22661;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22664 = datafied_throwable;
var map__22664__$1 = (((((!((map__22664 == null))))?(((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var via = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22665 = cljs.core.last.call(null,via);
var map__22665__$1 = (((((!((map__22665 == null))))?(((((map__22665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22665):map__22665);
var type = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22666 = data;
var map__22666__$1 = (((((!((map__22666 == null))))?(((((map__22666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22666):map__22666);
var problems = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22667 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22667__$1 = (((((!((map__22667 == null))))?(((((map__22667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22667):map__22667);
var top_data = map__22667__$1;
var source = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22672 = phase;
var G__22672__$1 = (((G__22672 instanceof cljs.core.Keyword))?G__22672.fqn:null);
switch (G__22672__$1) {
case "read-source":
var map__22673 = data;
var map__22673__$1 = (((((!((map__22673 == null))))?(((((map__22673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22673):map__22673);
var line = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22675 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22675__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22675,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22675);
var G__22675__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22675__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22675__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22675__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22675__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22676 = top_data;
var G__22676__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22676,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22676);
var G__22676__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22676__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22676__$1);
var G__22676__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22676__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22676__$2);
var G__22676__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22676__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22676__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22676__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22676__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22677 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22677,(0),null);
var method = cljs.core.nth.call(null,vec__22677,(1),null);
var file = cljs.core.nth.call(null,vec__22677,(2),null);
var line = cljs.core.nth.call(null,vec__22677,(3),null);
var G__22680 = top_data;
var G__22680__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22680,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22680);
var G__22680__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22680__$1);
var G__22680__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__22680__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22680__$2);
var G__22680__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22680__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22680__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22680__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22680__$4;
}

break;
case "execution":
var vec__22681 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22681,(0),null);
var method = cljs.core.nth.call(null,vec__22681,(1),null);
var file = cljs.core.nth.call(null,vec__22681,(2),null);
var line = cljs.core.nth.call(null,vec__22681,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__22681,source__$1,method,file,line,G__22672,G__22672__$1,map__22664,map__22664__$1,via,trace,phase,map__22665,map__22665__$1,type,message,data,map__22666,map__22666__$1,problems,fn,caller,map__22667,map__22667__$1,top_data,source){
return (function (p1__22663_SHARP_){
var or__4131__auto__ = (p1__22663_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22663_SHARP_);
}
});})(vec__22681,source__$1,method,file,line,G__22672,G__22672__$1,map__22664,map__22664__$1,via,trace,phase,map__22665,map__22665__$1,type,message,data,map__22666,map__22666__$1,problems,fn,caller,map__22667,map__22667__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22684__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22684,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22684);
var G__22684__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22684__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22684__$1);
var G__22684__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__22684__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22684__$2);
var G__22684__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22684__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22684__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22684__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22684__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22672__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22688){
var map__22689 = p__22688;
var map__22689__$1 = (((((!((map__22689 == null))))?(((((map__22689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22689):map__22689);
var triage_data = map__22689__$1;
var phase = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22691 = phase;
var G__22691__$1 = (((G__22691 instanceof cljs.core.Keyword))?G__22691.fqn:null);
switch (G__22691__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22692_22701 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22693_22702 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22694_22703 = true;
var _STAR_print_fn_STAR__temp_val__22695_22704 = ((function (_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22694_22703;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22695_22704;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,_STAR_print_fn_STAR__temp_val__22695_22704,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,_STAR_print_fn_STAR__temp_val__22695_22704,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22686_SHARP_){
return cljs.core.dissoc.call(null,p1__22686_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,_STAR_print_fn_STAR__temp_val__22695_22704,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22692_22701,_STAR_print_fn_STAR__orig_val__22693_22702,_STAR_print_newline_STAR__temp_val__22694_22703,_STAR_print_fn_STAR__temp_val__22695_22704,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22693_22702;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22692_22701;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22696_22705 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22697_22706 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22698_22707 = true;
var _STAR_print_fn_STAR__temp_val__22699_22708 = ((function (_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22698_22707;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22699_22708;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,_STAR_print_fn_STAR__temp_val__22699_22708,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,_STAR_print_fn_STAR__temp_val__22699_22708,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22687_SHARP_){
return cljs.core.dissoc.call(null,p1__22687_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,_STAR_print_fn_STAR__temp_val__22699_22708,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22696_22705,_STAR_print_fn_STAR__orig_val__22697_22706,_STAR_print_newline_STAR__temp_val__22698_22707,_STAR_print_fn_STAR__temp_val__22699_22708,sb__4661__auto__,G__22691,G__22691__$1,loc,class_name,simple_class,cause_type,format,map__22689,map__22689__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22697_22706;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22696_22705;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22691__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
