// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__7185){
var vec__7186 = p__7185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7186,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__7189 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7189,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7189,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7189,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__7193 = arguments.length;
switch (G__7193) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__7195_7219 = clojure.data.equality_partition;
var G__7196_7220 = "null";
var G__7197_7221 = ((function (G__7195_7219,G__7196_7220){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__7195_7219,G__7196_7220))
;
goog.object.set(G__7195_7219,G__7196_7220,G__7197_7221);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__7198_7222 = clojure.data.equality_partition;
var G__7199_7223 = "string";
var G__7200_7224 = ((function (G__7198_7222,G__7199_7223){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__7198_7222,G__7199_7223))
;
goog.object.set(G__7198_7222,G__7199_7223,G__7200_7224);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__7201_7225 = clojure.data.equality_partition;
var G__7202_7226 = "number";
var G__7203_7227 = ((function (G__7201_7225,G__7202_7226){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__7201_7225,G__7202_7226))
;
goog.object.set(G__7201_7225,G__7202_7226,G__7203_7227);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__7204_7228 = clojure.data.equality_partition;
var G__7205_7229 = "array";
var G__7206_7230 = ((function (G__7204_7228,G__7205_7229){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__7204_7228,G__7205_7229))
;
goog.object.set(G__7204_7228,G__7205_7229,G__7206_7230);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__7207_7231 = clojure.data.equality_partition;
var G__7208_7232 = "function";
var G__7209_7233 = ((function (G__7207_7231,G__7208_7232){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__7207_7231,G__7208_7232))
;
goog.object.set(G__7207_7231,G__7208_7232,G__7209_7233);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__7210_7234 = clojure.data.equality_partition;
var G__7211_7235 = "boolean";
var G__7212_7236 = ((function (G__7210_7234,G__7211_7235){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__7210_7234,G__7211_7235))
;
goog.object.set(G__7210_7234,G__7211_7235,G__7212_7236);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__7213_7237 = clojure.data.equality_partition;
var G__7214_7238 = "_";
var G__7215_7239 = ((function (G__7213_7237,G__7214_7238){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__7213_7237,G__7214_7238))
;
goog.object.set(G__7213_7237,G__7214_7238,G__7215_7239);
goog.object.set(clojure.data.Diff,"null",true);

var G__7240_7264 = clojure.data.diff_similar;
var G__7241_7265 = "null";
var G__7242_7266 = ((function (G__7240_7264,G__7241_7265){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__7240_7264,G__7241_7265))
;
goog.object.set(G__7240_7264,G__7241_7265,G__7242_7266);

goog.object.set(clojure.data.Diff,"string",true);

var G__7243_7267 = clojure.data.diff_similar;
var G__7244_7268 = "string";
var G__7245_7269 = ((function (G__7243_7267,G__7244_7268){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__7243_7267,G__7244_7268))
;
goog.object.set(G__7243_7267,G__7244_7268,G__7245_7269);

goog.object.set(clojure.data.Diff,"number",true);

var G__7246_7270 = clojure.data.diff_similar;
var G__7247_7271 = "number";
var G__7248_7272 = ((function (G__7246_7270,G__7247_7271){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__7246_7270,G__7247_7271))
;
goog.object.set(G__7246_7270,G__7247_7271,G__7248_7272);

goog.object.set(clojure.data.Diff,"array",true);

var G__7249_7273 = clojure.data.diff_similar;
var G__7250_7274 = "array";
var G__7251_7275 = ((function (G__7249_7273,G__7250_7274){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__7249_7273,G__7250_7274))
;
goog.object.set(G__7249_7273,G__7250_7274,G__7251_7275);

goog.object.set(clojure.data.Diff,"function",true);

var G__7252_7276 = clojure.data.diff_similar;
var G__7253_7277 = "function";
var G__7254_7278 = ((function (G__7252_7276,G__7253_7277){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__7252_7276,G__7253_7277))
;
goog.object.set(G__7252_7276,G__7253_7277,G__7254_7278);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__7255_7279 = clojure.data.diff_similar;
var G__7256_7280 = "boolean";
var G__7257_7281 = ((function (G__7255_7279,G__7256_7280){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__7255_7279,G__7256_7280))
;
goog.object.set(G__7255_7279,G__7256_7280,G__7257_7281);

goog.object.set(clojure.data.Diff,"_",true);

var G__7258_7282 = clojure.data.diff_similar;
var G__7259_7283 = "_";
var G__7260_7284 = ((function (G__7258_7282,G__7259_7283){
return (function (a,b){
var fexpr__7262 = (function (){var G__7263 = clojure.data.equality_partition(a);
var G__7263__$1 = (((G__7263 instanceof cljs.core.Keyword))?G__7263.fqn:null);
switch (G__7263__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7263__$1)].join('')));

}
})();
return (fexpr__7262.cljs$core$IFn$_invoke$arity$2 ? fexpr__7262.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__7262.call(null,a,b));
});})(G__7258_7282,G__7259_7283))
;
goog.object.set(G__7258_7282,G__7259_7283,G__7260_7284);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
