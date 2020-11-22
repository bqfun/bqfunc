import argparse
import datetime
import os
import urllib.request
from pathlib import Path

from bq_jobrunner.bq_jobrunner import BQJobrunner


def fetch_holidays():
    # 内閣府「国民の祝日」
    # https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html
    url = "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv"
    with urllib.request.urlopen(url) as res:
        body = res.readlines()
    # header を除去
    a = iter(body)
    next(a)
    for i in a:
        dt, name = i.decode("shift-jis").split(",")
        # dtはyyyy-mm-ddなら自動でdate解釈される。name末尾の改行削除。
        yield datetime.datetime.strptime(dt, "%Y/%m/%d").strftime(
            "%Y-%m-%d"
        ), name[:-2]


def make_holidays_sql():
    date_and_name_sql = ",".join(
        f'("{date}","{name}")' for date, name in fetch_holidays()
    )
    sql = (
        f"CREATE OR REPLACE FUNCTION holidays_in_japan.HOLIDAYS()"
        f"AS([STRUCT<date DATE,name STRING>{date_and_name_sql}])"
    )
    with (Path(__file__).parent / "udfs/holidays_in_japan/holidays.sql").open(
        "w"
    ) as f:
        f.write(sql)


def execute(project_id: str, region: str, dot_path: str):
    os.environ["GCLOUD_PROJECT"] = project_id
    runner = BQJobrunner(
        project_id,
        location=region,
    )
    runner.compose_query_by_dot_path(dot_path)
    runner.execute()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("project_id")
    parser.add_argument("region")
    parser.add_argument("dot_path")
    args = parser.parse_args()
    make_holidays_sql()
    execute(args.project_id, args.region, args.dot_path)
