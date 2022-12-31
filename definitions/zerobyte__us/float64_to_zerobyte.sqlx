config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(f FLOAT64)
  AS (
    IF(f IS NULL, NULL, ${ref("zerobyte__us", "array_int64_to_zerobyte")}(${ref("zerobyte__us", "_not_null_float64_to_ieee")}(f)))
  )
