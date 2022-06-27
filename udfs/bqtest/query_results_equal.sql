CREATE OR REPLACE PROCEDURE bqtest.query_results_equal(left_query STRING, right_query STRING)
BEGIN
  EXECUTE IMMEDIATE CONCAT("""SELECT
  NOT EXISTS(
  SELECT
    *
  FROM (
    SELECT
      FORMAT("%T", actual) AS json_string,
      COUNT(*) AS count
    FROM (""",
    left_query, """) AS actual
    GROUP BY
      json_string) AS actual
  FULL JOIN (
    SELECT
      FORMAT("%T", expected) AS json_string,
      COUNT(*) AS count
    FROM (""",
    right_query, """) AS expected
    GROUP BY
      json_string) AS expected
  USING
    (json_string)
  WHERE
    (actual.count = expected.count) IS NOT TRUE )""") ;
END;
