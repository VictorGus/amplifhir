(ns app.db.query)

(defn into-inner-query [m]
  (letfn [(gather-key [m & [acc]]
            (reduce-kv
             (fn [acc k v]
               (str acc "." (name k) (if (map? v)
                                       (gather-key v acc)))
               )
             (or acc "")
             m))
          (get-value [m]
            (reduce-kv
             (fn [acc k v]
               (if (map? v)
                 (get-value v)
                 v))
             nil
             m))]
    (let [k (subs (gather-key m) 1)
          v (get-value m)]
      {k v})))
