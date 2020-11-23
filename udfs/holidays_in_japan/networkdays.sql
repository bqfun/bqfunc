CREATE OR REPLACE FUNCTION holidays_in_japan.NETWORKDAYS(start_date DATE, end_date DATE, weekends ARRAY<
INT64 >, holidays ARRAY< DATE >)
AS (
  (
    SELECT
      COUNTIF(d NOT IN UNNEST(holidays) AND EXTRACT(DAYOFWEEK FROM d) NOT IN UNNEST(weekends))
    FROM
      UNNEST(GENERATE_DATE_ARRAY(start_date, end_date)) AS d
  )
);
