import argparse
import os

from bq_jobrunner.bq_jobrunner import BQJobrunner


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
    execute(args.project_id, args.region, args.dot_path)
