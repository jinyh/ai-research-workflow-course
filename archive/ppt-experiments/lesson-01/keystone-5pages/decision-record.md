# PPT 试制里程碑：Keystone 关键页设计

- 日期：2026-08-05
- 课次：lesson-01
- 类型：设计取舍记录
- 关联规范：[lessons/lesson-01/keystone-design-spec.md](../../../../lessons/lesson-01/keystone-design-spec.md)

## 为什么归档

确立"关键页先填四字段设计契约、轻量页只过验收三问"的重设计方法，打破 ppt-master 默认的等宽卡片矩阵产物。这是后续正式 PPT 制作的方法基线，不可由 Git 历史替代。

## 产物

- `contact-sheet.png`：keystone 5 页预览。
- 决策依据见现行规范 `lessons/lesson-01/keystone-design-spec.md`（不从 lessons/ 移出，保持为现行工作文档）。

## 关键取舍

- 评分/路线页用清单 + 按权重条形混合，不用等宽卡片。
- 八阶段主链页固定"主链"轮廓，不轮换。
- 轻量页只过验收三问，不填四字段契约。
