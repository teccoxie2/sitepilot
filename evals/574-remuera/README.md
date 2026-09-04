# 574 Remuera Road Golden Dataset

基准：BCO10374183 · 574 Remuera Road。页数与三套住宅面积来自 *VSense Cost V2 产品与技术设计文档* 附录 A.1，**不是**从本仓库编造的图纸读数。

## 原 PDF（未入库则 eval 不得通过）

把议会发出的两份原件放到 `documents/`（已被 gitignore）：

- `architectural.pdf` — Architectural Plans，设计文档记 21 页、无文字层
- `structural.pdf` — Structural Plan，设计文档记 11 页、无文字层

`documents_status` 在文件到位前保持 `missing`。不要用空白 PDF 或别的工地图纸顶替。

## 人工 ground truth

`expected_drawings.json` 必须从 Structural cover 的 Drawing Index **人工抄录**。未抄录时保持 `status: "missing"`，禁止用设计文档里的示例图号（如 S011a）冒充本套图的 index。
