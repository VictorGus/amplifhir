// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__7875_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__7875_SHARP_)));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"*");
});
route_map.core.get_params = (function route_map$core$get_params(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7876){
var vec__7877 = p__7876;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7877,(1),null);
return cljs.core.vector_QMARK_(k);
}),node);
} else {
return null;
}
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7880){
var vec__7881 = p__7880;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7881,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__4120__auto__ = cljs.core.vector_QMARK_(k);
if(and__4120__auto__){
var f = cljs.core.first(k);
return (((!((f instanceof cljs.core.Keyword)))) && (cljs.core.fn_QMARK_(f)));
} else {
return and__4120__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__7884){
var vec__7885 = p__7884;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7885,(1),null);
var temp__5718__auto__ = (function (){var fexpr__7888 = cljs.core.first(k);
return (fexpr__7888.cljs$core$IFn$_invoke$arity$1 ? fexpr__7888.cljs$core$IFn$_invoke$arity$1(x) : fexpr__7888.call(null,x));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7889){
var vec__7890 = p__7889;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7890,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__7893,params,parents,wgt){
var vec__7894 = p__7893;
var seq__7895 = cljs.core.seq(vec__7894);
var first__7896 = cljs.core.first(seq__7895);
var seq__7895__$1 = cljs.core.next(seq__7895);
var x = first__7896;
var rpth = seq__7895__$1;
var pth = vec__7894;
if(cljs.core.empty_QMARK_(pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(node,cljs.core.cst$kw$_DOT_)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$params,params)),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,parents,cljs.core.cst$kw$match,node,cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_(node))?cljs.core.deref(node):node);
var pnode = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(node__$1);
if(and__4120__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$params,params);
} else {
return and__4120__auto__;
}
})();
var acc__$1 = (function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var branch = temp__5718__auto__;
var G__7897 = acc;
var G__7898 = branch;
var G__7899 = rpth;
var G__7900 = params;
var G__7901 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7902 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7897,G__7898,G__7899,G__7900,G__7901,G__7902) : route_map.core._match.call(null,G__7897,G__7898,G__7899,G__7900,G__7901,G__7902));
} else {
return acc;
}
})();
var acc__$2 = (((x instanceof cljs.core.Keyword))?acc__$1:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (node__$1,pnode,acc__$1,vec__7894,seq__7895,first__7896,seq__7895__$1,x,rpth,pth){
return (function (acc__$2,p__7903){
var vec__7904 = p__7903;
var vec__7907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7904,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7907,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7904,(1),null);
if(cljs.core.fn_QMARK_(k)){
var temp__5718__auto__ = route_map.core.match_fn_params(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__7910 = temp__5718__auto__;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7910,(0),null);
var branch__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7910,(1),null);
var G__7913 = acc__$2;
var G__7914 = branch__$1;
var G__7915 = rpth;
var G__7916 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,fparams], 0));
var G__7917 = parents;
var G__7918 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7913,G__7914,G__7915,G__7916,G__7917,G__7918) : route_map.core._match.call(null,G__7913,G__7914,G__7915,G__7916,G__7917,G__7918));
} else {
return acc__$2;
}
} else {
if(route_map.core.is_glob_QMARK_(k)){
if((cljs.core.last(pth) instanceof cljs.core.Keyword)){
var G__7919 = acc__$2;
var G__7920 = branch;
var G__7921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth)], null);
var G__7922 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth)));
var G__7923 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7924 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7919,G__7920,G__7921,G__7922,G__7923,G__7924) : route_map.core._match.call(null,G__7919,G__7920,G__7921,G__7922,G__7923,G__7924));
} else {
var G__7925 = acc__$2;
var G__7926 = branch;
var G__7927 = cljs.core.PersistentVector.EMPTY;
var G__7928 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth));
var G__7929 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7930 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7925,G__7926,G__7927,G__7928,G__7929,G__7930) : route_map.core._match.call(null,G__7925,G__7926,G__7927,G__7928,G__7929,G__7930));
}
} else {
if(cljs.core.truth_((function (){var temp__5720__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
return cljs.core.set_QMARK_(opts);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.contains_QMARK_(opts,x)){
var G__7931 = acc__$2;
var G__7932 = branch;
var G__7933 = rpth;
var G__7934 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__7935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7936 = (wgt + (5));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7931,G__7932,G__7933,G__7934,G__7935,G__7936) : route_map.core._match.call(null,G__7931,G__7932,G__7933,G__7934,G__7935,G__7936));
} else {
return acc__$2;
}
} else {
if(cljs.core.truth_((function (){var temp__5720__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(opts),java.util.regex.Pattern);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(cljs.core.re_find(opts,x))){
var G__7937 = acc__$2;
var G__7938 = branch;
var G__7939 = rpth;
var G__7940 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__7941 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7942 = (wgt + (4));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7937,G__7938,G__7939,G__7940,G__7941,G__7942) : route_map.core._match.call(null,G__7937,G__7938,G__7939,G__7940,G__7941,G__7942));
} else {
return acc__$2;
}
} else {
var G__7943 = acc__$2;
var G__7944 = branch;
var G__7945 = rpth;
var G__7946 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__7947 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__7948 = (wgt + (2));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__7943,G__7944,G__7945,G__7946,G__7947,G__7948) : route_map.core._match.call(null,G__7943,G__7944,G__7945,G__7946,G__7947,G__7948));

}
}
}
}
});})(node__$1,pnode,acc__$1,vec__7894,seq__7895,first__7896,seq__7895__$1,x,rpth,pth))
,acc__$1,route_map.core.get_params(node__$1)));
return acc__$2;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_(path))?(function (){var vec__7949 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7949,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7949,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth))));
})():route_map.core.pathify(path));
var result = route_map.core._match(cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,result));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__7952){
var map__7953 = p__7952;
var map__7953__$1 = (((((!((map__7953 == null))))?(((((map__7953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7953):map__7953);
var req = map__7953__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7953__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7953__$1,cljs.core.cst$kw$uri);
var temp__5718__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__7955 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__7955) : h.call(null,G__7955));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7956_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__7956_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7957_SHARP_){
return cljs.core.first(p1__7957_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7958_SHARP_){
var vec__7959 = p1__7958_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7959,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7959,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (params,static_paths){
return (function (p1__7962_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__7962_SHARP_);
});})(params,static_paths))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_found){
return (function (p1__7963_SHARP_){
var vec__7964 = ((typeof p1__7963_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7963_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__7963_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__7963_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",p1__7963_SHARP_].join(''))], null):(((p1__7963_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__7963_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__7963_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__7963_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7963_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7963_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7964,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7964,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7964,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7964,(3),null);
var G__7967 = ((cljs.core.var_QMARK_(next_routes))?cljs.core.deref(next_routes):next_routes);
var G__7968 = name;
var G__7969 = next_auto_name;
var G__7970 = next_params;
var G__7971 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__7967,G__7968,G__7969,G__7970,G__7971) : route_map.core.find_url.call(null,G__7967,G__7968,G__7969,G__7970,G__7971));
});})(path_found))
,route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__7973 = arguments.length;
switch (G__7973) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;

