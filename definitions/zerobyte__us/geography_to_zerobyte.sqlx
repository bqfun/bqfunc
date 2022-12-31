config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(g GEOGRAPHY)
  AS (
    ${ref("zerobyte__us", "bytes_to_zerobyte")}(ST_ASBINARY(g))
  )
