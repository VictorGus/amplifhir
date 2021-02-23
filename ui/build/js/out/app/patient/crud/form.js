// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.crud.form');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zenform.model');
goog.require('zenform.validators');
app.patient.crud.form.form_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$edit], null);
app.patient.crud.form.form_schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$form,cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$family,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$given,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$patronymic,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$address,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$collection,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$form,cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$city,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$postalCode,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$country,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null)], null)], null)], null),cljs.core.cst$kw$birthDate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$gender,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"male",cljs.core.cst$kw$display,"\u041C\u0443\u0436\u0441\u043A\u043E\u0439"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"female",cljs.core.cst$kw$display,"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"other",cljs.core.cst$kw$display,"\u0414\u0440\u0443\u0433\u043E\u0439"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"unknown",cljs.core.cst$kw$display,"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D"], null)], null)], null),cljs.core.cst$kw$identifier,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$validators,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u041E\u041C\u0421"], null)], null)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$crud$form_SLASH_init,(function (p__10159,p__10160){
var map__10161 = p__10159;
var map__10161__$1 = (((((!((map__10161 == null))))?(((((map__10161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10161):map__10161);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10161__$1,cljs.core.cst$kw$db);
var vec__10162 = p__10160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(0),null);
var map__10165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(1),null);
var map__10165__$1 = (((((!((map__10165 == null))))?(((((map__10165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10165):map__10165);
var resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10165__$1,cljs.core.cst$kw$resource);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_init,app.patient.crud.form.form_path,app.patient.crud.form.form_schema,(function (){var resource__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(resource,cljs.core.cst$kw$name,((function (map__10161,map__10161__$1,db,vec__10162,_,map__10165,map__10165__$1,resource){
return (function (p__10168){
var vec__10169 = p__10168;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10169,(0),null);
var vec__10172 = cljs.core.cst$kw$given.cljs$core$IFn$_invoke$arity$1(n);
var given = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172,(0),null);
var patronymic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,given,cljs.core.cst$kw$patronymic,patronymic], null)], 0));
});})(map__10161,map__10161__$1,db,vec__10162,_,map__10165,map__10165__$1,resource))
);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource__$1,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(resource__$1,cljs.core.cst$kw$name),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$given,cljs.core.cst$kw$family,cljs.core.cst$kw$patronymic], null))], 0)),cljs.core.cst$kw$name);
})()], null)], null);
}));
app.patient.crud.form.eval_form = (function app$patient$crud$form$eval_form(db,fx){
var map__10175 = zenform.model.eval_form(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,app.patient.crud.form.form_path));
var map__10175__$1 = (((((!((map__10175 == null))))?(((((map__10175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10175):map__10175);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10175__$1,cljs.core.cst$kw$errors);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10175__$1,cljs.core.cst$kw$form);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10175__$1,cljs.core.cst$kw$value);
var content = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$family], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$given.cljs$core$IFn$_invoke$arity$1(value),cljs.core.cst$kw$patronymic.cljs$core$IFn$_invoke$arity$1(value)], null)], null)], 0))], null)),cljs.core.cst$kw$family,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$given,cljs.core.cst$kw$patronymic], 0));
if(cljs.core.empty_QMARK_(errors)){
return (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(content) : fx.call(null,content));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,app.patient.crud.form.form_path,form),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(errors)))], null)], null)], null);
}
});
