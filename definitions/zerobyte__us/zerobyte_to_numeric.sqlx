config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<ARRAY<STRUCT<STRUCT<INT64>>>>>)
  AS (
    CAST(${ref("zerobyte__us", "zerobyte_to_string")}(a) AS NUMERIC)
  )
