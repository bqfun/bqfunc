config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ ARRAY<STRUCT<STRUCT<INT64>>>>>)
  AS (
    ST_GEOGFROMWKB(${ref("zerobyte__us", "zerobyte_to_bytes")}(a))
  )
