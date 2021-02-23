// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
reagent.impl.template.global$module$react = goog.global["React"];
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$id,cljs.core.cst$sym$className], null);
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5722__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5722__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__5663_5666 = reagent.impl.template.prop_name_cache;
var G__5664_5667 = cljs.core.name(k);
var G__5665_5668 = v;
goog.object.set(G__5663_5666,G__5664_5667,G__5665_5668);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__5669 = o;
var G__5670_5673 = G__5669;
var G__5671_5674 = reagent.impl.template.cached_prop_name(k);
var G__5672_5675 = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v));
goog.object.set(G__5670_5673,G__5671_5674,G__5672_5675);

return G__5669;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__5676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__5676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5677__i = 0, G__5677__a = new Array(arguments.length -  0);
while (G__5677__i < G__5677__a.length) {G__5677__a[G__5677__i] = arguments[G__5677__i + 0]; ++G__5677__i;}
  args = new cljs.core.IndexedSeq(G__5677__a,0,null);
} 
return G__5676__delegate.call(this,args);};
G__5676.cljs$lang$maxFixedArity = 0;
G__5676.cljs$lang$applyTo = (function (arglist__5678){
var args = cljs.core.seq(arglist__5678);
return G__5676__delegate(args);
});
G__5676.cljs$core$IFn$_invoke$arity$variadic = G__5676__delegate;
return G__5676;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5722__auto__ = reagent.impl.template.cache_get(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5722__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__5679_5682 = reagent.impl.template.custom_prop_name_cache;
var G__5680_5683 = cljs.core.name(k);
var G__5681_5684 = v;
goog.object.set(G__5679_5682,G__5680_5683,G__5681_5684);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__5685 = o;
var G__5686_5689 = G__5685;
var G__5687_5690 = reagent.impl.template.cached_custom_prop_name(k);
var G__5688_5691 = reagent.impl.template.convert_prop_value(v);
goog.object.set(G__5686_5689,G__5687_5690,G__5688_5691);

return G__5685;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__5692__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__5692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5693__i = 0, G__5693__a = new Array(arguments.length -  0);
while (G__5693__i < G__5693__a.length) {G__5693__a[G__5693__i] = arguments[G__5693__i + 0]; ++G__5693__i;}
  args = new cljs.core.IndexedSeq(G__5693__a,0,null);
} 
return G__5692__delegate.call(this,args);};
G__5692.cljs$lang$maxFixedArity = 0;
G__5692.cljs$lang$applyTo = (function (arglist__5694){
var args = cljs.core.seq(arglist__5694);
return G__5692__delegate(args);
});
G__5692.cljs$core$IFn$_invoke$arity$variadic = G__5692__delegate;
return G__5692;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__5695 = props;
var G__5695__$1 = (((((!((id == null)))) && ((cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__5695,cljs.core.cst$kw$id,id):G__5695);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__5695__$1,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props)));
} else {
return G__5695__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class((function (){var G__5696 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__5696,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__5696;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return reagent.impl.template.convert_prop_value(props__$1);
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.find_dom_node !== 'undefined')){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__5697){
var map__5698 = p__5697;
var map__5698__$1 = (((((!((map__5698 == null))))?(((((map__5698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5698):map__5698);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5698__$1,cljs.core.cst$kw$on_DASH_write);
if((!((((node === document.activeElement)) && (reagent.impl.template.has_selection_api_QMARK_(node.type)) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
component.cljsDOMValue = rendered_value;

node.value = rendered_value;

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return reagent.impl.batching.do_after_render(((function (node_value,map__5698,map__5698__$1,on_write){
return (function (){
return (reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : reagent.impl.template.input_component_set_value.call(null,component));
});})(node_value,map__5698,map__5698__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
component.cljsDOMValue = rendered_value;

node.value = rendered_value;

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

node.selectionStart = new_cursor_offset;

return node.selectionEnd = new_cursor_offset;
}
}
});
reagent.impl.template.input_component_set_value = (function reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
this$.cljsInputDirty = false;

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = (reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
this$.cljsDOMValue = e.target.value;

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
this$.cljsInputDirty = true;

reagent.impl.batching.do_after_render((function (){
return reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((jsprops == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4120__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
this$.cljsInputLive = true;

this$.cljsDOMValue = value;
}

this$.cljsRenderedValue = value;

delete jsprops["value"];

jsprops.defaultValue = value;

return jsprops.onChange = ((function (v,value,on_change){
return (function (p1__5700_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__5700_SHARP_);
});})(v,value,on_change))
;
} else {
return null;
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return this$.cljsInputLive = null;
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__5701 = x;
switch (G__5701) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"ReagentInput",cljs.core.cst$kw$component_DASH_did_DASH_update,reagent.impl.template.input_component_set_value,cljs.core.cst$kw$component_DASH_will_DASH_unmount,reagent.impl.template.input_unmount,cljs.core.cst$kw$reagent_DASH_render,(function (argv,component,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,component,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$id,cljs.core.cst$sym$className,cljs.core.cst$sym$custom], null);
});

reagent.impl.template.HiccupTag.cljs$lang$type = true;

reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag";

reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/HiccupTag");
});

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__5703 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5703,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5703,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5703,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$key);
}catch (e5706){var e = e5706;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5722__auto__ = reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5722__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5722__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class(tag);
var jsprops = ({});
jsprops.argv = v;

var temp__5724__auto___5707 = reagent.impl.template.key_from_vec(v);
if((temp__5724__auto___5707 == null)){
} else {
var key_5708 = temp__5724__auto___5707;
jsprops.key = key_5708;
}

return (reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$2(c,jsprops) : reagent.impl.template.global$module$react.createElement.call(null,c,jsprops));
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4131__auto__ = reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5724__auto___5709 = reagent.impl.template.key_from_vec(argv);
if((temp__5724__auto___5709 == null)){
} else {
var key_5710 = temp__5724__auto___5709;
jsprops.key = key_5710;
}

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,reagent.impl.template.global$module$react.Fragment,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,reagent.impl.template.global$module$react.Fragment,jsprops,first_child));
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5722__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5722__auto__ == null)){
var v = reagent.impl.template.parse_tag(x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5722__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4131__auto__ = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_(component)){
var G__5711 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input(),argv,component,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__5711) : reagent.impl.template.as_element.call(null,G__5711));
} else {
var temp__5724__auto___5712 = reagent.impl.template.get_key(cljs.core.meta(argv));
if((temp__5724__auto___5712 == null)){
} else {
var key_5713 = temp__5724__auto___5712;
jsprops.key = key_5713;
}

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,component,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child));
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = reagent.impl.util.fun_name(x);
var G__5715 = n;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__5715)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__5715)){
return x;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
}
} else {
return x;
}
}),coll));

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5718 = arguments.length;
var i__4731__auto___5719 = (0);
while(true){
if((i__4731__auto___5719 < len__4730__auto___5718)){
args__4736__auto__.push((arguments[i__4731__auto___5719]));

var G__5720 = (i__4731__auto___5719 + (1));
i__4731__auto___5719 = G__5720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",reagent.impl.template.str_coll(v),"\n",reagent.impl.component.comp_name()].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq5716){
var G__5717 = cljs.core.first(seq5716);
var seq5716__$1 = cljs.core.next(seq5716);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5717,seq5716__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$_LT__GT_,tag)){
return reagent.impl.template.fragment_element(v);
} else {
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__5721 = pos;
switch (G__5721) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

return reagent.impl.template.native_element(reagent.impl.template.__GT_HiccupTag(component,null,null,null),v,(2));

break;
default:
var G__5723 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
v = G__5723;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1));
} else {
return reagent.impl.template.reag_element(tag,v);

}
}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.template.as_element,s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((reagent.impl.template.key_from_vec(val) == null)))){
o.no_key = true;
} else {
}

return reagent.impl.template.as_element(val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__5725 = reagent.ratom.check_derefs(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,component,jsprops,first_child){
var G__5728 = (cljs.core.count(argv) - first_child);
switch (G__5728) {
case (0):
return (reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$2(component,jsprops) : reagent.impl.template.global$module$react.createElement.call(null,component,jsprops));

break;
case (1):
var G__5729 = component;
var G__5730 = jsprops;
var G__5731 = reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return (reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$3 ? reagent.impl.template.global$module$react.createElement.cljs$core$IFn$_invoke$arity$3(G__5729,G__5730,G__5731) : reagent.impl.template.global$module$react.createElement.call(null,G__5729,G__5730,G__5731));

break;
default:
return reagent.impl.template.global$module$react.createElement.apply(null,cljs.core.reduce_kv(((function (G__5728){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__5728))
,[component,jsprops],argv));

}
});
