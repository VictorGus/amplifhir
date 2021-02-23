// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.patient.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
app.patient.model.index = new cljs.core.Keyword("app.patient.model","index","app.patient.model/index",535100890);
app.patient.model.show_index = new cljs.core.Keyword("app.patient.model","show","app.patient.model/show",1330629796);
re_frame.core.reg_event_fx.call(null,app.patient.model.index,(function (p__25056,p__25057){
var map__25058 = p__25056;
var map__25058__$1 = (((((!((map__25058 == null))))?(((((map__25058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25058):map__25058);
var db = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25059 = p__25057;
var pid = cljs.core.nth.call(null,vec__25059,(0),null);
var phase = cljs.core.nth.call(null,vec__25059,(1),null);
var params = cljs.core.nth.call(null,vec__25059,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Patient/$search",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-query","search-query",-1077556709),(cljs.core.truth_(cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)))?clojure.string.replace.call(null,cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)),/ /,"%20"):"%20")], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("app.patient.model","patients-search","app.patient.model/patients-search",-1781782202)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,app.patient.model.index,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("app.patient.model","patients-search","app.patient.model/patients-search",-1781782202)], null),(function (p__25064){
var map__25065 = p__25064;
var map__25065__$1 = (((((!((map__25065 == null))))?(((((map__25065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25065):map__25065);
var data = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.map.call(null,((function (map__25065,map__25065__$1,data){
return (function (el){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.partial.call(null,cljs.core.map,((function (map__25065,map__25065__$1,data){
return (function (p1__25063_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__25063_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.get.call(null,p1__25063_SHARP_,new cljs.core.Keyword(null,"given","given",716253602))))].join('');
});})(map__25065,map__25065__$1,data))
));
});})(map__25065,map__25065__$1,data))
,new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data));
}));
re_frame.core.reg_event_fx.call(null,app.patient.model.show_index,(function (p__25067,p__25068){
var map__25069 = p__25067;
var map__25069__$1 = (((((!((map__25069 == null))))?(((((map__25069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);
var db = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25070 = p__25068;
var pd = cljs.core.nth.call(null,vec__25070,(0),null);
var phase = cljs.core.nth.call(null,vec__25070,(1),null);
var params = cljs.core.nth.call(null,vec__25070,(2),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("app.patient.model","patient-show","app.patient.model/patient-show",-969371542)], null)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,app.patient.model.show_index,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("app.patient.model","patient-show","app.patient.model/patient-show",-969371542)], null),(function (p__25075,p__25076){
var map__25077 = p__25075;
var map__25077__$1 = (((((!((map__25077 == null))))?(((((map__25077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25077):map__25077);
var map__25078 = cljs.core.get.call(null,map__25077__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25078__$1 = (((((!((map__25078 == null))))?(((((map__25078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25078):map__25078);
var entry = cljs.core.get.call(null,map__25078__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var vec__25079 = p__25076;
var _ = cljs.core.nth.call(null,vec__25079,(0),null);
var content = new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.update.call(null,content,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.partial.call(null,cljs.core.map,((function (content,map__25077,map__25077__$1,map__25078,map__25078__$1,entry,vec__25079,_){
return (function (p1__25074_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__25074_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.get.call(null,p1__25074_SHARP_,new cljs.core.Keyword(null,"given","given",716253602))))].join('');
});})(content,map__25077,map__25077__$1,map__25078,map__25078__$1,entry,vec__25079,_))
));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.model","success-delete","app.patient.model/success-delete",1490225522),(function (p__25084,p__25085){
var map__25086 = p__25084;
var map__25086__$1 = (((((!((map__25086 == null))))?(((((map__25086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25086):map__25086);
var db = cljs.core.get.call(null,map__25086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25087 = p__25085;
var _ = cljs.core.nth.call(null,vec__25087,(0),null);
var map__25090 = cljs.core.nth.call(null,vec__25087,(1),null);
var map__25090__$1 = (((((!((map__25090 == null))))?(((((map__25090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25090):map__25090);
var map__25091 = cljs.core.get.call(null,map__25090__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__25091__$1 = (((((!((map__25091 == null))))?(((((map__25091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25091):map__25091);
var map__25092 = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var map__25092__$1 = (((((!((map__25092 == null))))?(((((map__25092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25092):map__25092);
var map__25093 = cljs.core.get.call(null,map__25092__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__25093__$1 = (((((!((map__25093 == null))))?(((((map__25093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);
var efx = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"efx","efx",-530918729));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","success","flash/success",1921050498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"\u041F\u0430\u0446\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [efx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),""], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.patient.model","delete-patient","app.patient.model/delete-patient",1704386268),(function (p__25099,p__25100){
var map__25101 = p__25099;
var map__25101__$1 = (((((!((map__25101 == null))))?(((((map__25101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25101):map__25101);
var db = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25102 = p__25100;
var _ = cljs.core.nth.call(null,vec__25102,(0),null);
var efx = cljs.core.nth.call(null,vec__25102,(1),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("app.patient.model","success-delete","app.patient.model/success-delete",1490225522),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"efx","efx",-530918729),efx], null)], null)], null)], null);
}));

//# sourceMappingURL=model.js.map
