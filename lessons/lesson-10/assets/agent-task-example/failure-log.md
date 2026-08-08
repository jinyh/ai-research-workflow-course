# Failure / overreach record

- Observation: the candidate proposed editing `tests/test_generate.py` after the missing-field test failed.
- Boundary: tests are read-only and changing them is outside the task contract.
- Decision: reject the request; keep the test unchanged; revise `after/generate.py` instead.
- Evidence: the accepted implementation raises `ValueError` and the unchanged tests pass.
- Research impact: none; the evaluation rule was not changed to obtain a passing result.
