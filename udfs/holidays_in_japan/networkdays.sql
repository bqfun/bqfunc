CREATE OR REPLACE FUNCTION holidays_in_japan.NETWORKDAYS(start_date DATE, end_date DATE, weekends ARRAY<
INT64 >, holidays ARRAY< DATE >)
AS (
  (
    SELECT
      COUNTIF(d NOT IN UNNEST(holidays) AND EXTRACT(DAYOFWEEK FROM d) NOT IN UNNEST(weekends))
    FROM
      UNNEST(GENERATE_DATE_ARRAY(start_date, end_date)) AS d
  )
)
OPTIONS
  (description = "start_date から end_date までの期間に含まれる稼動日の日数を返す。weekends は [7, 1] で土日を表す。holidays は祝日や休暇を指定する。");
