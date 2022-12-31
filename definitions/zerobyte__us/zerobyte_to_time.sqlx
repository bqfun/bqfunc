config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ STRUCT<INT64>>>)
  AS (
    TIME_ADD('00:00:00', INTERVAL ${ref("zerobyte__us", "zerobyte_to_int64")}(a) MICROSECOND)
  )
