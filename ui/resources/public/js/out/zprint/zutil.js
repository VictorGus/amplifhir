// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__36794 = arguments.length;
switch (G__36794) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.call(null,rewrite_clj.zip.right,zloc);
});

zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return zprint.zutil.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc);
});

zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2;

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__36796 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__36796,(0),null);
var zpath = cljs.core.nth.call(null,vec__36796,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return zprint.zutil.down_STAR_.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond_no_comment = (function zprint$zutil$zsecond_no_comment(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst_no_comment.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__36799 = zprint.zutil.zfirst.call(null,zloc);
var G__36799__$1 = (((G__36799 == null))?null:zprint.zutil.right_STAR_.call(null,G__36799));
var G__36799__$2 = (((G__36799__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__36799__$1));
var G__36799__$3 = (((G__36799__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__36799__$2));
if((G__36799__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__36799__$3);
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird_no_comment = (function zprint$zutil$zthird_no_comment(zloc){
var G__36800 = zprint.zutil.zfirst_no_comment.call(null,zloc);
var G__36800__$1 = (((G__36800 == null))?null:zprint.zutil.right_STAR_.call(null,G__36800));
var G__36800__$2 = (((G__36800__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__36800__$1));
var G__36800__$3 = (((G__36800__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__36800__$2));
if((G__36800__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__36800__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__36801 = zprint.zutil.zfirst.call(null,zloc);
var G__36801__$1 = (((G__36801 == null))?null:zprint.zutil.right_STAR_.call(null,G__36801));
var G__36801__$2 = (((G__36801__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__36801__$1));
var G__36801__$3 = (((G__36801__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__36801__$2));
var G__36801__$4 = (((G__36801__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__36801__$3));
var G__36801__$5 = (((G__36801__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__36801__$4));
if((G__36801__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__36801__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__36802 = zprint.zutil.zrightnws.call(null,nloc);
var G__36803 = nloc;
nloc = G__36802;
ploc = G__36803;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__36804 = zprint.zutil.zleftnws.call(null,nloc);
var G__36805 = nloc;
nloc = G__36804;
ploc = G__36805;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5718__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var ploc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__36806 = zprint.zutil.zrightnws.call(null,nloc);
var G__36807 = (i - (1));
nloc = G__36806;
i = G__36807;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__36808 = zprint.zutil.zrightnws.call(null,nloc);
var G__36809 = (i + (1));
nloc = G__36808;
i = G__36809;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__36810 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36811 = (function (){var temp__5718__auto__ = (((!(((zprint.zutil.whitespace_QMARK_.call(null,nloc)) && ((!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323)))))))))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__36810;
out = G__36811;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__36812 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36813 = (function (){var temp__5718__auto__ = (((!(((zprint.zutil.whitespace_QMARK_.call(null,nloc)) && ((!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))))) && ((!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comma","comma",1699024745)))))))))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__36812;
out = G__36813;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__36814 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36815 = (function (){var temp__5718__auto__ = (((!(zprint.zutil.whitespace_QMARK_.call(null,nloc))))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__36814;
out = G__36815;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__36816 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36817 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__36816;
out = G__36817;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__36818 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36819 = ((zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__36818;
out = G__36819;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_(zprint.zutil.rightmost_QMARK_.call(null,nloc))){
return nloc;
} else {
var G__36820 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__36820;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return zprint.zutil.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = zprint.zutil.right_STAR_.call(null,nloc);
var G__36821 = xloc;
var G__36822 = ((zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__36821;
index = G__36822;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?  Note that this will
 *   include comments.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.call(null,(function (p1__36824_SHARP_,p2__36823_SHARP_){
if(cljs.core.truth_(zprint.zutil.whitespace_or_comment_QMARK_.call(null,p2__36823_SHARP_))){
return p1__36824_SHARP_;
} else {
return (p1__36824_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__36825 = zprint.zutil.up_STAR_.call(null,nloc);
var G__36826 = (0);
var G__36827 = cljs.core.cons.call(null,left,out);
nloc = G__36825;
left = G__36826;
out = G__36827;
continue;
}
} else {
var G__36828 = zprint.zutil.left_STAR_.call(null,nloc);
var G__36829 = (left + (1));
var G__36830 = out;
nloc = G__36828;
left = G__36829;
out = G__36830;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__36831 = zprint.zutil.up_STAR_.call(null,nloc);
var G__36832 = (0);
var G__36833 = cljs.core.cons.call(null,left,out);
nloc = G__36831;
left = G__36832;
out = G__36833;
continue;
}
} else {
var G__36834 = zprint.zutil.left_STAR_.call(null,nloc);
var G__36835 = ((zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__36836 = out;
nloc = G__36834;
left = G__36835;
out = G__36836;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__36837 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__36837;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__36838 = zprint.zutil.right_STAR_.call(null,nloc);
var G__36839 = (remaining_right - (1));
nloc = G__36838;
remaining_right = G__36839;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__36840 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__36840;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5718__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var doc_zloc = temp__5718__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__36841,pair_seq,ns){
var map__36842 = p__36841;
var map__36842__$1 = (((((!((map__36842 == null))))?(((((map__36842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36842):map__36842);
var map_options = map__36842__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4120__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = ((function (map__36842,map__36842__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});})(map__36842,map__36842__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__36847 = cljs.core.first.call(null,pair_seq__$1);
var seq__36848 = cljs.core.seq.call(null,vec__36847);
var first__36849 = cljs.core.first.call(null,seq__36848);
var seq__36848__$1 = cljs.core.next.call(null,seq__36848);
var k = first__36849;
var rest_of_pair = seq__36848__$1;
var pair = vec__36847;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",ns__$1].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.call(null,ns__$1,current_ns)){
var G__36856 = ns__$1;
var G__36857 = cljs.core.next.call(null,pair_seq__$1);
var G__36858 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__36856;
pair_seq__$1 = G__36857;
out = G__36858;
continue;
} else {
return null;
}
} else {
var G__36859 = current_ns;
var G__36860 = cljs.core.next.call(null,pair_seq__$1);
var G__36861 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__36859;
pair_seq__$1 = G__36860;
out = G__36861;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__36862 = ns__$1;
var G__36863 = cljs.core.next.call(null,pair_seq__$1);
var G__36864 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__36862;
pair_seq__$1 = G__36863;
out = G__36864;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = ns;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not.call(null,lift_ns_QMARK_);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__36853 = cljs.core.first.call(null,pair_seq__$1);
var seq__36854 = cljs.core.seq.call(null,vec__36853);
var first__36855 = cljs.core.first.call(null,seq__36854);
var seq__36854__$1 = cljs.core.next.call(null,seq__36854);
var k = first__36855;
var rest_of_pair = seq__36854__$1;
var pair = vec__36853;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__36865 = cljs.core.next.call(null,pair_seq__$1);
var G__36866 = cljs.core.conj.call(null,out,pair);
pair_seq__$1 = G__36865;
out = G__36866;
continue;
} else {
var G__36867 = cljs.core.next.call(null,pair_seq__$1);
var G__36868 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.sexpr.call(null,k))].join('')))),rest_of_pair));
pair_seq__$1 = G__36867;
out = G__36868;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__36869 = zprint.zfns.zstring;
var znumstr_orig_val__36870 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__36871 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__36872 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__36873 = zprint.zfns.zsexpr;
var zseqnws_orig_val__36874 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__36875 = zprint.zfns.zseqnws_w_nl;
var zmap_right_orig_val__36876 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__36877 = zprint.zfns.zfocus_style;
var zstart_orig_val__36878 = zprint.zfns.zstart;
var zfirst_orig_val__36879 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__36880 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__36881 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__36882 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__36883 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__36884 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__36885 = zprint.zfns.zfourth;
var znextnws_orig_val__36886 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__36887 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__36888 = zprint.zfns.znthnext;
var zcount_orig_val__36889 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__36890 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__36891 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__36892 = zprint.zfns.zmap_w_nl;
var zmap_w_nl_comma_orig_val__36893 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__36894 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__36895 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__36896 = zprint.zfns.zfocus;
var zfind_path_orig_val__36897 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__36898 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__36899 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__36900 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__36901 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__36902 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__36903 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__36904 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__36905 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__36906 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__36907 = zprint.zfns.ztag;
var zlast_orig_val__36908 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__36909 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__36910 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__36911 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__36912 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__36913 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__36914 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__36915 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__36916 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__36917 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__36918 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__36919 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__36920 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__36921 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__36922 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__36923 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__36924 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__36925 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__36926 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__36927 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__36928 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__36929 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__36930 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__36931 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__36932 = zprint.zfns.zlift_ns;
var zfind_orig_val__36933 = zprint.zfns.zfind;
var ztake_append_orig_val__36934 = zprint.zfns.ztake_append;
var zstring_temp_val__36935 = rewrite_clj.zip.string;
var znumstr_temp_val__36936 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__36937 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__36938 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__36939 = zprint.zutil.sexpr;
var zseqnws_temp_val__36940 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__36941 = zprint.zutil.zseqnws_w_nl;
var zmap_right_temp_val__36942 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__36943 = zprint.zutil.zfocus_style;
var zstart_temp_val__36944 = zprint.zutil.zstart;
var zfirst_temp_val__36945 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__36946 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__36947 = zprint.zutil.zsecond;
var zsecond_no_comment_temp_val__36948 = zprint.zutil.zsecond_no_comment;
var zthird_temp_val__36949 = zprint.zutil.zthird;
var zthird_no_comment_temp_val__36950 = zprint.zutil.zthird_no_comment;
var zfourth_temp_val__36951 = zprint.zutil.zfourth;
var znextnws_temp_val__36952 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__36953 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__36954 = zprint.zutil.znthnext;
var zcount_temp_val__36955 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__36956 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__36957 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__36958 = zprint.zutil.zmap_w_nl;
var zmap_w_nl_comma_temp_val__36959 = zprint.zutil.zmap_w_nl_comma;
var zanonfn_QMARK__temp_val__36960 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__36961 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__36962 = zprint.zutil.zfocus;
var zfind_path_temp_val__36963 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__36964 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__36965 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__36966 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__36967 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__36968 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__36969 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__36970 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__36971 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__36972 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__36973 = zprint.zutil.ztag;
var zlast_temp_val__36974 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__36975 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__36976 = cljs.core.constantly.call(null,false);
var zderef_temp_val__36977 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__36978 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__36979 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__36980 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__36981 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__36982 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__36983 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__36984 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__36985 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__36986 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__36987 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__36988 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__36989 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__36990 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__36991 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__36992 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__36993 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__36994 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__36995 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__36996 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__36997 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__36998 = zprint.zutil.zlift_ns;
var zfind_temp_val__36999 = zprint.zutil.zfind;
var ztake_append_temp_val__37000 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__36935;

zprint.zfns.znumstr = znumstr_temp_val__36936;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__36937;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__36938;

zprint.zfns.zsexpr = zsexpr_temp_val__36939;

zprint.zfns.zseqnws = zseqnws_temp_val__36940;

zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__36941;

zprint.zfns.zmap_right = zmap_right_temp_val__36942;

zprint.zfns.zfocus_style = zfocus_style_temp_val__36943;

zprint.zfns.zstart = zstart_temp_val__36944;

zprint.zfns.zfirst = zfirst_temp_val__36945;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__36946;

zprint.zfns.zsecond = zsecond_temp_val__36947;

zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__36948;

zprint.zfns.zthird = zthird_temp_val__36949;

zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__36950;

zprint.zfns.zfourth = zfourth_temp_val__36951;

zprint.zfns.znextnws = znextnws_temp_val__36952;

zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__36953;

zprint.zfns.znthnext = znthnext_temp_val__36954;

zprint.zfns.zcount = zcount_temp_val__36955;

zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__36956;

zprint.zfns.zmap = zmap_temp_val__36957;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__36958;

zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__36959;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__36960;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__36961;

zprint.zfns.zfocus = zfocus_temp_val__36962;

zprint.zfns.zfind_path = zfind_path_temp_val__36963;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__36964;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__36965;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__36966;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__36967;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__36968;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__36969;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__36970;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__36971;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__36972;

zprint.zfns.ztag = ztag_temp_val__36973;

zprint.zfns.zlast = zlast_temp_val__36974;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__36975;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__36976;

zprint.zfns.zderef = zderef_temp_val__36977;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__36978;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__36979;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__36980;

zprint.zfns.zexpandarray = zexpandarray_temp_val__36981;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__36982;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__36983;

zprint.zfns.zmap_all = zmap_all_temp_val__36984;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__36985;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__36986;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__36987;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__36988;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__36989;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__36990;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__36991;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__36992;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__36993;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__36994;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__36995;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__36996;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__36997;

zprint.zfns.zlift_ns = zlift_ns_temp_val__36998;

zprint.zfns.zfind = zfind_temp_val__36999;

zprint.zfns.ztake_append = ztake_append_temp_val__37000;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__36934;

zprint.zfns.zfind = zfind_orig_val__36933;

zprint.zfns.zlift_ns = zlift_ns_orig_val__36932;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__36931;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__36930;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__36929;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__36928;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__36927;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__36926;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__36925;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__36924;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__36923;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__36922;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__36921;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__36920;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__36919;

zprint.zfns.zmap_all = zmap_all_orig_val__36918;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__36917;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__36916;

zprint.zfns.zexpandarray = zexpandarray_orig_val__36915;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__36914;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__36913;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__36912;

zprint.zfns.zderef = zderef_orig_val__36911;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__36910;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__36909;

zprint.zfns.zlast = zlast_orig_val__36908;

zprint.zfns.ztag = ztag_orig_val__36907;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__36906;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__36905;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__36904;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__36903;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__36902;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__36901;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__36900;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__36899;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__36898;

zprint.zfns.zfind_path = zfind_path_orig_val__36897;

zprint.zfns.zfocus = zfocus_orig_val__36896;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__36895;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__36894;

zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__36893;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__36892;

zprint.zfns.zmap = zmap_orig_val__36891;

zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__36890;

zprint.zfns.zcount = zcount_orig_val__36889;

zprint.zfns.znthnext = znthnext_orig_val__36888;

zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__36887;

zprint.zfns.znextnws = znextnws_orig_val__36886;

zprint.zfns.zfourth = zfourth_orig_val__36885;

zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__36884;

zprint.zfns.zthird = zthird_orig_val__36883;

zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__36882;

zprint.zfns.zsecond = zsecond_orig_val__36881;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__36880;

zprint.zfns.zfirst = zfirst_orig_val__36879;

zprint.zfns.zstart = zstart_orig_val__36878;

zprint.zfns.zfocus_style = zfocus_style_orig_val__36877;

zprint.zfns.zmap_right = zmap_right_orig_val__36876;

zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__36875;

zprint.zfns.zseqnws = zseqnws_orig_val__36874;

zprint.zfns.zsexpr = zsexpr_orig_val__36873;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__36872;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__36871;

zprint.zfns.znumstr = znumstr_orig_val__36870;

zprint.zfns.zstring = zstring_orig_val__36869;
}});

//# sourceMappingURL=zutil.js.map
