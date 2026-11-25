---
name: ops-case-notes
description: >-
  [M4] Hồ sơ vận hành đã ẩn danh (Sanitized ops case notes). Sau khi một người điều hành và nhiều trợ lý dài hạn thật sự chạy qua một giai đoạn dây chuyền cập nhật hằng ngày,
  để lại những ca ở tầng phương pháp: vấn đề thật, cách sửa đã áp dụng, kết quả thực tế, những hạn chế vẫn chưa giải quyết.
  Dùng khi muốn biết hai kỹ năng giao nhận và bằng chứng bàn giao trong cùng kho được dùng thế nào trong việc thật, sẽ sót ở đâu, hoặc khi muốn viết cho đội mình một hồ sơ vận hành cùng dạng.
  Use when you want real, redacted cases of how a human-led AI team changed its handoff and
  verification habits, what improved, and what is still unproven.
license: MIT
metadata:
  version: "0.1.0"
  platform: "DeepSeek Harness"
---
# [M4] Hồ sơ vận hành đã ẩn danh

Thuộc gói mã nguồn mở Solo to Team · Một người thành cả đội (solo-to-team-skills).

## Gồm những gì

Hai nhóm ca đã ẩn danh và một phần thuyết minh xác minh:

- **A｜Dây chuyền cập nhật hằng ngày đã được sửa đổi thế nào**: một chuỗi bàn giao nhiều chuyên mục mỗi ngày chạy khoảng hơn hai tuần, trong đó đã sửa những cách làm nào, những gì vẫn chưa chứng minh.
- **C｜Chuỗi nghiệm thu đã bắt sót thế nào**: ba trường hợp sót thật, mỗi trường hợp viết theo bốn khối "vấn đề／cách sửa／kết quả／vẫn chưa giải quyết", và chỉ ra cách làm tương ứng trong các kỹ năng cùng kho.
- **Bảng điều kiện phụ thuộc nền tảng**: cách làm nào đổi sang môi trường nào cũng dùng được, cách làm nào phụ thuộc năng lực của nền tảng máy chủ chạy.
- **Thuyết minh xác minh**: những hồ sơ này chứng minh được gì, không chứng minh được gì.

## Dành cho ai

- Người đã hoặc dự định để một người điều hành nhiều trợ lý dài hạn (hoặc tác nhân con) phân công bàn giao
- Người đã cài `../dispatch-accept-verify/` **[M1]** (giao nhận) và `../evidence-before-done/` **[M2]** (bằng chứng bàn giao) trong cùng kho, muốn xem chúng triển khai thế nào trong việc thật, sẽ sót ở đâu
- Người muốn viết cho đội mình một hồ sơ vận hành kiểu "đã sửa gì, còn chưa chứng minh gì"

## Cách dùng

1. Đọc tổng quan A trước, phán đoán chuỗi cộng tác của bạn có giống về quy mô và nhịp độ ở đây hay không.
2. Rồi đọc ba trường hợp sót ở C, đối chiếu "kỹ năng tương ứng" ở cuối mỗi trường hợp, quay về kỹ năng cùng kho tìm cách làm cụ thể.
3. Xem "phụ thuộc nền tảng viết thế nào", căn cứ máy chủ chạy của bạn có năng lực tương ứng hay không mà chọn cách tự động hoặc cách thay thế thủ công.
4. Nếu muốn viết hồ sơ vận hành của chính mình: theo cấu trúc bốn khối của tệp này, sau mỗi kết quả đều kèm một câu "vẫn chưa chứng minh điều gì".

## Phụ thuộc

- Kỹ năng này là hồ sơ **dạng đọc**, không gọi công cụ nào, không cần quyền hạn bổ sung.
- Muốn triển khai thật thì phải đi kèm hai kỹ năng cùng kho: `../dispatch-accept-verify/` **[M1]**, `../evidence-before-done/` **[M2]**.
- Việc kiểm tra định kỳ, gửi tin nhắn giữa các trợ lý, đánh thức, được nhắc trong văn bản đều là năng lực máy chủ chạy của nền tảng nơi thực hành gốc, **không được cung cấp kèm gói này**, xem "phụ thuộc nền tảng viết thế nào".

## Ví dụ

Mục C1 "đã giao chính văn mà không giao dấu hiệu bàn giao": một người thực thi giao đủ chính văn nhưng không để lại dấu hiệu bàn giao, bên nhận đến lúc gộp bản mới phát hiện. Đối chiếu mục 4 của `../dispatch-accept-verify/` **[M1]** "không có dòng 'đã nhận được kết quả' thì coi như chưa nhận", và dòng "đồ vật đã đặt vào một chỗ nào đó" ở mục 3 của `../evidence-before-done/` **[M2]**, chính là khâu kiểm tra được bổ sung lần này.

## Đã xác minh đến đâu

Tệp này ghi lại những thay đổi phương pháp đã thật sự chạy trong đội, căn cứ là bản tóm tắt đã ẩn danh từ các buổi tổng kết nội bộ và hồ sơ giao nhận. Người ngoài không thể đối chiếu hồ sơ gốc; gói này cam kết cách làm có thể theo được, **không cam kết** thành tích có thể kiểm toán độc lập, và **vẫn chưa chứng minh** tỷ lệ lỗi của cả đội giảm hay việc thúc tiến độ giảm. Xem "thuyết minh xác minh" ở cuối văn bản.

---

Một câu: **Viết lại cùng nhau: đã sửa gì, đổi được gì, còn chưa chứng minh gì.**

## Kinh nghiệm từ đâu mà có

Những hồ sơ này đến từ vận hành thật trên **Grok Bot**: một người phụ trách làm bên giao việc, một trợ lý người điều hành phụ trách điều phối, nhiều trợ lý dài hạn mỗi người quản một mảng, mỗi ngày tiếp sức ra một bản bàn giao nhiều chuyên mục, mỗi tuần tổng kết tập trung một lần. Trong thực hành gốc có dùng một số năng lực máy chủ chạy của nền tảng đó, ví dụ kiểm tra định kỳ, các trợ lý gửi tin nhắn cho nhau, đánh thức một trợ lý khác, trò chuyện nhóm, đọc ghi file dùng chung.

Tệp này chắt lọc ra những cách cộng tác **không gắn với nền tảng**: đăng ký một dòng, đến giờ có người kiểm, nhận việc／nhận được kết quả／nghiệm thu ghi tách nhau, trước khi bàn giao phải có bằng chứng khớp với phiên bản hiện tại, thông qua xong thì ngay tại chỗ yêu cầu chặng tiếp theo khởi công. Những cách này đổi sang môi trường khác cũng làm theo được. Cùng bộ cách này về sau cũng đã được tải và gọi thử thực tế trong nhiều công cụ Agent, phạm vi xem [skill M0 sub-agent](../sub-agent/SKILL.md) ở gốc gói. A và C vẫn chỉ ghi những thay đổi phương pháp trên chuỗi chính cập nhật hằng ngày trong đội, không tính việc xác minh cài đặt là hiệu quả của ca.

Cần nói rõ ranh giới: **cài gói này vào sẽ không có được năng lực giao việc, đánh thức, trò chuyện nhóm hay định kỳ của Grok Bot.** Gói này chỉ có văn bản kỹ năng và mẫu, không có bất kỳ tự động hóa nào.

## A｜Dây chuyền cập nhật hằng ngày đã được sửa đổi thế nào

### Tổng quan

| Mục | Nội dung |
|---|---|
| Chạy bao lâu | Khoảng hơn hai tuần trên chuỗi chính cập nhật hằng ngày, cộng thêm mỗi tuần một lần tổng kết (đã tổng kết 3 lần) |
| Cấp quy mô | Mỗi ngày bàn giao theo tập nhiều chuyên mục; tư liệu trước tiên qua kiểm duyệt độc lập rồi mới giao cho chặng sau; mỗi tuần ra thêm một kỳ tin động thái công cụ |
| Các bên tham gia | Một người phụ trách (bên giao việc), một người điều hành, nhiều trợ lý cộng tác dài hạn |
| Không viết | Tổng số nhiệm vụ nội bộ, số hiệu, đường dẫn, lịch cụ thể |

### Vấn đề thật

Cách làm lúc khởi đầu là "mỗi ngày kiểm duyệt toàn bộ cả bản bàn giao". Chuyên mục nhiều lên, việc kiểm duyệt toàn bộ tự nó thành nút thắt: kiểm duyệt xếp hàng, bàn giao bị đẩy lùi; đồng thời "ai đã giao, ai đã nhận" chỉ dựa vào một câu trong trò chuyện, giao chưa giao, nhận chưa nhận thường không nói rõ được.

### Cách sửa đã áp dụng

1. **Kiểm duyệt toàn bộ đổi thành kiểm xác suất**: mỗi chặng trước tiên tự kiểm theo bằng chứng bàn giao; mỗi ngày chỉ rút một ít số liệu, ngày tháng, xuất xứ để đối chiếu lại văn bản gốc; mỗi tuần tổng kết tập trung một lần, xem vấn đề tổng thể.
2. **Ghi tách việc giao và việc nhận**: người giao để lại dấu hiệu bàn giao, người nhận viết riêng "đã nhận được kết quả"; không được lấy dấu hiệu bàn giao coi như đã nhận được.
3. **Thông qua xong thì ngay tại chỗ hối khởi công**: sau tổng kết bổ sung vào kỹ năng giao nhận — ủy quyền hoặc thông qua vừa ra, người giao việc ngay tại chỗ yêu cầu chặng tiếp theo khởi công, nhận được "đã nhận việc" hoặc bằng chứng khởi công thì mới coi là đã tiếp nhận.
4. **Tư liệu kiểm duyệt trước rồi mới giao**: tư liệu đầu nguồn trước tiên qua một trợ lý khác kiểm duyệt độc lập, đạt rồi mới giao cho hạ nguồn.

### Kết quả thực tế

- Chuỗi chính cập nhật hằng ngày vẫn chạy liên tục trong thời gian điều chỉnh phương pháp, cộng dồn khoảng hơn hai tuần, trong đó tổng kết 3 lần.
- "Kiểm duyệt trước rồi mới giao" chạy thông liên tiếp nhiều ngày; kiểm xác suất liên tiếp nhiều ngày, các mục được rút đều đối chiếu lại văn bản gốc và đạt.
- Ba cách làm trên đã được viết vào hai kỹ năng cùng kho, trở thành cách làm có thể theo được.

### Hạn chế vẫn chưa giải quyết

- **Vẫn chưa chứng minh tỷ lệ lỗi của cả đội giảm hay việc thúc tiến độ giảm.** Buổi tổng kết ghi rõ: không thể chứng minh lỗi cùng loại ít đi, không thể chứng minh người phụ trách thúc ít hơn, tổng thể có tốt hơn hay không thì không kết luận.
- Những thời hạn kiểu "nhận được rồi thì trong bao lâu ghi đã nhận được kết quả" từng được đánh dấu "chờ xác minh", gói này không cam kết.
- Kiểm xác suất có thể thay thế kiểm duyệt toàn bộ về lâu dài hay không, thời gian còn quá ngắn, chưa thấy được.
- Không có nhóm đối chứng, không có thống kê tỷ lệ phát sinh trước sau theo cùng một tiêu chí.

## C｜Chuỗi nghiệm thu đã bắt sót thế nào

Ba trường hợp sót dưới đây đều đã thật sự xảy ra, đã bỏ số hiệu, ngày tháng, tên tác phẩm và tên thật của nhân vật.

### C1｜Chính văn đã đủ, dấu hiệu bàn giao thì chưa giao

- **Vấn đề thật**: một ngày nọ một người thực thi giao đủ chính văn, nhưng không để lại dấu hiệu bàn giao, cũng thiếu một mục thông tin bìa. Bên nhận đến lúc gộp bản kiểm tra mới phát hiện.
- **Cách sửa đã áp dụng**: nói rõ "dấu hiệu bàn giao" và "đã nhận được kết quả" là hai việc khác nhau; bên nhận khi nhận hàng kiểm file và thông tin kèm theo theo danh sách, thiếu một mục thì không ghi "đã nghiệm thu".
- **Kết quả thực tế**: sau khi nhắc thì bù đủ ngay trong ngày.
- **Hạn chế vẫn chưa giải quyết**: lần này là do bên nhận kiểm ra; bên giao có mỗi lần tự kiểm trước hay không vẫn dựa vào thói quen, không có biện pháp cưỡng chế.
- **Kỹ năng tương ứng**: mục 4 của `../dispatch-accept-verify/` **[M1]** "nhận được thì ghi đã nhận: tách thành ba trạng thái để ghi" (nhận việc／nhận được kết quả／nghiệm thu ghi tách nhau); mục 3 của `../evidence-before-done/` **[M2]** "đồ vật đã đặt vào một chỗ nào đó".

### C2｜Đã thông qua, không ai hối khởi công

- **Vấn đề thật**: một công việc đã được ủy quyền thông qua, người điều hành quay sang kết thúc việc khác, bỏ sót việc yêu cầu người thực thi khởi công. Đến khi người phụ trách hỏi lại mới phát hiện công việc này chưa hề động đậy.
- **Cách sửa đã áp dụng**: kỹ năng giao nhận thêm một điều — ủy quyền hoặc thông qua vừa ra, người giao việc ngay tại chỗ yêu cầu chặng tiếp theo khởi công, thống nhất người thực thi, sản phẩm bàn giao, giờ giao; chỉ "đã nhận được tin nhắn" không tính là đã tiếp nhận, phải có "đã nhận việc" hoặc bằng chứng khởi công. Việc song song thu xếp việc khác không phải lý do bỏ sót việc hối khởi công.
- **Kết quả thực tế**: cách sửa đã được viết vào kỹ năng giao nhận, trở thành một điều có thể theo được; việc bỏ sót là được ghi lại trong buổi tổng kết, mới ép ra được điều sửa này.
- **Hạn chế vẫn chưa giải quyết**: cách kiểm nghiệm đặt ra lúc tổng kết là "xem công việc thật đã được ủy quyền tiếp theo", có từ đó không còn phải dựa vào việc người phụ trách hỏi lại hay không vẫn đang quan sát, **vẫn chưa chứng minh**.
- **Kỹ năng tương ứng**: mục 6 "điểm danh khởi công, thu công" và mục 8 "thông qua xong thì lập tức hối khởi công" của `../dispatch-accept-verify/` **[M1]**.

### C3｜Nội bộ cho điểm cao, cảm nhận thành phẩm vẫn sót

- **Vấn đề thật**: một thành phẩm video đã đạt điểm cao trong buổi đánh giá nội bộ, sau khi giao cho người phụ trách thì vấn đề nhịp phụ đề và cảm nhận do người phụ trách chỉ ra trước.
- **Cách sửa đã áp dụng**: ghi lần này vào buổi tổng kết, nói rõ điểm đánh giá nội bộ không thể thay cho việc thật sự xem một lượt thành phẩm; đối chiếu cách làm của bằng chứng bàn giao, "video đã làm xong" phải phát từ đầu đến cuối, ít nhất xem mẫu đoạn đầu, đoạn giữa, đoạn cuối.
- **Kết quả thực tế**: trường hợp sót này được ghi vào buổi tổng kết, giữ lại làm ví dụ cho "khâu nghiệm thu cuối vẫn còn sót", không bị gói lại thành đã giải quyết.
- **Hạn chế vẫn chưa giải quyết**: vấn đề thuộc loại cảm nhận rất khó viết thành mục trong danh sách; tình huống đánh giá cho điểm cao mà bên giao việc vẫn không hài lòng, cách làm này không bảo đảm không tái diễn.
- **Kỹ năng tương ứng**: mục 3 "video đã làm xong" và mục 4 "những dấu hiệu nên dừng lại" của `../evidence-before-done/` **[M2]**.

### Điểm chung của ba trường hợp sót

Đều không phải "không ai làm việc", mà là **chỗ bàn giao không để lại dấu vết** hoặc **việc đối chiếu dừng ở giữa đường**. Đăng ký, nhận việc／nhận được kết quả／nghiệm thu ghi tách nhau, thông qua xong thì hối khởi công, trước khi bàn giao tận tay xem một lượt, chính là nhắm riêng vào mấy khe hở này.

## Phụ thuộc nền tảng viết thế nào

Cách làm phổ quát (đăng ký một dòng, đến giờ có người kiểm, nhận việc／nhận được kết quả／nghiệm thu ghi tách nhau, trước khi bàn giao phải có bằng chứng khớp với phiên bản hiện tại, thông qua xong thì hối khởi công) **dùng được trong mọi môi trường**, tối thiểu chỉ cần một hồ sơ dùng chung và một người biết kiểm đúng giờ. Dưới đây chỉ liệt kê phần phụ thuộc máy chủ chạy.

### Theo năng lực

| Năng lực | Máy chủ chạy có thì có thể | Máy chủ chạy không có thì đổi sang |
|---|---|---|
| Kiểm tra định kỳ | Đến giờ tự động nhắc người kiểm tra kiểm mọi hạng mục chưa xong | Dòng đăng ký ghi thời gian dự kiến và người kiểm tra; người kiểm tra mỗi lần khởi công, thức dậy thì việc đầu tiên là kiểm mọi hạng mục chưa xong (không ai nhận, đã nhận mà chưa giao, đã giao mà chưa xác minh) |
| Gửi tin nhắn giữa các trợ lý | Sau khi thông qua thì gửi thẳng "khởi công" cho chặng sau | Ghi một dòng "hối khởi công" trong hồ sơ dùng chung, do người phụ trách hoặc người điều hành chuyển đạt |
| Đánh thức một trợ lý khác | Trợ lý được gọi thức dậy thì xem việc chờ trước tiên | Do người mở phiên trò chuyện tương ứng, dán hướng dẫn khởi công vào |
| Trò chuyện nhóm | Nhiều bên đồng thời thấy việc thông qua và khởi công | Ghim một chỗ trong tài liệu dùng chung, mọi người lấy đó làm chuẩn |
| Đọc ghi file dùng chung | Kết quả để ở vị trí thỏa thuận, người nhận đến nguyên chỗ đó kiểm | Khi giao kèm cả file hoặc đường link; người nhận mở ra kiểm ở phía mình rồi mới ghi "đã nghiệm thu" |

### Theo nền tảng

| Nền tảng | Trạng thái | Dùng cách làm thế nào |
|---|---|---|
| Codex／WorkBuddy／DeepSeek Harness／Cursor／CodeBuddy／Kimi Work／Văn phòng Qianwen (QwenWork) | Được hỗ trợ, đã có ghi nhận chạy thông (cài／cấu hình, gọi theo tên, tạo ra dòng đăng ký) | Sau khi tải thì gọi theo tên, làm giao nhận và đối chiếu theo chính văn; cách cài cụ thể và phạm vi xác minh xem [skill M0 sub-agent](../sub-agent/SKILL.md) ở gốc gói. |
| Grok Bot | Được hỗ trợ, cần cấu hình thủ công; nguồn kinh nghiệm chính | Lưu chính văn kỹ năng thành kỹ năng riêng rồi gọi theo tên; cũng không viết thành lối cài đặt dùng ngay được; chỉ nói về Grok Bot, không đại diện cho các ứng dụng khác của Grok. |
| Claude Code | Cấu trúc đã sẵn, chạy thông còn phải bù; không nằm trong danh sách hỗ trợ đợt đầu | Cấu trúc plugin đã sẵn, chạy thông được hay không vẫn chờ xác minh. |
| Máy chủ chạy khác | Chưa xác minh, cách thích ứng chờ xác nhận | Có thể đọc cách làm phổ quát trước, tải được và gọi được hay không phải xác minh riêng. |

Nói lại lần nữa: trong gói này **không có** tự động giao việc, tự động đánh thức, tự động biên nhận. Việc đến giờ kiểm, ghi nhận việc／nhận được kết quả／nghiệm thu, hối khởi công, đều dựa vào các bước thủ công hoặc bước trong phiên trò chuyện của kỹ năng.

## Thuyết minh xác minh

1. **Chạy bao lâu**: khoảng hơn hai tuần trên chuỗi chính cập nhật hằng ngày, mỗi tuần tổng kết một lần, tổng cộng 3 lần.
2. **Cấp quy mô giao nhận**: mỗi ngày bàn giao theo tập nhiều chuyên mục; tư liệu trước tiên qua kiểm duyệt độc lập rồi mới giao cho chặng sau; mỗi tuần một kỳ tin động thái công cụ. Không liệt kê số hiệu nội bộ và tổng số.
3. **Đã sửa những cách làm nào** (trước khi sửa → sau khi sửa):
   - Mỗi ngày kiểm duyệt toàn bộ cả bản → mỗi chặng tự kiểm + mỗi ngày kiểm xác suất một ít sự kiện + mỗi tuần tổng kết tập trung
   - Một câu "đã giao rồi" là xong → dấu hiệu bàn giao và "đã nhận được kết quả" ghi tách nhau
   - Thông qua xong thì chờ người ta tự khởi công → người giao việc ngay tại chỗ hối khởi công, có "đã nhận việc" hoặc bằng chứng khởi công mới tính là đã tiếp nhận
   - Điểm nội bộ cao là giao → trước khi giao tận tay xem một lượt thành phẩm
4. **Vẫn chưa chứng minh điều gì**: không có thí nghiệm đối chứng, không có tỷ lệ phát sinh trước sau theo cùng tiêu chí; vẫn chưa chứng minh tỷ lệ lỗi của cả đội giảm hay việc thúc tiến độ giảm; cách sửa "thông qua xong thì hối khởi công" vẫn đang được quan sát; tám nền tảng mỗi nền tảng có một hồ sơ nghiệm thu của nhiệm vụ hữu hạn, không đại diện cho tính ổn định hay việc mọi nhiệm vụ đều làm được.
5. **Loại bằng chứng**: căn cứ là bản tóm tắt đã ẩn danh từ các buổi tổng kết nội bộ và hồ sơ giao nhận. Người ngoài không thể đối chiếu hồ sơ gốc. Gói này cam kết cách làm có thể theo được, không cam kết thành tích có thể kiểm toán độc lập.

---

Phương pháp đổi nền tảng thì mang đi được, tự động hóa của nền tảng thì không mang đi được; đã sửa gì và còn chưa chứng minh gì thì phải viết cùng nhau.
