// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.sample_page.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
app.sample_page.model.index = new cljs.core.Keyword("app.sample-page.model","index","app.sample-page.model/index",-1325001627);
app.sample_page.model.show_index = new cljs.core.Keyword("app.sample-page.model","show","app.sample-page.model/show",-1099633889);
re_frame.core.reg_event_fx.call(null,app.sample_page.model.index,(function (p__22184,p__22185){
var map__22186 = p__22184;
var map__22186__$1 = (((((!((map__22186 == null))))?(((((map__22186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22186):map__22186);
var db = cljs.core.get.call(null,map__22186__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22187 = p__22185;
var pid = cljs.core.nth.call(null,vec__22187,(0),null);
var phase = cljs.core.nth.call(null,vec__22187,(1),null);
var params = cljs.core.nth.call(null,vec__22187,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.sample-page.model","set-loading-status-true","app.sample-page.model/set-loading-status-true",-1147415631)], null),new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Patient/$search",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-query","search-query",-1077556709),(cljs.core.truth_(cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)))?clojure.string.replace.call(null,cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)),/ /,"%20"):"%20")], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("app.sample-page.model","patients-search","app.sample-page.model/patients-search",-1629420809)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,app.sample_page.model.index,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("app.sample-page.model","patients-search","app.sample-page.model/patients-search",-1629420809)], null),(function (p__22191){
var map__22192 = p__22191;
var map__22192__$1 = (((((!((map__22192 == null))))?(((((map__22192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22192):map__22192);
var data = cljs.core.get.call(null,map__22192__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));

//# sourceMappingURL=model.js.map
