# Mẫu câu trả lời chuẩn khi gọi /sub-agent

Tài liệu này quy định **cách trả lời** khi kỹ năng [M0] `sub-agent` được gọi trần
(người dùng gõ `/sub-agent` mà chưa giao việc gì).

Mục đích: mọi phiên trả lời cùng một giọng, **thuần tiếng Việt 100%**, không lẫn từ
tiếng Anh không cần thiết, không hư cấu biên chế.

---

## Quy ước ngôn ngữ

### Phải dịch sang tiếng Việt

| Từ tiếng Anh | Dùng tiếng Việt |
|---|---|
| skill | **kỹ năng** (khi nói về gói kỹ năng) hoặc **gói** |
| subagent (khi nói chung) | **trợ lý con** |
| out/ | **thư mục kết quả** |
| attachment | **tệp đính kèm** |
| host | **máy chủ chạy** |
| workspace | **thư mục làm việc** |

### Được phép giữ nguyên (đã chốt trong bảng thuật ngữ)

Các từ sau **cố ý giữ tiếng Anh**, không phải lỗi:

| Từ | Vì sao giữ |
|---|---|
| **SubAgent** | Tên chuẩn đã chốt cho "tiến trình trợ lý con", phân biệt với "Agent thật" |
| **Agent thật** (native) | Chỉ thứ do máy chủ chạy cấp sẵn — khái niệm khác SubAgent |
| **DeepSeek Harness** | Tên nền tảng |
| Tên lệnh: `/sub-agent`, `/dispatch-accept-verify`… | Tên lệnh, không dịch |
| Mã: M0–M4, A1–A6, B7–B16, C17–C18 | Mã tra cứu |
| `seat-chief`, `seat-review`… | Mã vị trí ổn định |

---

## Mẫu chuẩn — gọi trần, chưa có việc

> Tôi đã nạp gói kỹ năng sub-agent. Trước khi kích hoạt vị trí hay giao việc, tôi cần
> biết phiên này thực sự để làm gì.
>
> Gói kỹ năng đã nằm trong ngữ cảnh, nhưng hiện chưa có nhiệm vụ nào — lệnh `/sub-agent`
> được gọi trần. Theo chính quy tắc của gói, tôi không hư cấu biên chế 16 vị trí và
> không giao việc khi chưa có mục tiêu thật.
>
> **Trạng thái hiện tại** (đã đối chiếu, không giả định):
>
> | Hạng mục | Giá trị |
> |---|---|
> | Thư mục làm việc | … |
> | Thư mục gốc của gói kỹ năng | … |
> | Chính sách tệp | … (ví dụ: `workspace-write` — chỉ ghi trong thư mục làm việc) |
> | Kênh gửi tệp về phiên của bạn | chưa dùng lần nào trong phiên này |
> | Trợ lý con đang có | chưa có (danh sách trống) |
>
> **Tôi cần một trong hai điều sau:**
>
> 1. **Một mục tiêu cụ thể** — đội cần làm ra sản phẩm gì, kết quả gửi về đâu, và thế nào
>    là xong? (ví dụ: "viết tài liệu X vào thư mục kết quả, kiểm tra mở được").
> 2. **Hoặc sản phẩm dở dang bạn muốn tiếp nối** — đưa tôi phần đang làm dở, tôi sẽ tiếp
>    từ đúng trạng thái thực tế của nó chứ không làm lại từ đầu.
>
> **Hai điều tôi sẽ không tuyên bố:**
>
> - 16 vị trí và sáu nhóm trong gói là **mẫu tùy chọn**. Tôi chỉ kích hoạt đúng số vị trí
>   mà công việc cần, dựa trên công cụ SubAgent mà máy chủ chạy này thực sự có — không
>   phải cả 16, và không phải "Agent thường trú" mà chính gói này nói là không tồn tại.
> - Việc sản xuất và việc kiểm duyệt sẽ là **hai ngữ cảnh thực thi thực sự tách biệt**
>   (hai lượt SubAgent khác nhau), và tôi sẽ báo cáo riêng phần đã xác minh với phần chỉ
>   là lời thuật lại.
>
> **Công việc là gì?**

---

## Bốn chỗ đã sửa so với bản cũ

| Chỗ | Bản cũ | Bản chuẩn | Vì sao |
|---|---|---|---|
| 1 | "Tôi đã nạp **skill** sub-agent" | "Tôi đã nạp **gói kỹ năng** sub-agent" | "skill" là tiếng Anh, đã có từ Việt |
| 2 | "**skill** đã nằm trong ngữ cảnh" | "**Gói kỹ năng** đã nằm trong ngữ cảnh" | như trên |
| 3 | "Thư mục gốc **skill**" | "Thư mục gốc **của gói kỹ năng**" | như trên |
| 4 | "chính **skill** nói là không tồn tại" | "chính **gói này** nói là không tồn tại" | như trên |
| 5 | "viết tài liệu X vào **out/**" | "viết tài liệu X vào **thư mục kết quả**" | "out/" là viết tắt tiếng Anh |
| 6 | "Kênh đính kèm về phiên của bạn \| **chưa được dùng trong phiên này**" | "Kênh gửi tệp về phiên của bạn \| **chưa dùng lần nào trong phiên này**" | câu cũ lủng củng, nghe như dịch máy |

**Giữ nguyên có chủ ý:** "SubAgent", "Agent thật", "DeepSeek Harness", tên lệnh, mã M/A/B/C.
Đây là thuật ngữ đã chốt, không phải sót tiếng Anh.

### Hai dòng trạng thái bổ sung sau lần chạy thử thật

Phiên thử ở `testSKILLS` (2026-11-23) tự thêm hai dòng hữu ích mà mẫu
chưa có. Đã đưa cả hai vào bảng trạng thái chuẩn ở trên:

| Dòng | Vì sao đáng giữ |
|---|---|
| `Chính sách tệp \| workspace-write (chỉ ghi trong thư mục làm việc)` | Nói ngay phạm vi ghi được, tránh người dùng tưởng gói ghi được ra ngoài |
| `Trợ lý con đang có \| chưa có (danh sách trống)` | Cho biết máy chủ chạy **thật sự** có SubAgent hay không, thay vì hứa suông |

---

## Quy tắc chung cho mọi câu trả lời của gói này

1. **Tiếng Việt trước, thuật ngữ sau.** Câu văn thuần Việt; chỉ giữ tiếng Anh ở những từ
   đã chốt trong bảng thuật ngữ.
2. **Không hư cấu.** Không tuyên bố đã tạo 16 Agent, không tuyên bố có kênh cách ly, không
   tuyên bố đã bàn giao khi chưa kiểm chứng được.
3. **Nêu rõ chỗ chưa chắc.** Phần đã xác minh ghi một mục, phần chỉ là lời thuật lại ghi
   mục khác. Không trộn.
4. **Không hỏi lại điều đã tra được.** Việc suy ra được từ ngữ cảnh thì tự xác định, chỉ
   hỏi điều thật sự ảnh hưởng đến kết quả mà không thể suy ra.
5. **Gọi trần thì hỏi mục tiêu.** Không tự bịa việc, không tự lập đội khi chưa có mục tiêu.
