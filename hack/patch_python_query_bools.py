from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TARGETS = (
    ROOT / "python/http_client/v1/polyaxon_sdk/api_client.py",
    ROOT / "python/http_client/v1/polyaxon_sdk/async_client/api_client.py",
)

OLD = """\
            if isinstance(v, (int, float)):
                v = str(v)
            if isinstance(v, bool):
                v = str(v).lower()
"""

NEW = """\
            if isinstance(v, bool):
                v = str(v).lower()
            elif isinstance(v, (int, float)):
                v = str(v)
"""


def patch_file(path: Path):
    data = path.read_text()
    if NEW in data:
        return
    if OLD not in data:
        raise RuntimeError("Could not find Python query bool block in {}".format(path))
    path.write_text(data.replace(OLD, NEW, 1))


def main():
    for path in TARGETS:
        patch_file(path)


if __name__ == "__main__":
    main()
