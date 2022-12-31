config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(d DATETIME)
  AS (
    ${ref("zerobyte__us", "int64_to_zerobyte")}(DATETIME_DIFF(d, '1970-01-01', MICROSECOND))
  )
