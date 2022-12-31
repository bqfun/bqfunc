config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(t TIMESTAMP)
  AS (
    ${ref("zerobyte__us", "int64_to_zerobyte")}(UNIX_MICROS(t))
  )
