CREATE OR REPLACE FUNCTION holidays_in_japan.HOLIDAY_NAME(d DATE)
AS (
  IFNULL(holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(d),
    CASE
      WHEN holidays_in_japan.IS_NEW_YEARS_DAY(d) THEN "元日"
      WHEN holidays_in_japan.IS_COMING_OF_AGE_DAY(d) THEN "成人の日"
      WHEN holidays_in_japan.IS_NATIONAL_FOUNDATION_DAY(d) THEN "建国記念の日"
      WHEN holidays_in_japan.IS_EMPERORS_BIRTHDAY(d) THEN "天皇誕生日"
      WHEN holidays_in_japan.IS_VERNAL_EQUINOX_DAY(d) THEN "春分の日"
      WHEN holidays_in_japan.IS_SHOWA_DAY(d) THEN "昭和の日"
      WHEN holidays_in_japan.IS_CONSTITUTION_MEMORIAL_DAY(d) THEN "憲法記念日"
      WHEN holidays_in_japan.IS_GREENERY_DAY(d) THEN "みどりの日"
      WHEN holidays_in_japan.IS_CHILDRENS_DAY(d) THEN "こどもの日"
      WHEN holidays_in_japan.IS_MARINE_DAY(d) THEN "海の日"
      WHEN holidays_in_japan.IS_MOUNTAIN_DAY(d) THEN "山の日"
      WHEN holidays_in_japan.IS_RESPECT_FOR_THE_AGED_DAY(d) THEN "敬老の日"
      WHEN holidays_in_japan.IS_AUTUMNAL_EQUINOX_DAY(d) THEN "秋分の日"
      WHEN holidays_in_japan.IS_HEALTH_SPORTS_DAY(d) THEN "体育の日"
      WHEN holidays_in_japan.IS_SPORTS_DAY(d) THEN "スポーツの日"
      WHEN holidays_in_japan.IS_CULTURE_DAY(d) THEN "文化の日"
      WHEN holidays_in_japan.IS_LABOUR_THANKSGIVING_DAY(d) THEN "勤労感謝の日"
      WHEN holidays_in_japan.IS_KOKUMIN_NO_KYUJITSU(d) THEN "国民の休日"
      WHEN holidays_in_japan.IS_FURIKAE_KYUJITSU(d) THEN "振替休日"
    END)
)
OPTIONS
  (description = "国民の祝日または休日なら名前を返す、そうでない場合は NULL を返す");
