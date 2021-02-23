// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.patient.crud.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.patient.crud.form');
app.patient.crud.model.edit_index = new cljs.core.Keyword("app.patient.crud.model","edit","app.patient.crud.model/edit",-734407333);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.crud.model","init-edit-form","app.patient.crud.model/init-edit-form",1046603438),(function (p__23033,p__23034){
var map__23035 = p__23033;
var map__23035__$1 = (((((!((map__23035 == null))))?(((((map__23035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23035):map__23035);
var db = cljs.core.get.call(null,map__23035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23036 = p__23034;
var _ = cljs.core.nth.call(null,vec__23036,(0),null);
var map__23039 = cljs.core.nth.call(null,vec__23036,(1),null);
var map__23039__$1 = (((((!((map__23039 == null))))?(((((map__23039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23039):map__23039);
var map__23040 = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23040__$1 = (((((!((map__23040 == null))))?(((((map__23040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23040):map__23040);
var entry = cljs.core.get.call(null,map__23040__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.patient.crud.form","init","app.patient.crud.form/init",-817686168),entry], null)], null);
}));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patient.crud.model.edit_index], null));
re_frame.core.reg_event_fx.call(null,app.patient.crud.model.edit_index,(function (p__23044,p__23045){
var map__23046 = p__23044;
var map__23046__$1 = (((((!((map__23046 == null))))?(((((map__23046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23046):map__23046);
var db = cljs.core.get.call(null,map__23046__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23047 = p__23045;
var pid = cljs.core.nth.call(null,vec__23047,(0),null);
var phase = cljs.core.nth.call(null,vec__23047,(1),null);
var params = cljs.core.nth.call(null,vec__23047,(2),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("app.patient.crud.model","init-edit-form","app.patient.crud.model/init-edit-form",1046603438)], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("app.patient.crud.model","patient-edit","app.patient.crud.model/patient-edit",-1416136632)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.crud.model","success-action","app.patient.crud.model/success-action",20459693),(function (p__23051,p__23052){
var map__23053 = p__23051;
var map__23053__$1 = (((((!((map__23053 == null))))?(((((map__23053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23053):map__23053);
var db = cljs.core.get.call(null,map__23053__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23054 = p__23052;
var _ = cljs.core.nth.call(null,vec__23054,(0),null);
var map__23057 = cljs.core.nth.call(null,vec__23054,(1),null);
var map__23057__$1 = (((((!((map__23057 == null))))?(((((map__23057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23057):map__23057);
var map__23058 = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__23058__$1 = (((((!((map__23058 == null))))?(((((map__23058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23058):map__23058);
var map__23059 = cljs.core.get.call(null,map__23058__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var map__23059__$1 = (((((!((map__23059 == null))))?(((((map__23059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23059):map__23059);
var map__23060 = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__23060__$1 = (((((!((map__23060 == null))))?(((((map__23060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060):map__23060);
var efx = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"efx","efx",-530918729));
var id = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","success","flash/success",1921050498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),(cljs.core.truth_(id)?["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):"")], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.crud.model","save-changes","app.patient.crud.model/save-changes",-1299490904),(function (p__23066,p__23067){
var map__23068 = p__23066;
var map__23068__$1 = (((((!((map__23068 == null))))?(((((map__23068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23068):map__23068);
var db = cljs.core.get.call(null,map__23068__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23069 = p__23067;
var _ = cljs.core.nth.call(null,vec__23069,(0),null);
var efx = cljs.core.nth.call(null,vec__23069,(1),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return app.patient.crud.form.eval_form.call(null,db,((function (id,map__23068,map__23068__$1,db,vec__23069,_,efx){
return (function (values){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("app.patient.crud.model","success-action","app.patient.crud.model/success-action",20459693),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"efx","efx",-530918729),efx,new cljs.core.Keyword(null,"msg","msg",-1386103444),"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D",new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),values], null)], null);
});})(id,map__23068,map__23068__$1,db,vec__23069,_,efx))
);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.crud.model","patient-create","app.patient.crud.model/patient-create",-671781487),(function (p__23073,p__23074){
var map__23075 = p__23073;
var map__23075__$1 = (((((!((map__23075 == null))))?(((((map__23075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23075):map__23075);
var db = cljs.core.get.call(null,map__23075__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23076 = p__23074;
var _ = cljs.core.nth.call(null,vec__23076,(0),null);
var efx = cljs.core.nth.call(null,vec__23076,(1),null);
return app.patient.crud.form.eval_form.call(null,db,((function (map__23075,map__23075__$1,db,vec__23076,_,efx){
return (function (values){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Patient",new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("app.patient.crud.model","success-action","app.patient.crud.model/success-action",20459693),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"efx","efx",-530918729),efx,new cljs.core.Keyword(null,"msg","msg",-1386103444),"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"], null)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u041E\u041C\u0421 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),values], null)], null);
});})(map__23075,map__23075__$1,db,vec__23076,_,efx))
);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.crud.model","cancel-action","app.patient.crud.model/cancel-action",779765118),(function (p__23080,p__23081){
var map__23082 = p__23080;
var map__23082__$1 = (((((!((map__23082 == null))))?(((((map__23082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23082):map__23082);
var db = cljs.core.get.call(null,map__23082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23083 = p__23081;
var _ = cljs.core.nth.call(null,vec__23083,(0),null);
var efx = cljs.core.nth.call(null,vec__23083,(1),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),(cljs.core.truth_(id)?["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):"")], null)], null)], null);
}));
re_frame.core.reg_sub.call(null,app.patient.crud.model.edit_index,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("app.patient.crud.model","patient-edit","app.patient.crud.model/patient-edit",-1416136632)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","collection-indexes","zf/collection-indexes",876236944),app.patient.crud.form.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null)], null),(function (p__23087){
var vec__23088 = p__23087;
var map__23091 = cljs.core.nth.call(null,vec__23088,(0),null);
var map__23091__$1 = (((((!((map__23091 == null))))?(((((map__23091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23091):map__23091);
var map__23092 = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23092__$1 = (((((!((map__23092 == null))))?(((((map__23092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23092):map__23092);
var entry = cljs.core.get.call(null,map__23092__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var address_ids = cljs.core.nth.call(null,vec__23088,(1),null);
return address_ids;
}));
app.patient.crud.model.create_index = new cljs.core.Keyword("app.patient.crud.model","create","app.patient.crud.model/create",-531141159);
re_frame.core.reg_event_fx.call(null,app.patient.crud.model.create_index,(function (p__23095,p__23096){
var map__23097 = p__23095;
var map__23097__$1 = (((((!((map__23097 == null))))?(((((map__23097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23097):map__23097);
var db = cljs.core.get.call(null,map__23097__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23098 = p__23096;
var pid = cljs.core.nth.call(null,vec__23098,(0),null);
var phase = cljs.core.nth.call(null,vec__23098,(1),null);
var params = cljs.core.nth.call(null,vec__23098,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.patient.crud.form","init","app.patient.crud.form/init",-817686168)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,app.patient.crud.model.create_index,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zf","collection-indexes","zf/collection-indexes",876236944),app.patient.crud.form.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null)], null),(function (address_ids){
return address_ids;
}));

//# sourceMappingURL=model.js.map
