config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ ARRAY<STRUCT<STRUCT<INT64>>>>>)
  AS (
    IF(a IS NULL, NULL, ${ref("zerobyte__us", "_not_null_ieee_to_float64")}(${ref("zerobyte__us", "zerobyte_to_array_int64")}(a)))
  )
