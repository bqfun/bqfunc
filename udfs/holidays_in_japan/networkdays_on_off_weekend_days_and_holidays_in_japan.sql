CREATE OR REPLACE FUNCTION holidays_in_japan.NETWORKDAYS_ON_OFF_WEEKEND_DAYS_AND_HOLIDAYS_IN_JAPAN(start_date DATE, end_date DATE)
AS (
  (
    SELECT
      COUNTIF(holidays_in_japan.HOLIDAY_NAME(d) IS NULL AND EXTRACT(DAYOFWEEK FROM d) NOT IN (1, 7))
    FROM
      UNNEST(GENERATE_DATE_ARRAY(start_date, end_date)) AS d
  )
)
OPTIONS
  (description = "start_date から end_date までの期間に含まれる稼動日の日数を返す。土日、日本の祝日、休日を休暇とする。");
