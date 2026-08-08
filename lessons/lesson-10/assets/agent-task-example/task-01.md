# Task 01 — validate record fields

- Context: `after/generate.py` normalizes one local record for a teaching pipeline.
- Permission: read the example; edit only `after/generate.py`; run only the local test file.
- Non-goal: do not change the metric, fixture, repository config, or external data.
- Human review: inspect the diff before running the test; accept only if both tests pass.
- Failure recovery: stop on unexpected file access or test failure; preserve output and write `failure-log.md`.
