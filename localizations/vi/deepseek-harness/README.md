# Năm kỹ năng tiếng Việt cho DeepSeek Harness

Bản dịch của CatTeam dựa trên [Solo to Team v0.2.0, bundle.1](https://github.com/dabingfy-dot/solo-to-team-skills/tree/adbe0e0d88d014771d085a539f44ab24253df1b4). Người khởi xướng dự án gốc là Dabing (大冰).

## Cài theo dự án

1. Mở thư mục gốc của dự án cần dùng với DeepSeek Harness.
2. Chọn năm thư mục trong bảng dưới và chép chúng trực tiếp vào `.dsh/skills/` của dự án. Nếu đã có skill trùng tên, đối chiếu phiên bản trước khi thay thế.
3. Mở phiên DSH tại gốc dự án và gọi `/sub-agent`. Tệp điều phối phải nằm tại `.dsh/skills/sub-agent/SKILL.md`.

| Mã | Thư mục | Công việc |
|---|---|---|
| M0 | `sub-agent` | Điều phối. Tương ứng với `solo-to-team-deepseek` ở kho gốc. |
| M1 | `dispatch-accept-verify` | Theo dõi giao và nhận việc. |
| M2 | `evidence-before-done` | Kiểm chứng bằng chứng trước khi bàn giao. |
| M3 | `beginner-ops-writing` | Viết hướng dẫn thao tác cho người mới. |
| M4 | `ops-case-notes` | Ghi nhận tình huống vận hành. |

Xem [LICENSE](../../../LICENSE) và [NOTICE](../../../NOTICE) của dự án gốc.
