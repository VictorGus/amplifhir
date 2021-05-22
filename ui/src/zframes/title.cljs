(ns zframes.title)

(defn change-title [value & [id]]
  (set! (.-text (.getElementById js/document (or "page-title" id))) value))
