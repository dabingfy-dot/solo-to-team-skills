---
name: dispatch-accept-verify
description: >-
  [M1] Nền tảng cộng tác đa trợ lý. Dùng sau khi giao việc cho trợ lý khác, cho phiên trò chuyện của mô hình bên ngoài, hoặc sau khi mở lệnh chạy nền:
  quản việc đăng ký thế nào, đến giờ kiểm thế nào, nhận việc／nhận được kết quả／nghiệm thu hoàn thành ghi tách nhau ra sao, không ai nhận thì làm thế nào,
  điểm danh khởi công và thu công thế nào, thông qua xong thì lập tức hối khởi công; chỉ nghiệm thu hoàn thành hoặc hủy có ủy quyền mới được ra khỏi danh sách việc chưa xong. Không dùng cho: thứ thu hồi về có đúng hay không (xem
  ../evidence-before-done/ **[M2]** cùng kho); chờ xem vì sao chương trình thoát ra, sửa thế nào (dùng loại kỹ năng xử lý sự cố khác).
license: MIT
metadata:
  version: "0.1.0"
  platform: "DeepSeek Harness"
---
# [M1] Việc giao đi phải thu hồi về

Thuộc gói mã nguồn mở Solo to Team · Một người thành cả đội (solo-to-team-skills).

## Gồm những gì

Một bộ cách làm quy trình khép kín kiểu "ai giao thì người đó thu": đăng ký một dòng (ghi rõ ai đến giờ kiểm), đến giờ thì kiểm mọi hạng mục chưa xong theo trạng thái, ghi tách nhau "đã nhận việc", "đã nhận được kết quả", "đã nghiệm thu", ghi tách nhau giữa dự kiến mới và gia hạn chính thức, điểm danh khởi công／thu công, không tự lập tác vụ định kỳ nhắc tiến độ, sau khi ủy quyền hoặc thông qua thì lập tức yêu cầu chặng tiếp theo khởi công. Kèm mẫu dòng đăng ký có thể sao chép (xem `templates/mau-dong-dang-ky.md`; ở gốc kho còn có `templates/task-register-line.md`, cùng cấu trúc, đường dẫn mỗi nơi tự điều chỉnh cho phù hợp).

## Dành cho ai

- Đội nhỏ do một người điều hành, nhiều trợ lý dài hạn (hoặc tác nhân con) làm song song
- Người thường xuyên giao việc cho lệnh chạy nền, phiên trò chuyện bên ngoài, tác vụ liên máy "không chắc có gửi thông báo hoàn thành hay không"
- Người cần hồ sơ bàn giao／tiếp nhận có thể kiểm toán, chứ không phải câu nói miệng "chắc là xong rồi"

## Cách dùng

1. Cài đặt thư mục kỹ năng này (chỉ cần đặt song song với các kỹ năng khác trong cùng kho; không gắn chết vào một sản phẩm trợ lý nào).
2. Mỗi lần giao đi một việc "nền tảng sẽ không chủ động thông báo hoàn thành", hoặc việc bạn không chắc có thông báo hay không: **ngay lúc khởi chạy** hãy đăng ký một dòng theo mẫu.
3. Đến giờ (ví dụ thời gian dự kiến + 5 phút, điều chỉnh theo thời hạn công việc): người kiểm tra ghi rõ trong đăng ký sẽ kiểm **mọi hạng mục chưa xong**, xử lý các mốc tương ứng theo trạng thái của từng hạng mục (không ai nhận, đã nhận mà chưa giao, đã giao mà chưa xác minh); nếu người đó không trực tuyến thì kiểm theo người thay thế hoặc thời điểm kiểm được lần sau ghi trong đăng ký, xem chi tiết ở mục 3.
4. Người thực thi xác nhận nhận việc: ghi thêm "đã nhận việc". Kết quả đã đến vị trí thỏa thuận: ghi thêm "đã nhận được kết quả". Xác minh theo "Trước khi bàn giao phải có bằng chứng" của cùng kho (`../evidence-before-done/` **[M2]**) đạt, và do người có quyền chấp nhận quyết định hoặc chấp nhận theo ủy quyền sẵn có được áp dụng rõ ràng, thì mới ghi thêm "đã nghiệm thu". Nếu chỉ xác minh đạt mà không có quyết định chấp nhận hoặc ủy quyền áp dụng được thì vẫn ghi "đã nhận được kết quả｜xác minh đạt, chờ người có quyền quyết định", không đóng lại; đã có ủy quyền thì không hỏi lại.
5. Ủy quyền／thông qua vừa ra: người giao việc **ngay tại chỗ** yêu cầu chặng tiếp theo khởi công, nhận được "đã nhận việc" hoặc bằng chứng khởi công thì mới coi là đã tiếp nhận.

## Phụ thuộc

- Chỉ cần một môi trường cộng tác bất kỳ cho phép trợ lý đọc ghi hồ sơ dùng chung (tài liệu, chủ đề thảo luận, ghim trong trò chuyện, file trong kho mã).
- Không phụ thuộc nhà cung cấp đám mây cụ thể, plugin IDE cụ thể; có kênh "giao việc／nhận hồi âm" là dùng được.
- **Phụ thuộc**: bước "đã nghiệm thu" phải xác minh theo `../evidence-before-done/` **[M2]** cùng kho, nên khuyến nghị cài cả hai cùng nhau; nếu chỉ cài kỹ năng này thì bước đó do bạn tự tay xác minh từng điều theo thỏa thuận.
- **Kết hợp tùy chọn**: `../beginner-ops-writing/` **[M3]** (viết thế nào những bước buộc chính người phụ trách làm), `../ops-case-notes/` **[M4]** (trong việc thật đã sót ở đâu), không cài cũng không ảnh hưởng kỹ năng này.
- **Khi sao chép thủ công**: sao chép nguyên thư mục `dispatch-accept-verify/`, **kèm cả `templates/`**; chỉ sao chép `SKILL.md` sẽ mất mẫu dòng đăng ký. Khi máy chủ chạy chỉ nhận một bản chính văn (ví dụ lưu thành kỹ năng riêng), hãy dán cả `templates/mau-dong-dang-ky.md` vào.

## Ví dụ

Xem `templates/mau-dong-dang-ky.md`: chờ nhận／đã nhận việc／đã nhận được kết quả／đã nghiệm thu／trả lại／đã hủy／gia hạn／nâng cấp xử lý／hối khởi công／điểm danh xong, mỗi loại một dòng mẫu, sao chép là dùng được. Phần theo làm trọn vẹn một công việc nhỏ xem `examples/walkthrough-meeting-notes/` ở gốc gói.

## Đã xác minh đến đâu

Cách làm này đã chạy trên chuỗi chính cập nhật hằng ngày trong đội theo mô hình "một người điều hành + nhiều trợ lý dài hạn" (hồ sơ vận hành đã ẩn danh xem `../ops-case-notes/` **[M4]** cùng kho). Gói công khai cam kết **cách làm có thể theo được**; việc có giảm sót tiếp nhận hay có ít phải thúc tiến độ hơn không, xem cột "vẫn chưa chứng minh" trong hồ sơ vận hành, phần chính văn của kỹ năng này không kết luận về hiệu quả.

---

Một câu: **Ai giao thì người đó thu; thu hồi về, xác minh đạt và có quyền chấp nhận, bàn giao theo thỏa thuận thì mới coi là xong.**

## 1. Phân biệt hai loại việc

- **Loại nền tảng sẽ thông báo** (ví dụ tác vụ nền trong phiên hiện tại chạy xong sẽ đẩy một thông báo): có thể chờ thông báo trước; vẫn nên đăng ký, phòng khi thông báo bị mất thì không ai biết.
- **Loại nền tảng không thông báo** (lệnh trên máy khác, phiên trò chuyện mô hình bên ngoài, công cụ bên thứ ba): ngay lúc khởi chạy là đăng ký, không chờ thông báo. Chương trình chờ của loại việc này có thể âm thầm thoát ra, thông báo có thể mãi mãi không đến. Việc chờ dừng lại **không đồng nghĩa kết quả đã về**: lập tức đến nơi đáng lẽ có kết quả để xem; nhìn thấy rồi mới ghi "đã nhận được kết quả", không nhìn thấy thì tra xem là thất bại hay bị mất, việc này vẫn tính là chưa xong.

## 2. Đăng ký viết thế nào

Trong hồ sơ tiếp sức／giao nhận viết một dòng:

`chờ nhận｜mã định danh công việc｜việc gì｜ai đang làm｜ai thu hồi｜dự kiến mấy giờ giao｜đến giờ ai kiểm (nếu không trực tuyến: người thay thế được ủy quyền／thời điểm kiểm được lần sau)｜kết quả để ở đâu｜làm đến đâu thì tính là xong｜gợi ý chặng tiếp theo dùng những kỹ năng nào`

Mã định danh công việc đặt thế nào cũng được, miễn ngắn, không trùng (như `M-01`), về sau mỗi dòng cập nhật đều bắt đầu bằng nó. Cột cuối có thể để trống; nếu có thì ghi tên kỹ năng (như `evidence-before-done`).

**Chỉ ghi thêm, không viết đè**: trạng thái đổi thì ghi thêm một dòng trạng thái mới, các trường của dòng cũ (nhất là giờ giao dự kiến gốc, kết quả để ở đâu) giữ nguyên như cũ.

"Đến giờ ai kiểm" hãy ghi một người cụ thể, không ghi "đến lúc đó xem ai đang online". Người đó lúc ấy có thể không trực tuyến, thì viết rõ ngay trong cùng ô: mốc then chốt theo ủy quyền sẵn có thì ai thay thế; không có người thay thế thì ghi thời điểm người đó kiểm được lần sau. Nếu thực tế kiểm muộn, ghi thật là mấy giờ kiểm, muộn bao lâu, **không được viết thành đã đỡ được**.

Mẫu đầy đủ có thể sao chép xem `templates/mau-dong-dang-ky.md`.

## 3. Đến giờ kiểm thế nào

Khi nào kiểm: để dư một chút so với thời gian dự kiến, ví dụ +5 phút. Đây chỉ là ví dụ, điều chỉnh theo thời hạn và mức ảnh hưởng của công việc; việc gấp có thể ngắn hơn, việc dài có thể lâu hơn, không cần mỗi việc đều điền tham số phức tạp.

Kiểm gì: khi đến giờ hoặc khi thức dậy, kiểm là **mọi hạng mục chưa xong**. Theo mã định danh công việc tìm dòng ghi giai đoạn công việc hợp lệ gần nhất: chờ nhận, đã nhận việc, đã nhận được kết quả, trả lại, đã nghiệm thu, đã hủy; chỉ đã nghiệm thu thỏa điều kiện mục 4 hoặc hủy có ủy quyền mới kết thúc đơn này, không lọc theo tên của dòng vật lý cuối cùng.

`hối khởi công`, `gia hạn`, `nâng cấp xử lý` chỉ ghi thêm thông tin quá trình, không thay đổi giai đoạn công việc; khi có nhiều dòng liên tiếp thì cũng phải nhìn lại giai đoạn gần nhất. `hối khởi công｜chưa hồi` vẫn là chờ nhận việc; nhận được biên nhận nhận việc rõ ràng hoặc bằng chứng khởi công thì mới ghi thêm "đã nhận việc". `trả lại` chuyển thành chờ giao lại, không được vì các dòng gia hạn／nâng cấp xử lý phía sau mà lại bị coi là chờ xác minh hay đã hoàn thành. Bản tổng hợp điểm danh không thay đổi trạng thái của từng hạng mục; hồ sơ không nhận diện được thì trước tiên giữ nguyên giai đoạn cũ và làm rõ, không dựa vào đó để đóng mục. Đơn mới hoặc mở một vòng mới thì nhất loạt dùng mã định danh công việc mới để đăng ký "chờ nhận", không dùng lại mã cũ; việc giao bù của một đơn chưa kết thúc thì vẫn dùng mã của đơn đó. Nghiệm thu đến muộn hoặc ghi bù quá trình của đơn cũ chỉ thuộc đơn cũ, không thay đổi giai đoạn của đơn mới; không dựa vào một dòng "hối khởi công" để làm sống lại đơn cũ.

Xử lý mốc tương ứng theo giai đoạn hiện tại, không chỉ kiểm "quá giờ mà không ai nhận":

| Trạng thái hiện tại | Đã đến mốc nào | Xử lý thế nào |
|---|---|---|
| Chờ nhận | Đến lúc phải nhận việc mà chưa ai nhận (gồm đã hối khởi công, chưa hồi) | Đi đuổi theo người thực thi; đuổi không được thì ghi "nâng cấp xử lý" |
| Đã nhận việc | Đã đến giờ giao dự kiến | Đến vị trí kết quả xem: nhìn thấy thì ghi "đã nhận được kết quả"; không nhìn thấy thì hỏi tiếp, ghi "gia hạn" theo "đổi lịch" bên dưới, hoặc ghi "nâng cấp xử lý" |
| Đã nhận được kết quả | Chờ xác minh, hoặc xác minh đạt nhưng vẫn chờ người có quyền quyết định | Xác minh theo `../evidence-before-done/` **[M2]**; không đạt thì ghi "trả lại". Đạt và có quyết định chấp nhận hoặc ủy quyền áp dụng được thì mới ghi "đã nghiệm thu"; khi chỉ chờ quyết định thì theo dõi tiếp theo thỏa thuận, không lặp lại việc xác minh đã có hiệu lực |
| Trả lại | Đã đến giờ giao lại | Giống "đã nhận việc": đi xem đã giao bù chưa |
| Hối khởi công, gia hạn, nâng cấp xử lý (ghi chép quá trình) | Đã đến thời điểm kiểm đã thống nhất tương ứng | Nhìn lại giai đoạn hợp lệ gần nhất, xử lý theo dòng tương ứng ở trên; việc đổi lịch chính thức chưa được xác nhận thì vẫn tính quá hạn theo cam kết gốc |

Ai kiểm: người ghi rõ trong đăng ký. Khi người đó không trực tuyến, mốc then chốt theo ủy quyền sẵn có thì do người thay thế kiểm; không có người thay thế thì kiểm theo thời điểm kiểm được lần sau ghi trong đăng ký, và ghi thật là thực tế kiểm lúc mấy giờ, muộn bao lâu. **Khoảng thời gian không ai kiểm được thì không viết là "đã đỡ được".**

Việc chờ dừng lại, hay đối phương bảo đã xong, đều không tính là kết quả đã về: đến vị trí kết quả nhìn thấy rồi, mới ghi "đã nhận được kết quả".

### Đổi lịch: dự kiến mới không đồng nghĩa gia hạn chính thức

Không giao đúng hạn, người thực thi báo một thời gian mới, đó chỉ là **dự kiến mới** (ước lượng hoặc đề xuất của người thực thi), không phải đổi lịch. Khi ghi thêm dòng "gia hạn":

- **Cam kết gốc được giữ nguyên**, ghi kèm lý do, ảnh hưởng (ai đang chờ, đã làm chậm cái gì);
- Dự kiến mới ghi như vậy, đánh dấu "đổi lịch chính thức: chưa xác nhận";
- Sau khi người có quyền đổi lịch (thường chính là người điều hành, phối hợp trong phạm vi quyền sẵn có; nếu người phụ trách có dặn dò khác thì theo dặn dò) xác nhận, mới ghi thêm một dòng "đổi lịch chính thức: đã được ông/bà X xác nhận", thời gian mới khi đó mới tính là cam kết mới. Không đặt thêm khâu phê duyệt riêng;
- Trước khi xác nhận, vẫn tính quá hạn theo cam kết gốc; không được chỉ điền một ngày mới rồi xóa mất việc quá hạn.

Dự kiến mới ghi trong dòng "trả lại" cũng xử lý theo điều này.

## 4. Nhận được thì ghi đã nhận: tách thành ba trạng thái để ghi

Một chữ "đã nhận" chung chung dễ đồng thời chỉ "đã nhận việc" và "đã nhận được kết quả", khi quét mà loại trừ theo nó thì việc chưa làm xong sẽ lọt ra khỏi danh sách. Vì vậy ghi thành ba bước, mỗi bước ghi thêm một dòng, đều kèm mã định danh công việc:

- **Đã nhận việc**: người thực thi xác nhận nhận công việc này; kết quả chưa đến.
- **Đã nhận được kết quả**: sản phẩm bàn giao đã đến vị trí thỏa thuận, người nhận tận mắt nhìn thấy; ghi rõ "chờ xác minh" hoặc "xác minh đạt, chờ người có quyền quyết định".
- **Đã nghiệm thu**: phiên bản hiện tại xác minh đạt theo `../evidence-before-done/` **[M2]**, và người có quyền chấp nhận đã chấp nhận, hoặc người chấp nhận được chỉ định đã chấp nhận theo ủy quyền sẵn có rõ ràng, áp dụng được; ghi người chấp nhận và căn cứ quyết định／ủy quyền, mới có thể bàn giao cho chặng tiếp theo hoặc đóng lại theo thỏa thuận. Nếu người xác minh đã có quyền này thì có thể đồng thời chấp nhận, không hỏi lại chính người phụ trách. Việc người thực thi tự kiểm không thay thế xác minh độc lập mà nhiệm vụ gốc yêu cầu; nghiệm thu cũng không tự động ủy quyền phát hành, thanh toán hay các hành động khác vượt phạm vi.

Xác minh không đạt thì ghi thêm "trả lại", ghi rõ thiếu gì, dự kiến mới (dự kiến mới không đồng nghĩa gia hạn chính thức, xem mục 3), công việc vẫn chưa xong. Người có quyền quyết định nói rõ là không làm nữa thì ghi thêm "đã hủy".

**Chỉ "đã nghiệm thu" thỏa các điều kiện trên hoặc "đã hủy" có ủy quyền mới khiến công việc ra khỏi danh sách việc chưa xong**; chờ nhận, đã nhận việc, đã nhận được kết quả (gồm xác minh đạt chờ quyết định), trả lại đều là chưa xong. Hối khởi công, gia hạn, nâng cấp xử lý và bản tổng hợp điểm danh không thay đổi phán đoán này, không được vì ghi thêm dòng quá trình mà bỏ sót hạng mục chưa xong hoặc mở lại hạng mục đã kết thúc. Không có dòng "đã nhận được kết quả" thì coi như chưa nhận.

## 5. Quá giờ không ai nhận, đến giờ không giao, đã giao mà chưa xác minh

người điều hành trực tuyến thì theo mục 3 mà đuổi theo, không chờ người phụ trách đến hỏi; người điều hành không trực tuyến thì kiểm theo người thay thế hoặc thời điểm kiểm được lần sau ghi trong đăng ký, kiểm vẫn là mọi hạng mục chưa xong, không chỉ những cái không ai nhận. Đuổi không được, làm không được thì ghi thêm "nâng cấp xử lý", ghi thật là đã trì hoãn bao lâu.

## 6. Điểm danh khởi công, thu công

Xem lại toàn bộ những việc mình đã giao đi mà theo giai đoạn hợp lệ gần nhất ở mục 3 vẫn chưa xong, không lọc bỏ công việc theo dòng quá trình cuối cùng. Xem từng việc: việc nào đã hối khởi công mà chưa nhận, việc nào đã nhận việc mà đến giờ chưa giao, việc nào kết quả đã đến mà chưa xác minh, việc nào xác minh đạt nhưng chờ người có quyền quyết định, việc nào trả lại đang chờ giao lại, việc nào cần báo thời gian mới, việc nào dự kiến mới chưa được người có quyền xác nhận. Điểm xong viết một câu "điểm danh xong, còn N việc, sớm nhất mấy giờ đến".

## 7. Không tự lập tác vụ định kỳ

Đến giờ thì dựa vào đăng ký cộng với việc thức dậy là kiểm trước, không vì "sắp xong rồi" mà lập tác vụ định kỳ, báo thức hay script vòng lặp chạy nền. Chỉ lập khi người phụ trách đích thân yêu cầu, lập rồi thì ghi rõ là đến hạn tự xóa.

## 8. Thông qua xong thì lập tức hối khởi công

Ủy quyền hoặc thông qua vừa ra, **người giao việc ngay tại chỗ yêu cầu chặng tiếp theo khởi công**: thống nhất người thực thi, sản phẩm bàn giao, giờ giao; sau khi chặng tiếp theo trả lời "đã nhận việc" hoặc để lại bằng chứng khởi công, ghi thêm bản ghi "đã nhận việc" của đơn đó. Chưa trả lời thì vẫn ở trong danh sách chờ nhận, không vì đã hối khởi công mà đóng mục. Lúc này chỉ là đã tiếp nhận, kết quả về và xác minh xong thì trước đó vẫn tính là chưa xong. Không được vì đang song song thu xếp việc khác mà bỏ sót việc hối khởi công.

Chỉ "đã nhận được tin nhắn" không tính là đã tiếp nhận.

Mặt trái (đã khái quát hóa): ủy quyền／thông qua đã ra, người điều hành đi kết thúc đơn khác, bỏ sót việc yêu cầu người thực thi khởi công; khi người phụ trách hỏi lại vẫn không có động tác nào, không có biên nhận.

## Ca ngược (đã khái quát hóa)

Phiên trò chuyện bên ngoài hoặc việc chạy nền đã chạy xong từ lâu, chương trình chờ âm thầm thoát ra, không ai đăng ký, không ai đến giờ kiểm, kết quả bị để đó mấy tiếng mới có người tiếp nhận.

---

## Ghi chú tham khảo

Mạch tư duy được viết lại từ các thảo luận công khai về giao tiếp quy trình khép kín, watchdog／dead man's switch, xác nhận và nâng cấp xử lý, cùng đoạn "Waiting on dispatched subagents" trong obra/superpowers (MIT); không sao chép nguyên văn. Đối chiếu cụ thể với ngành và việc giữ lại giấy phép xem `NOTICE` ở gốc kho.
