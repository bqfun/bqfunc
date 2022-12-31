config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(n NUMERIC)
  AS (
    IF(n IS NULL, NULL, ${ref("zerobyte__us", "string_to_zerobyte")}(CAST(n AS STRING)))
  )
