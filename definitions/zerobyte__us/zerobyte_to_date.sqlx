config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ STRUCT<INT64>>>)
  AS (
    DATE_FROM_UNIX_DATE(${ref("zerobyte__us", "zerobyte_to_int64")}(a))
  )
