// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
app.patient.model.index = cljs.core.cst$kw$app$patient$model_SLASH_index;
app.patient.model.show_index = cljs.core.cst$kw$app$patient$model_SLASH_show;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.model.index,(function (p__10288,p__10289){
var map__10290 = p__10288;
var map__10290__$1 = (((((!((map__10290 == null))))?(((((map__10290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10290):map__10290);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,cljs.core.cst$kw$db);
var vec__10291 = p__10289;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10291,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10291,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10291,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,"/Patient/$search",cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search_DASH_query,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$q], null)))?clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$q], null)),/ /,"%20"):"%20")], null),cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$app$patient$model_SLASH_patients_DASH_search], null)], null);
} else {
return null;
}
}
}));
var G__10296_10303 = app.patient.model.index;
var G__10297_10304 = cljs.core.cst$kw$_LT__DASH_;
var G__10298_10305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$app$patient$model_SLASH_patients_DASH_search], null);
var G__10299_10306 = ((function (G__10296_10303,G__10297_10304,G__10298_10305){
return (function (p__10300){
var map__10301 = p__10300;
var map__10301__$1 = (((((!((map__10301 == null))))?(((((map__10301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10301):map__10301);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10301__$1,cljs.core.cst$kw$data);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10301,map__10301__$1,data,G__10296_10303,G__10297_10304,G__10298_10305){
return (function (el){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$name], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((function (map__10301,map__10301__$1,data,G__10296_10303,G__10297_10304,G__10298_10305){
return (function (p1__10295_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__10295_SHARP_,cljs.core.cst$kw$family))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__10295_SHARP_,cljs.core.cst$kw$given)))].join('');
});})(map__10301,map__10301__$1,data,G__10296_10303,G__10297_10304,G__10298_10305))
));
});})(map__10301,map__10301__$1,data,G__10296_10303,G__10297_10304,G__10298_10305))
,cljs.core.cst$kw$entry.cljs$core$IFn$_invoke$arity$1(data));
});})(G__10296_10303,G__10297_10304,G__10298_10305))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__10296_10303,G__10297_10304,G__10298_10305,G__10299_10306) : re_frame.core.reg_sub.call(null,G__10296_10303,G__10297_10304,G__10298_10305,G__10299_10306));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.model.show_index,(function (p__10307,p__10308){
var map__10309 = p__10307;
var map__10309__$1 = (((((!((map__10309 == null))))?(((((map__10309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10309):map__10309);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10309__$1,cljs.core.cst$kw$db);
var vec__10310 = p__10308;
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(2),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$app$patient$model_SLASH_patient_DASH_show], null)], null);
} else {
return null;
}
}
}));
var G__10315_10324 = app.patient.model.show_index;
var G__10316_10325 = cljs.core.cst$kw$_LT__DASH_;
var G__10317_10326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$app$patient$model_SLASH_patient_DASH_show], null);
var G__10318_10327 = ((function (G__10315_10324,G__10316_10325,G__10317_10326){
return (function (p__10319){
var map__10320 = p__10319;
var map__10320__$1 = (((((!((map__10320 == null))))?(((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10320):map__10320);
var map__10321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10320__$1,cljs.core.cst$kw$data);
var map__10321__$1 = (((((!((map__10321 == null))))?(((((map__10321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10321):map__10321);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10321__$1,cljs.core.cst$kw$entry);
var content = cljs.core.cst$kw$resource.cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(content,cljs.core.cst$kw$name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((function (content,map__10320,map__10320__$1,map__10321,map__10321__$1,entry,G__10315_10324,G__10316_10325,G__10317_10326){
return (function (p1__10314_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__10314_SHARP_,cljs.core.cst$kw$family))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__10314_SHARP_,cljs.core.cst$kw$given)))].join('');
});})(content,map__10320,map__10320__$1,map__10321,map__10321__$1,entry,G__10315_10324,G__10316_10325,G__10317_10326))
));
});})(G__10315_10324,G__10316_10325,G__10317_10326))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__10315_10324,G__10316_10325,G__10317_10326,G__10318_10327) : re_frame.core.reg_sub.call(null,G__10315_10324,G__10316_10325,G__10317_10326,G__10318_10327));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$model_SLASH_success_DASH_delete,(function (p__10328,p__10329){
var map__10330 = p__10328;
var map__10330__$1 = (((((!((map__10330 == null))))?(((((map__10330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10330):map__10330);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10330__$1,cljs.core.cst$kw$db);
var vec__10331 = p__10329;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10331,(0),null);
var map__10334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10331,(1),null);
var map__10334__$1 = (((((!((map__10334 == null))))?(((((map__10334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10334):map__10334);
var map__10335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,cljs.core.cst$kw$request);
var map__10335__$1 = (((((!((map__10335 == null))))?(((((map__10335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10335):map__10335);
var map__10336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10335__$1,cljs.core.cst$kw$success);
var map__10336__$1 = (((((!((map__10336 == null))))?(((((map__10336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10336):map__10336);
var map__10337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10336__$1,cljs.core.cst$kw$params);
var map__10337__$1 = (((((!((map__10337 == null))))?(((((map__10337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10337):map__10337);
var efx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10337__$1,cljs.core.cst$kw$efx);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch_DASH_n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,""], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$model_SLASH_delete_DASH_patient,(function (p__10343,p__10344){
var map__10345 = p__10343;
var map__10345__$1 = (((((!((map__10345 == null))))?(((((map__10345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10345):map__10345);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,cljs.core.cst$kw$db);
var vec__10346 = p__10344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10346,(0),null);
var efx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10346,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$method,"DELETE",cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,cljs.core.cst$kw$app$patient$model_SLASH_success_DASH_delete,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$efx,efx], null)], null)], null)], null);
}));
