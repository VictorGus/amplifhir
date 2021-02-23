// Compiled by ClojureScript 1.10.520 {}
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.util');
garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,"%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_.call(null,garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__22676,right){
var map__22677 = p__22676;
var map__22677__$1 = (((((!((map__22677 == null))))?(((((map__22677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22677):map__22677);
var m = cljs.core.get.call(null,map__22677__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.call(null,map__22677__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.call(null,["Inconvertible unit ",cljs.core.name.call(null,x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__5720__auto__ = cljs.core.re_matches.call(null,garden.units.unit_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__22679 = temp__5720__auto__;
var _ = cljs.core.nth.call(null,vec__22679,(0),null);
var magnitude = cljs.core.nth.call(null,vec__22679,(1),null);
var unit = cljs.core.nth.call(null,vec__22679,(2),null);
var unit__$1 = cljs.core.keyword.call(null,unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
return ((garden.units.unit_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(garden.units.unit_QMARK_.call(null,x)){
if(cljs.core._EQ_.call(null,unit.call(null,x),unit)){
return x;
} else {
return garden.units.convert.call(null,x,unit);
}
} else {
var ex_message = garden.util.format.call(null,"Unable to convert from %s to %s",cljs.core.type.getName(),cljs.core.name.call(null,unit));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.call(null,ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return u.call(null,(0));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return u.call(null,x);
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__22682 = u.call(null,x);
var map__22682__$1 = (((((!((map__22682 == null))))?(((((map__22682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22682):map__22682);
var m1 = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__22683 = u.call(null,y);
var map__22683__$1 = (((((!((map__22683 == null))))?(((((map__22683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22683):map__22683);
var m2 = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 + m2));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__22686__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.call(null,x,y),more);
};
var G__22686 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__22687__i = 0, G__22687__a = new Array(arguments.length -  2);
while (G__22687__i < G__22687__a.length) {G__22687__a[G__22687__i] = arguments[G__22687__i + 2]; ++G__22687__i;}
  more = new cljs.core.IndexedSeq(G__22687__a,0,null);
} 
return G__22686__delegate.call(this,x,y,more);};
G__22686.cljs$lang$maxFixedArity = 2;
G__22686.cljs$lang$applyTo = (function (arglist__22688){
var x = cljs.core.first(arglist__22688);
arglist__22688 = cljs.core.next(arglist__22688);
var y = cljs.core.first(arglist__22688);
var more = cljs.core.rest(arglist__22688);
return G__22686__delegate(x,y,more);
});
G__22686.cljs$core$IFn$_invoke$arity$variadic = G__22686__delegate;
return G__22686;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__22689 = null;
if (arguments.length > 2) {
var G__22690__i = 0, G__22690__a = new Array(arguments.length -  2);
while (G__22690__i < G__22690__a.length) {G__22690__a[G__22690__i] = arguments[G__22690__i + 2]; ++G__22690__i;}
G__22689 = new cljs.core.IndexedSeq(G__22690__a,0,null);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__22689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
return u.call(null,(- x));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__22691 = u.call(null,x);
var map__22691__$1 = (((((!((map__22691 == null))))?(((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var m1 = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__22692 = u.call(null,y);
var map__22692__$1 = (((((!((map__22692 == null))))?(((((map__22692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22692):map__22692);
var m2 = cljs.core.get.call(null,map__22692__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 - m2));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__22695__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.call(null,x,y),more);
};
var G__22695 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__22696__i = 0, G__22696__a = new Array(arguments.length -  2);
while (G__22696__i < G__22696__a.length) {G__22696__a[G__22696__i] = arguments[G__22696__i + 2]; ++G__22696__i;}
  more = new cljs.core.IndexedSeq(G__22696__a,0,null);
} 
return G__22695__delegate.call(this,x,y,more);};
G__22695.cljs$lang$maxFixedArity = 2;
G__22695.cljs$lang$applyTo = (function (arglist__22697){
var x = cljs.core.first(arglist__22697);
arglist__22697 = cljs.core.next(arglist__22697);
var y = cljs.core.first(arglist__22697);
var more = cljs.core.rest(arglist__22697);
return G__22695__delegate(x,y,more);
});
G__22695.cljs$core$IFn$_invoke$arity$variadic = G__22695__delegate;
return G__22695;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__22698 = null;
if (arguments.length > 2) {
var G__22699__i = 0, G__22699__a = new Array(arguments.length -  2);
while (G__22699__i < G__22699__a.length) {G__22699__a[G__22699__i] = arguments[G__22699__i + 2]; ++G__22699__i;}
G__22698 = new cljs.core.IndexedSeq(G__22699__a,0,null);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__22698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn.call(null,unit);
var op = ((cljs.core._EQ_.call(null,unit,new cljs.core.Keyword(null,"%","%",1704198600)))?((function (u){
return (function garden$units$make_unit_multiplier_$_percent_STAR_(x,y){
return ((x * y) / (100));
});})(u))
:cljs.core._STAR_);
return ((function (u,op){
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return u.call(null,(1));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return u.call(null,x);
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__22700 = u.call(null,x);
var map__22700__$1 = (((((!((map__22700 == null))))?(((((map__22700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22700):map__22700);
var m1 = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__22701 = u.call(null,y);
var map__22701__$1 = (((((!((map__22701 == null))))?(((((map__22701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701):map__22701);
var m2 = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,op.call(null,m1,m2));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__22704__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.call(null,x,y),more);
};
var G__22704 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__22705__i = 0, G__22705__a = new Array(arguments.length -  2);
while (G__22705__i < G__22705__a.length) {G__22705__a[G__22705__i] = arguments[G__22705__i + 2]; ++G__22705__i;}
  more = new cljs.core.IndexedSeq(G__22705__a,0,null);
} 
return G__22704__delegate.call(this,x,y,more);};
G__22704.cljs$lang$maxFixedArity = 2;
G__22704.cljs$lang$applyTo = (function (arglist__22706){
var x = cljs.core.first(arglist__22706);
arglist__22706 = cljs.core.next(arglist__22706);
var y = cljs.core.first(arglist__22706);
var more = cljs.core.rest(arglist__22706);
return G__22704__delegate(x,y,more);
});
G__22704.cljs$core$IFn$_invoke$arity$variadic = G__22704__delegate;
return G__22704;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__22707 = null;
if (arguments.length > 2) {
var G__22708__i = 0, G__22708__a = new Array(arguments.length -  2);
while (G__22708__i < G__22708__a.length) {G__22708__a[G__22708__i] = arguments[G__22708__i + 2]; ++G__22708__i;}
G__22707 = new cljs.core.IndexedSeq(G__22708__a,0,null);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__22707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u,op))
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn.call(null,unit);
var op = ((cljs.core._EQ_.call(null,unit,new cljs.core.Keyword(null,"%","%",1704198600)))?((function (u){
return (function garden$units$make_unit_divider_$_percent_div(x,y){
return ((100) * (x / y));
});})(u))
:cljs.core._SLASH_);
return ((function (u,op){
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
return u.call(null,((1) / x));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__22709 = u.call(null,x);
var map__22709__$1 = (((((!((map__22709 == null))))?(((((map__22709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22709):map__22709);
var m1 = cljs.core.get.call(null,map__22709__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__22710 = u.call(null,y);
var map__22710__$1 = (((((!((map__22710 == null))))?(((((map__22710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22710):map__22710);
var m2 = cljs.core.get.call(null,map__22710__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,op.call(null,m1,m2));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__22713__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.call(null,x,y),more);
};
var G__22713 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__22714__i = 0, G__22714__a = new Array(arguments.length -  2);
while (G__22714__i < G__22714__a.length) {G__22714__a[G__22714__i] = arguments[G__22714__i + 2]; ++G__22714__i;}
  more = new cljs.core.IndexedSeq(G__22714__a,0,null);
} 
return G__22713__delegate.call(this,x,y,more);};
G__22713.cljs$lang$maxFixedArity = 2;
G__22713.cljs$lang$applyTo = (function (arglist__22715){
var x = cljs.core.first(arglist__22715);
arglist__22715 = cljs.core.next(arglist__22715);
var y = cljs.core.first(arglist__22715);
var more = cljs.core.rest(arglist__22715);
return G__22713__delegate(x,y,more);
});
G__22713.cljs$core$IFn$_invoke$arity$variadic = G__22713__delegate;
return G__22713;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__22716 = null;
if (arguments.length > 2) {
var G__22717__i = 0, G__22717__a = new Array(arguments.length -  2);
while (G__22717__i < G__22717__a.length) {G__22717__a[G__22717__i] = arguments[G__22717__i + 2]; ++G__22717__i;}
G__22716 = new cljs.core.IndexedSeq(G__22717__a,0,null);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__22716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
;})(u,op))
});
garden.units.cm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.mm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.in$ = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.px = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.pt = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pc = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.percent = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.em = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.ex = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ch = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.rem = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.vw = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vh = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vmin = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmax = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.deg = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.grad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.rad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.turn = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.s = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.ms = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.Hz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.kHz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.dpi = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpcm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dppx = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=units.js.map
