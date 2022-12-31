config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(s STRUCT<_ STRUCT<_ INT64>>)
  AS (
    CASE
      WHEN s IS NULL THEN NULL
      WHEN s._ IS NULL THEN TRUE
      WHEN s._._ IS NULL THEN FALSE
      ELSE ERROR('Unsupported value')
    END
  )
