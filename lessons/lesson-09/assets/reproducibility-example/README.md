# 可核验复现工件

这是第 9 课 P11 使用的真实可运行教学工件。输入是 4 条合成记录，不含学生数据，也不构成实证研究结果。运行：

```bash
python3 run.py --verify
```

脚本会按 `config.json` 重算结果，并核对 `results.json` 与 `run-log.jsonl`。预期输出为 `verified: 4 records, 2 missing, omission_rate=0.5`。
