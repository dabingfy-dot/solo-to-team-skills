---
name: beginner-ops-writing
description: >-
  [M3] Hướng dẫn thao tác cho người mới (Beginner-friendly operating instructions).
  Dùng khi phải viết một cách làm mà chỉ người quen mới hiểu thành hướng dẫn từng bước để người mới không biết nội tình cũng làm theo một lần là được:
  lời lẽ bình dân, mỗi lần một bước, gọi tên duy nhất, ghi rõ làm xong sẽ thấy gì. Không dùng cho: quy trình khép kín giao việc／thu hồi việc
  (xem ../dispatch-accept-verify/ **[M1]** cùng kho); đối chiếu bằng chứng trước khi bàn giao (xem
  ../evidence-before-done/ **[M2]** cùng kho).
license: MIT
metadata:
  version: "0.1.0"
  platform: "DeepSeek Harness"
---
# [M3] Hướng dẫn thao tác cho người mới

Thuộc gói mã nguồn mở Solo to Team · Một người thành cả đội (solo-to-team-skills).

## Gồm những gì

Cách viết các bước thao tác dành cho "người chưa quen máy tính／điện thoại": các điều nguyên tắc, danh sách tự kiểm, 2 ví dụ hư cấu (ứng dụng giả, chữ trên giao diện giả, nhìn là biết hư cấu), mỗi ví dụ kèm phần đối chiếu cách viết không đạt. Kỹ năng này chỉ lo **viết các bước cho rõ ràng**, không lo giao cho ai làm, cũng không lo xác minh bằng chứng thế nào trước khi bàn giao.

## Dành cho ai

- Người thực thi cần nhờ chính người phụ trách hoặc bên giao việc bấm một cái, sao chép một dòng, mở một công tắc
- Người thường viết "bấm sao chép／bấm xác nhận" mà khiến đối phương tìm nhầm nút
- người điều hành của đội nhỏ, muốn người mới không biết nội tình làm theo một lần là được, ít phải hỏi lại

## Cách dùng

1. Tải kỹ năng này theo đúng đoạn ứng với máy chủ chạy bạn dùng trong [skill M0 sub-agent](../sub-agent/SKILL.md) ở gốc gói; không cài cũng được, cứ đọc văn bản này như tài liệu tham khảo về cách viết.
2. Hễ phải nhờ người mới bấm, sao chép, chọn, nhập trên màn hình: trước tiên soạn các bước theo nguyên tắc bên dưới.
3. Trước khi gửi đi thì tự kiểm: mỗi bước có đúng một động tác không, có gọi tên duy nhất không, có ghi "làm xong sẽ thấy gì" không, có chỗ nào viết vị trí dựa vào đoán không.
4. Vị trí hoặc chữ nghĩa chưa kiểm chứng: trước tiên xem màn hình／nhờ đối phương chụp ảnh rồi mới viết, không đoán.

## Phụ thuộc

- **Bản thân cách viết không gắn nền tảng**: các nguyên tắc áp dụng cho mọi môi trường cộng tác cần "nhờ người ta làm theo trên màn hình", không dùng công cụ nào, không cần quyền hạn bổ sung, viết trong Notepad cũng theo được.
- **Gói này có tải được trên từng máy chủ chạy hay không, gọi thế nào**: xem "cách cài và cách gọi trên từng máy chủ chạy" trong [skill M0 sub-agent](../sub-agent/SKILL.md) ở gốc gói, kỹ năng này không viết riêng các bước cài đặt. Trong đó Grok Bot là "được hỗ trợ, cần cấu hình thủ công": lưu văn bản này thành kỹ năng riêng rồi gọi theo tên; Claude Code cấu trúc đã sẵn, không nằm trong danh sách hỗ trợ đợt đầu.
- Nếu một bước nào đó phụ thuộc vào giao diện riêng của một sản phẩm (ví dụ một ứng dụng ghi chú nào đó, một trang cài đặt hệ thống nào đó), thì phải ghi rõ trong bước là "trong giao diện sản phẩm X"; chưa làm theo và kiểm chứng trên sản phẩm đó thì không viết "đã hỗ trợ".

## Ví dụ

Xem mục 4 bên dưới: ví dụ một "chỉ mở một công tắc trong trang cài đặt ghi chú giả", minh họa gọi tên duy nhất, không đụng vào hai mục kia, làm xong sẽ thấy gì, không thấy thì dừng; ví dụ hai "nhờ chính người phụ trách bấm một cái", minh họa viết thế nào bước chỉ chính người phụ trách làm được. Hai ví dụ đều là hư cấu, không có khóa thật, mã QR, chữ trên màn hình có thể nhận diện, đường dẫn thật, tài khoản thật.

## Đã xác minh đến đâu

Các nguyên tắc được chắt lọc từ cách viết hướng dẫn thao tác mà đội "một người điều hành + nhiều trợ lý" dùng lâu dài; gói công khai bảo đảm **cách viết các bước có thể theo được**. Việc có giảm được "bấm nhầm／hỏi lại" hay không, xem từng mục "vẫn chưa giải quyết" và thuyết minh xác minh ở cuối văn bản trong `../ops-case-notes/` **[M4]** cùng kho; phần chính văn của kỹ năng này không kết luận về hiệu quả.

---

Một câu: **Viết cho người mới ngồi trước màn hình đọc — mỗi lần một bước, gọi tên duy nhất, nói rõ làm xong sẽ thấy gì.**

## 1. Mục đích

Hướng dẫn thao tác là để cho **người không biết nội tình** dùng. Người đọc không nhìn thấy mạch ngữ cảnh trong đầu bạn, cũng không nhận ra "cái sao chép đó". Mục tiêu chỉ có một: đối phương làm theo một lần là được, không phải quay lại hỏi "bấm cái nào".

## 2. Nguyên tắc

### 2.1 Lời lẽ bình dân, chỉ viết thứ nhìn thấy trên màn hình

- Dùng cách nói hằng ngày, hạn chế dùng tiếng lóng mà đối phương không nhìn thấy trên màn hình.
- Mỗi bước nói rõ: **ở chỗ nào trên màn hình, trông thế nào, thứ mấy, nằm cạnh cái gì**.
- Không nhắc đến trạng thái chạy nền mà đối phương lúc này không nhìn thấy.

### 2.2 Mỗi lần một bước; nói rõ làm xong sẽ thấy gì

- Mỗi bước chỉ sắp **một động tác** (bấm một cái, vuốt một cái, sao chép một dòng, mở một công tắc).
- Viết rõ sau bước này đối phương nên thấy gì: màu đổi, công tắc sang bên phải, clipboard có chữ, một dòng nào đó được tô sáng, v.v.
- Không thấy kết quả mong đợi: ghi rõ "dừng lại, báo cho người thực thi／người điều hành, không bấm tiếp".

### 2.3 Khi có mấy thứ trông giống nhau, gọi tên duy nhất một mục; các mục còn lại ghi "không đụng"

- Trên màn hình có từ hai mục trở lên đều có thể "sao chép／xác nhận／mở" thì phải gọi tên **cái đúng**.
- Độ chi tiết khi viết nên là: `dòng thứ mấy ＋ chữ ở đầu dòng đó ＋ bấm biểu tượng nào ở bên nào`.
- Ví dụ (minh họa cấu trúc, không phải giao diện thật): "Bấm biểu tượng sao chép ngoài cùng bên phải của dòng thứ nhất 'DEMO-POST đến'; dòng thứ hai, dòng thứ ba không đụng."

### 2.4 Vị trí chưa kiểm chứng thì không đoán

- Nút ở đâu, chữ là gì, chưa tận mắt xem hoặc chưa đối chiếu ảnh chụp hiện tại thì trước tiên đừng viết chết.
- Nhờ đối phương chụp một tấm, hoặc người thực thi xem rõ rồi mới viết thì tốt hơn; khoanh được mục tiêu trên ảnh là tốt nhất.
- Kiểu phỏng đoán "chắc là ở trong cài đặt" không tính là bước đạt.

### 2.5 Chỗ khác biệt rõ với hệ thống thường gặp thì nói một câu là đủ

- Nếu một bước nào đó trên Windows và Mac (hoặc máy tính và điện thoại) khác vị trí／khác cách gọi, chỉ cần **một câu** đối chiếu, không triển khai thành bài hướng dẫn.
- Ví dụ: "Nếu bạn dùng hệ thống khác, công tắc cùng loại có thể nằm trong 'Tùy chọn hệ thống' chứ không phải 'Cài đặt' — hãy lấy thứ bạn thực sự thấy trên màn hình làm chuẩn."

### 2.6 Ngắn mà chính xác

- Mỗi bước một hai câu; không dàn trải giải thích, không kể chuyện nguyên lý.
- Khi cần ghi chú, nén ghi chú thành nửa câu, treo ngay sau động tác, không mở thêm đoạn dài.

### 2.7 Trước khi gửi đi thì ai xem qua một lượt

- Viết xong các bước, tốt nhất để người **đã xem cùng màn hình đó** đối chiếu từng câu một rồi mới gửi cho người mới.
- Hướng dẫn chưa kiểm qua thì không đẩy thẳng cho người phụ trách／bên giao việc tự thao tác.

## 3. Danh sách tự kiểm (viết xong đánh dấu một lượt)

- [ ] Mỗi bước có đúng một động tác không?
- [ ] Có ghi "ở đâu／trông thế nào／thứ mấy／nằm cạnh cái gì" không?
- [ ] Có chỗ nào từ hai thứ trông giống nhau trở lên mà không gọi tên duy nhất, không ghi "không đụng" không?
- [ ] Có ghi "làm xong sẽ thấy gì" và "không thấy thì dừng" không?
- [ ] Vị trí và chữ nghĩa đã kiểm chứng chưa (không phải đoán)?
- [ ] Mọi bước buộc chính người phụ trách tự làm, có chỉ viết nhờ chính người phụ trách, không viết cách làm thay không?
- [ ] Nếu bước phụ thuộc giao diện riêng của một sản phẩm, có ghi rõ tên sản phẩm không? Chỗ chưa xác minh có tránh được "đã hỗ trợ" không?

## 4. Ví dụ hư cấu

> Tên ứng dụng và chữ trên giao diện dưới đây đều hư cấu, chỉ để minh họa cách viết. Xin đừng đối chiếu với bất kỳ sản phẩm thật nào.

### Ví dụ một: chỉ mở một công tắc trong trang cài đặt ghi chú giả

**Tình huống**: nhờ người mới mở "đồng bộ đến bản trình diễn" trong ứng dụng máy tính "Ghi chú mây Demo" (hư cấu). Trang cài đặt có ba công tắc trông rất giống nhau.

**Các bước gửi cho người mới (cách viết đạt)**:

1. Mở ứng dụng "Ghi chú mây Demo". Bấm mục dưới cùng của thanh bên trái "Cài đặt" (bên trái chữ có một biểu tượng bánh răng).
   **Làm xong sẽ thấy**: bên phải đổi thành cả một trang, tiêu đề trên cùng là "Cài đặt trình diễn".
2. Trong trang "Cài đặt trình diễn" cuộn xuống, cuộn đến tiêu đề nhóm "Đồng bộ (dùng cho trình diễn)" thì dừng. Nhóm này từ trên xuống có ba công tắc, chữ bên trái lần lượt là:
   - "Đồng bộ đến bản trình diễn"
   - "Đồng bộ đến bản luyện tập"
   - "Đồng bộ đến bản lưu trữ"
   **Làm xong sẽ thấy**: ba dòng chữ đều ở trên màn hình, bên phải mỗi dòng có một nút tròn, hiện giờ đều ở bên trái.
3. **Chỉ mở dòng thứ nhất** "Đồng bộ đến bản trình diễn": bấm nút tròn bên phải nó.
   **"Đồng bộ đến bản luyện tập" và "Đồng bộ đến bản lưu trữ" đều không đụng.**
   **Làm xong sẽ thấy**: nút tròn của dòng thứ nhất trượt sang bên phải, rãnh sáng lên; nút tròn của hai dòng dưới vẫn ở bên trái.
4. Nếu không tìm thấy sáu chữ "Đồng bộ đến bản trình diễn", hoặc bấm nút tròn mà không trượt sang bên phải: **dừng lại**, chụp một tấm màn hình hiện tại gửi cho người thực thi, các công tắc khác đều không được bấm.

**Cách viết không đạt (để đối chiếu, đừng làm theo)**:

> "Vào cài đặt bật đồng bộ lên."

Vấn đề: không nói cài đặt ở đâu, ba cái đồng bộ thì bật cái nào, bật xong trông thế nào, cũng không nói sai thì làm sao. Người mới rất có thể bật cả ba, hoặc bật nhầm một cái mà vẫn tưởng đã làm xong.

> "Trong cài đặt tìm nhóm đồng bộ, bật cái đầu tiên, chắc là được."

Vấn đề: tốt hơn câu trên, nhưng "cái đầu tiên" không ghi chữ, giao diện đổi bản, thứ tự thay đổi là bấm nhầm ngay; "chắc là được" là đoán, không ghi làm xong sẽ thấy gì, không thấy thì làm sao.

### Ví dụ hai: bước chỉ chính người phụ trách làm được

**Tình huống**: người thực thi đã chuẩn bị xong một bản xuất trong ứng dụng hư cấu "Sổ chi tiêu Cam Nhỏ Demo", bước cuối "xác nhận xuất" phải do chính chủ tài khoản bấm, người thực thi không bấm thay được.

**Cách viết đạt**:

1. **Bước này xin chính bạn bấm**, phía tôi không bấm thay bạn được.
   Ở trên cùng "Sổ chi tiêu Cam Nhỏ Demo" bấm "Xuất", trong cửa sổ nhỏ hiện ra chỉ có một nút màu xanh "Xác nhận xuất", bấm nó.
   **Làm xong sẽ thấy**: cửa sổ nhỏ đóng lại, trên cùng hiện một dòng chữ xanh "Đã xuất (trình diễn)".
2. Không thấy chữ xanh, hoặc trong cửa sổ hiện ra có nhiều hơn một nút: **dừng lại**, chụp màn hình gửi tôi, không bấm cái khác.

**Cách viết không đạt**:

> "Bạn không phải bận tâm, tôi bấm từ xa thay bạn."

Vấn đề: đổi việc chỉ chính người phụ trách làm được thành làm thay. Cách làm đạt là nhờ chính người phụ trách bấm, và viết rõ cái bấm đó.

## 5. Phân công với các kỹ năng khác trong cùng kho

| Kỹ năng | Quản cái gì |
|---|---|
| Kỹ năng này `beginner-ops-writing` | **Viết thế nào** các bước làm theo cho người mới đọc |
| `../dispatch-accept-verify/` **[M1]** | Sau khi giao việc thì đăng ký thế nào, đến giờ kiểm thế nào, trả lời "đã nhận" thế nào |
| `../evidence-before-done/` **[M2]** | Trước khi nói "đã làm xong" thì tự tay xác minh bằng chứng thế nào |

Ba kỹ năng có thể cài cùng nhau: trước tiên viết rõ các bước (**[M3]** kỹ năng này) → giao người làm theo và thu hồi về (**[M1]** `dispatch-accept-verify`) → trước khi bàn giao thì xác minh rồi mới tuyên bố hoàn thành (**[M2]** `evidence-before-done`).

## 6. Ghi chú về nền tảng (tóm tắt)

- Kỹ năng này dạy **cách viết văn bản hướng dẫn**, không gắn với lệnh riêng của một sản phẩm trợ lý nào.
- Trạng thái tải và gọi của gói này trên tám máy chủ chạy, xem thống nhất ở [skill M0 sub-agent](../sub-agent/SKILL.md) ở gốc gói; kỹ năng này không liệt kê lại cách cài của từng nhà.
- Grok Bot: được hỗ trợ, cần cấu hình thủ công (lưu thành kỹ năng riêng rồi gọi theo tên). Cài kỹ năng vào chỉ giúp trợ lý soạn các bước theo đúng cách viết này, không vì thế mà có thêm bất kỳ tự động hóa nào; điều này chỉ nói về sản phẩm Grok Bot, không đại diện cho các ứng dụng khác của Grok.
- Claude Code: cấu trúc đã sẵn, không nằm trong danh sách hỗ trợ đợt đầu.
- Mọi bước kiểu "xin thao tác trong giao diện ứng dụng X" đều lấy giao diện hiện tại của ứng dụng đó làm chuẩn; sau khi giao diện đổi bản thì phải kiểm lại chữ nghĩa và vị trí.

---

## Ghi chú nguồn

Các nguyên tắc được viết lại từ cách làm "viết hướng dẫn thao tác cho người chưa quen máy tính" mà đội dùng nội bộ lâu dài. Văn bản này chỉ thu nhận các yêu cầu về cách viết, **không chứa và cũng không thuật lại** các phần khác của quy định chung nội bộ. Ví dụ là hư cấu. Giấy phép xem `LICENSE` (MIT) và `NOTICE` ở gốc kho.
