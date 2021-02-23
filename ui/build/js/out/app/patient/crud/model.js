// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.crud.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.patient.crud.form');
app.patient.crud.model.edit_index = cljs.core.cst$kw$app$patient$crud$model_SLASH_edit;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_init_DASH_edit_DASH_form,(function (p__10179,p__10180){
var map__10181 = p__10179;
var map__10181__$1 = (((((!((map__10181 == null))))?(((((map__10181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10181):map__10181);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10181__$1,cljs.core.cst$kw$db);
var vec__10182 = p__10180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10182,(0),null);
var map__10185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10182,(1),null);
var map__10185__$1 = (((((!((map__10185 == null))))?(((((map__10185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10185):map__10185);
var map__10186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10185__$1,cljs.core.cst$kw$data);
var map__10186__$1 = (((((!((map__10186 == null))))?(((((map__10186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10186):map__10186);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10186__$1,cljs.core.cst$kw$entry);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$patient$crud$form_SLASH_init,entry], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.crud.model.edit_index,(function (p__10190,p__10191){
var map__10192 = p__10190;
var map__10192__$1 = (((((!((map__10192 == null))))?(((((map__10192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10192):map__10192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10192__$1,cljs.core.cst$kw$db);
var vec__10193 = p__10191;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,(2),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,cljs.core.cst$kw$app$patient$crud$model_SLASH_init_DASH_edit_DASH_form], null),cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$app$patient$crud$model_SLASH_patient_DASH_edit], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_success_DASH_action,(function (p__10197,p__10198){
var map__10199 = p__10197;
var map__10199__$1 = (((((!((map__10199 == null))))?(((((map__10199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10199):map__10199);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10199__$1,cljs.core.cst$kw$db);
var vec__10200 = p__10198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200,(0),null);
var map__10203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200,(1),null);
var map__10203__$1 = (((((!((map__10203 == null))))?(((((map__10203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10203):map__10203);
var map__10204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10203__$1,cljs.core.cst$kw$request);
var map__10204__$1 = (((((!((map__10204 == null))))?(((((map__10204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10204):map__10204);
var map__10205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10204__$1,cljs.core.cst$kw$success);
var map__10205__$1 = (((((!((map__10205 == null))))?(((((map__10205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10205):map__10205);
var map__10206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10205__$1,cljs.core.cst$kw$params);
var map__10206__$1 = (((((!((map__10206 == null))))?(((((map__10206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10206):map__10206);
var efx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$efx);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$id);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$msg);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch_DASH_n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,msg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,(cljs.core.truth_(id)?["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):"")], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_save_DASH_changes,(function (p__10212,p__10213){
var map__10214 = p__10212;
var map__10214__$1 = (((((!((map__10214 == null))))?(((((map__10214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10214):map__10214);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10214__$1,cljs.core.cst$kw$db);
var vec__10215 = p__10213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10215,(0),null);
var efx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10215,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
return app.patient.crud.form.eval_form(db,((function (id,map__10214,map__10214__$1,db,vec__10215,_,efx){
return (function (values){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$method,"PUT",cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,cljs.core.cst$kw$app$patient$crud$model_SLASH_success_DASH_action,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$efx,efx,cljs.core.cst$kw$msg,"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D",cljs.core.cst$kw$id,id], null)], null),cljs.core.cst$kw$body,values], null)], null);
});})(id,map__10214,map__10214__$1,db,vec__10215,_,efx))
);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_patient_DASH_create,(function (p__10219,p__10220){
var map__10221 = p__10219;
var map__10221__$1 = (((((!((map__10221 == null))))?(((((map__10221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10221):map__10221);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10221__$1,cljs.core.cst$kw$db);
var vec__10222 = p__10220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10222,(0),null);
var efx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10222,(1),null);
return app.patient.crud.form.eval_form(db,((function (map__10221,map__10221__$1,db,vec__10222,_,efx){
return (function (values){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,"/Patient",cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,cljs.core.cst$kw$app$patient$crud$model_SLASH_send_DASH_data,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$values,values,cljs.core.cst$kw$efx,efx], null)], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$iden,cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(values)], null)], null)], null);
});})(map__10221,map__10221__$1,db,vec__10222,_,efx))
);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_send_DASH_data,(function (p__10226,p__10227){
var map__10228 = p__10226;
var map__10228__$1 = (((((!((map__10228 == null))))?(((((map__10228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10228):map__10228);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10228__$1,cljs.core.cst$kw$db);
var vec__10229 = p__10227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10229,(0),null);
var map__10232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10229,(1),null);
var map__10232__$1 = (((((!((map__10232 == null))))?(((((map__10232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10232):map__10232);
var map__10233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10232__$1,cljs.core.cst$kw$request);
var map__10233__$1 = (((((!((map__10233 == null))))?(((((map__10233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10233):map__10233);
var map__10234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10233__$1,cljs.core.cst$kw$success);
var map__10234__$1 = (((((!((map__10234 == null))))?(((((map__10234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10234):map__10234);
var map__10235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10234__$1,cljs.core.cst$kw$params);
var map__10235__$1 = (((((!((map__10235 == null))))?(((((map__10235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10235):map__10235);
var efx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10235__$1,cljs.core.cst$kw$efx);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10235__$1,cljs.core.cst$kw$values);
var map__10236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10232__$1,cljs.core.cst$kw$data);
var map__10236__$1 = (((((!((map__10236 == null))))?(((((map__10236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10236):map__10236);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10236__$1,cljs.core.cst$kw$entry);
var G__10243 = cljs.core.PersistentArrayMap.EMPTY;
var G__10243__$1 = ((cljs.core.empty_QMARK_(entry))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10243,cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$uri,"/Patient",cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,cljs.core.cst$kw$app$patient$crud$model_SLASH_success_DASH_action,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$efx,efx,cljs.core.cst$kw$msg,"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"], null)], null),cljs.core.cst$kw$body,values], null)):G__10243);
if(cljs.core.truth_(entry)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10243__$1,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u041E\u041C\u0421 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"], null)], null));
} else {
return G__10243__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$model_SLASH_cancel_DASH_action,(function (p__10244,p__10245){
var map__10246 = p__10244;
var map__10246__$1 = (((((!((map__10246 == null))))?(((((map__10246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10246):map__10246);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,cljs.core.cst$kw$db);
var vec__10247 = p__10245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(0),null);
var efx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,(cljs.core.truth_(id)?["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):"")], null)], null)], null);
}));
var G__10251_10265 = app.patient.crud.model.edit_index;
var G__10252_10266 = cljs.core.cst$kw$_LT__DASH_;
var G__10253_10267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$app$patient$crud$model_SLASH_patient_DASH_edit], null);
var G__10254_10268 = cljs.core.cst$kw$_LT__DASH_;
var G__10255_10269 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_collection_DASH_indexes,app.patient.crud.form.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$address], null)], null);
var G__10256_10270 = ((function (G__10251_10265,G__10252_10266,G__10253_10267,G__10254_10268,G__10255_10269){
return (function (p__10257){
var vec__10258 = p__10257;
var map__10261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10258,(0),null);
var map__10261__$1 = (((((!((map__10261 == null))))?(((((map__10261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10261):map__10261);
var map__10262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10261__$1,cljs.core.cst$kw$data);
var map__10262__$1 = (((((!((map__10262 == null))))?(((((map__10262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10262):map__10262);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,cljs.core.cst$kw$entry);
var address_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10258,(1),null);
return address_ids;
});})(G__10251_10265,G__10252_10266,G__10253_10267,G__10254_10268,G__10255_10269))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__10251_10265,G__10252_10266,G__10253_10267,G__10254_10268,G__10255_10269,G__10256_10270) : re_frame.core.reg_sub.call(null,G__10251_10265,G__10252_10266,G__10253_10267,G__10254_10268,G__10255_10269,G__10256_10270));
app.patient.crud.model.create_index = cljs.core.cst$kw$app$patient$crud$model_SLASH_create;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.crud.model.create_index,(function (p__10271,p__10272){
var map__10273 = p__10271;
var map__10273__$1 = (((((!((map__10273 == null))))?(((((map__10273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10273):map__10273);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10273__$1,cljs.core.cst$kw$db);
var vec__10274 = p__10272;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10274,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10274,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10274,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$patient$crud$form_SLASH_init], null)], null);
} else {
return null;
}
}
}));
var G__10278_10282 = app.patient.crud.model.create_index;
var G__10279_10283 = cljs.core.cst$kw$_LT__DASH_;
var G__10280_10284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_collection_DASH_indexes,app.patient.crud.form.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$address], null)], null);
var G__10281_10285 = ((function (G__10278_10282,G__10279_10283,G__10280_10284){
return (function (address_ids){
return address_ids;
});})(G__10278_10282,G__10279_10283,G__10280_10284))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__10278_10282,G__10279_10283,G__10280_10284,G__10281_10285) : re_frame.core.reg_sub.call(null,G__10278_10282,G__10279_10283,G__10280_10284,G__10281_10285));
