CREATE OR REPLACE FUNCTION
  zerobyte.TIME_TO_ZEROBYTE(t TIME)AS(zerobyte.INT64_TO_ZEROBYTE(TIME_DIFF(t,
        '00:00:00',
        MICROSECOND)))