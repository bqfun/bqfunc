config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(t TIME)
  AS (
    ${ref("zerobyte__us", "int64_to_zerobyte")}(TIME_DIFF(t, '00:00:00', MICROSECOND))
  )
