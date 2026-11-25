---
name: evidence-before-done
description: >-
  [M2] Nền tảng cộng tác đa trợ lý. Dùng trước khi bất kỳ trợ lý nào chuẩn bị nói "xong rồi", "sửa xong rồi", "không có vấn đề gì", "đều khớp cả",
  hoặc trước khi bàn giao, nói trong tiến độ rằng một phần đã hoàn thành hay thuật lại "đã hoàn thành" của trợ lý khác hoặc tác vụ con:
  trước tiên phải có bằng chứng hợp lệ khớp với phiên bản, phạm vi, môi trường hiện tại (mở ra xem, phát lại, tính lại, chạy lại đúng các bước cũ, đối chiếu với yêu cầu gốc).
  Kết quả xác minh hợp lệ trên cùng phiên bản thì được tái sử dụng; có thay đổi hoặc thất bại thì chỉ bổ sung xác minh cho phần bị ảnh hưởng; báo cáo của người thực thi không tính là xác minh độc lập.
  Báo tiến độ thông thường không kích hoạt việc xác minh lại toàn bộ. Bằng chứng đủ chắc mới kết luận, không đủ thì báo đúng hiện trạng.
  Không dùng cho: danh sách kiểm tra độc lập bên thứ ba; trình bày phương án trước khi làm.
  Phân công với ../dispatch-accept-verify/ **[M1]**: nhánh đó lo thu hồi kết quả, nhánh này lo xác minh rồi mới tuyên bố xong.
license: MIT
metadata:
  version: "0.1.0"
  platform: "DeepSeek Harness"
---
# [M2] Trước khi bàn giao phải có bằng chứng

Thuộc gói mã nguồn mở Solo to Team · Một người thành cả đội (solo-to-team-skills).

## Gồm những gì

Một điều luật sắt, năm bước trước khi mở lời, bảng đối chiếu "muốn nói gì thì cần bằng chứng gì", những dấu hiệu nên dừng lại, các lý do bao biện thường gặp, cách nói với bên giao việc, và việc tự kiểm tra không được biến thành hành động nguy hiểm.

## Dành cho ai

- Trợ lý hoặc người thực thi thường xuyên báo cáo với người phụ trách / bên giao việc rằng "đã làm xong"
- người điều hành trong cộng tác đa trợ lý, dễ "thuật lại việc người khác đã hoàn thành" mà bản thân chưa từng xem thành phẩm
- Các bàn giao hằng ngày như tài liệu, video, hình ảnh, số liệu, đường link, sửa máy tính, đặt file (không giới hạn ở lập trình)

## Cách dùng

1. Trước khi mở lời nói bất cứ điều gì mang nghĩa hoàn thành, hãy đi qua năm bước ở mục 2; nếu trong tay đã có bằng chứng hợp lệ khớp với phiên bản hiện tại thì tái sử dụng, xem mục 1.
2. Đối chiếu bảng ở mục 3 để chọn bằng chứng; không đủ thì báo hiện trạng, không đổi cách nói để ngầm ám chỉ đã làm xong.
3. Với việc thu hồi từ `../dispatch-accept-verify/` **[M1]** trong cùng kho: trước tiên ghi "đã nhận được kết quả", rồi xác minh theo kỹ năng này. Xác minh đạt không đồng nghĩa có quyền chấp nhận; khi có quyết định chấp nhận hoặc có sự ủy quyền sẵn có được áp dụng rõ ràng, ghi người chấp nhận và căn cứ rồi ghi "đã nghiệm thu", bàn giao tiếp hoặc đóng theo thỏa thuận. Nếu không thì ghi "đã nhận được kết quả｜xác minh đạt, chờ người có quyền quyết định", vẫn coi là chưa xong; đã có ủy quyền thì không hỏi lại.

## Phụ thuộc

- Chỉ cần môi trường cục bộ hoặc môi trường đã thống nhất có thể mở / phát lại / tính lại sản phẩm bàn giao
- Không gắn chết vào một nền tảng trợ lý nào; dùng kèm với `../dispatch-accept-verify/` **[M1]** thì hiệu quả nhất

## Ví dụ

Xem từng dòng "bằng chứng cần có / chưa đủ" trong bảng đối chiếu ở mục 3; khi dùng kèm với `../dispatch-accept-verify/templates/mau-dong-dang-ky.md` **[M1]**, dòng đã nghiệm thu ghi rõ đã xác minh thế nào, ai chấp nhận và căn cứ quyết định / ủy quyền; trường hợp chỉ xác minh đạt mà còn chờ quyết định thì vẫn ghi đã nhận được kết quả, không đạt thì ghi dòng trả lại. Phần theo làm đầy đủ (gồm tái sử dụng kết quả xác minh lần trước, chỉ bổ sung xác minh phần đã thay đổi) xem `examples/walkthrough-meeting-notes/` ở gốc gói.

## Đã xác minh đến đâu

Việc bàn giao trong đội đã được thực hiện theo nguyên tắc "có bằng chứng trước rồi mới nói đã xong"; gói công khai bảo đảm rằng **các bước tự kiểm tra có thể làm theo được**. Việc có giảm được tỷ lệ phải làm lại hay không, xem cột "vẫn chưa chứng minh" trong `../ops-case-notes/` **[M4]** cùng kho, phần chính văn của kỹ năng này không kết luận về hiệu quả.

---

Một câu: **Có bằng chứng trước, rồi mới nói đã xong.**

## 0. Phân công với các kỹ năng lân cận

- Nếu trong đội hoặc dự án đã có điều khoản nguyên tắc "trước khi bàn giao phải có bằng chứng": kỹ năng này chỉ nói **cách lấy bằng chứng, cách nói**; khi xung đột thì lấy điều khoản nguyên tắc của các bạn làm chuẩn.
- Kiểm duyệt độc lập / kiểm tra xác suất là việc **người khác kiểm lại sau**; kỹ năng này là việc người làm **tự kiểm một lượt trước khi bàn giao**. Tự kiểm rồi ≠ được miễn kiểm duyệt.
- Phân biệt hai thứ: **báo cáo của người thực thi** (người làm nói "xong rồi", kèm cách tự kiểm của họ) và **xác minh độc lập** (người nhận hoặc người xác minh được chỉ định đã tận tay xem). Cái trước là manh mối, không được dùng thay cái sau.
- **Kết luận xác minh tách rời với quyền chấp nhận**: bằng chứng đỡ được đến đâu thì báo cáo đến đó; xác minh đạt tự nó không trao quyền nghiệm thu. Bản thân người phụ trách có thể giữ quyết định chấp nhận, cũng có thể giao trước việc nghiệm thu trong phạm vi rõ ràng cho trợ lý được chỉ định; khi thỏa mãn ủy quyền hợp lệ và yêu cầu của công việc thì chấp nhận ngay, không phê duyệt lại. Nếu yêu cầu gốc đòi kiểm duyệt độc lập hoặc chính người phụ trách xác nhận thì vẫn phải thỏa mãn các điều kiện đó, không được thay bằng tự kiểm hay bằng ủy quyền của công việc khác.
- Trình bày phương án trước khi bắt tay làm, ghi lại ý kiến sửa đổi: thuộc loại kỹ năng xác nhận phương án; những ghi chép sửa đổi đó chính là thứ mà "đã làm đủ mọi yêu cầu của bên giao việc" ở mục 3 phải đối chiếu từng điều.
- Việc đã giao đi có ai thu hồi hay không: xem `../dispatch-accept-verify/` **[M1]** cùng kho.

## 1. Một điều luật sắt

Không có bằng chứng hợp lệ khớp với phiên bản hiện tại thì không nói "đã làm xong".

**Bằng chứng hợp lệ**: do bạn (hoặc người xác minh được chỉ định) tận tay có được, và phiên bản, phạm vi, môi trường mà nó xác minh phải khớp với câu bạn sắp nói lúc này.

- **Được tái sử dụng**: phần đã xác minh ở lần trước, sau đó không thay đổi, không phát sinh thất bại, môi trường không đổi. Khi tái sử dụng phải ghi rõ là xác minh lần nào, phiên bản nào.
- **Phải xác minh bổ sung**: phần sau đó có thay đổi, từng có thất bại, hoặc đã đổi môi trường (đổi máy, đổi tài khoản, đổi phiên bản phần mềm). Chỉ bổ sung xác minh cho phần bị ảnh hưởng, không nhất thiết mỗi lần lại làm lại toàn bộ từ đầu; nếu không chắc ảnh hưởng đến đâu thì mở rộng phạm vi ra một chút.
- **Không tính là bằng chứng**: việc người khác bảo là xong (báo cáo của người thực thi không được dùng làm xác minh độc lập), việc xác minh phiên bản cũ hoặc phạm vi khác, và kiểu "chắc là không có vấn đề gì".

Câu "đã làm xong" nói ra khi bỏ qua khâu tự kiểm chỉ là phỏng đoán, đoán sai thì bên giao việc phải chờ vô ích, phải làm lại, và lời nói trong cộng tác cũng không còn đáng tin. Điều luật này là thói quen, không phải hình phạt: đã kiểm rồi thì cứ nói thẳng, chưa kiểm thì thành thật nói chưa.

Lách điều luật này theo nghĩa chữ (đổi cách nói để ngầm ám chỉ đã làm xong) cũng giống hệt như vi phạm nó.

## 2. Năm bước trước khi mở lời

1. **Nghĩ cho rõ**: việc gì có thể chứng minh cho câu tôi sắp nói?
2. **Lấy bằng chứng**: trước tiên xem trong tay đã có bằng chứng hợp lệ khớp với phiên bản, phạm vi, môi trường hiện tại chưa. Có thì tái sử dụng và ghi rõ xuất xứ; sau đó nếu có thay đổi hoặc từng có thất bại thì chỉ bổ sung xác minh phần bị ảnh hưởng; không có thì tận tay làm trọn một lượt. Báo cáo của người khác chỉ coi là manh mối.
3. **Xem hết kết quả**: xem trọn cả bản, không chỉ xem mấy dòng đầu; có mấy chỗ sai thì đếm cho rõ mấy chỗ.
4. **Đối chiếu**: kết quả này thật sự đỡ được cho câu tôi muốn nói không?
   - Không đỡ được: nói thật hiện đang đến bước nào, kèm bằng chứng.
   - Đỡ được: nói kết luận, kèm bằng chứng.
5. **Rồi mới mở lời**.

**Tiến độ thông thường không kích hoạt việc xác minh lại toàn bộ.** Chỉ nói "đang đến đâu, bước tiếp theo làm gì" thì cứ nói thật, không cần vì thế mà chạy lại kiểm tra; một khi đã nói "phần này làm xong rồi / xong rồi" thì phần đó phải đi qua năm bước trên.

## 3. Muốn nói gì thì phải lấy bằng chứng gì

| Muốn nói | Bằng chứng cần có | Chưa đủ |
|---|---|---|
| Tài liệu đã làm xong | Mở bằng phần mềm tương ứng, hoặc chuyển thành ảnh và xem từng trang: chữ, bảng, số trang, phông chữ tiếng Trung đều bình thường | Thông báo "tạo thành công"; file có tồn tại |
| Video đã làm xong | Phát từ đầu đến cuối, ít nhất xem mẫu đoạn đầu, đoạn giữa, đoạn cuối; đã so độ phân giải, bitrate với file nguồn | Tiến độ xuất đã đến 100% |
| Hình ảnh đã làm xong | Mở xem đúng kích thước gốc, đã qua khâu tự kiểm thị giác của các bạn | Chỉ xem ảnh thu nhỏ |
| Số liệu tính đúng | Đổi cách khác tính lại một lượt, tổng và các mục thành phần khớp nhau | Đã tính một lần |
| Đường link dùng được | Đã bấm mở, nội dung đúng là bài cần tìm; khi tái sử dụng ghi chép bấm mở trước đó thì ghi rõ là lần nào, ứng với phiên bản nào, nếu mục tiêu hoặc thời hạn đã đổi thì phải bấm mở lại | Đã thấy trong kết quả tìm kiếm |
| Sự cố máy tính đã sửa xong | Đi lại đúng các bước vốn gây ra sự cố, sự cố không còn xuất hiện; với thứ bị cập nhật tự động, tác vụ định kỳ, đồng bộ ghi đè thì ghi rõ thời điểm ghi đè lần sau, đến giờ thì kiểm lại, trước khi kiểm chỉ nói "đã kiểm thông tại chỗ, chờ kiểm lại lúc X giờ" | Đã đổi cài đặt; "về lý thuyết là đã ổn"; kiểm thông tại chỗ mà đã nói "về sau đều ổn" |
| Công cụ nhỏ dùng được | Đã thực chạy cả cách dùng bình thường lẫn cách dùng gây lỗi | Kiểm tra mã nguồn đã đạt |
| Đồ vật đã đặt vào một chỗ nào đó | Đã đến chỗ đó nhìn thấy, tên file, kích thước, số bản đều đúng | Lúc sao chép không báo lỗi |
| Việc đã thông qua đã gửi / đồng bộ thành công | Nhìn thấy ở đầu nhận hoặc đầu đích | Công cụ trả về "thành công" |
| Trợ lý khác hoặc tác vụ con nói đã làm xong | Tự mình đi xem thay đổi và thành phẩm | Báo cáo của đối phương |
| Yêu cầu của bên giao việc đã làm đủ cả | Đọc lại yêu cầu gốc và ghi chép sửa đổi, đánh dấu từng điều | "Phần chính đã làm xong" |

## 4. Những dấu hiệu nên dừng lại

- Muốn dùng "chắc là", "đại khái", "có vẻ", "xấp xỉ".
- Chưa kiểm đã muốn nói "xong rồi", "hoàn hảo", "không có vấn đề gì".
- Muốn thuật lại thẳng "đã hoàn thành" của người khác.
- Chỉ kiểm một phần mà muốn suy ra toàn bộ.
- Trong đầu nảy ra "chỉ lần này thôi", "muộn quá rồi, giao trước rồi tính".

## 5. Các lý do bao biện thường gặp

| Lý do bao biện | Thực tế là |
|---|---|
| Chắc là ổn rồi | Đi kiểm một lượt đi |
| Tôi chắc chắn mà | Chắc chắn không đồng nghĩa có bằng chứng |
| Chỉ lần này thôi | Không có ngoại lệ |
| Công cụ kiểm tra không báo lỗi | Không báo lỗi không đồng nghĩa kết quả đúng |
| Nó bảo thành công rồi | Tự mình đi xem |
| Chỉ tra một phần là đủ | Một phần chỉ chứng minh được cho chính phần đó |

## 6. Nói với bên giao việc / người phụ trách thế nào

- Thứ tự gợi ý: kết quả và ở đâu → vì sao → về sau xử lý thế nào. Không cần bày ra cả bản bằng chứng, **một câu nói rõ đã kiểm thế nào** là được. Ví dụ: "Đã làm xong, ở trong thư mục đã thống nhất, tên file là 'Tập 3_bản chốt'. Tôi đã phát lại từ đầu một lượt, chất lượng hình giống như bản gốc."
- Chưa làm xong thì nói thật, không nói "cơ bản đã hoàn thành". Ví dụ: "8 cái đã xong 6 cái, còn 2 phụ đề chưa khớp, trước 21:30 sẽ bù xong."
- Việc phía mình không kiểm được (ví dụ chỉ nhìn thấy được trên điện thoại của đối phương), nói rõ "phía tôi đã kiểm những gì, bước nào cần ngài nhìn giúp", không coi là đã hoàn thành.
- Khi đưa cho kiểm duyệt độc lập hoặc ghi vào hồ sơ, ghi bằng chứng cho cụ thể: đã mở file nào, đã kiểm những số liệu nào, đã đối chiếu những yêu cầu nào.
- Không tự trách, không xin lỗi quá mức. Kiểm ra vấn đề là việc tốt, nói rõ rồi sửa là được.

## 7. Việc tự kiểm tra không được biến thành hành động nguy hiểm

- Việc tự kiểm tra dùng cách chỉ đọc, cục bộ, có thể đảo ngược. Không vì "thử xem có gửi ra được không" mà thật sự gửi một cái, không đặt hàng để thử, không xóa đồ để kiểm tra.
- Nếu tự kiểm buộc phải đụng vào máy tính, tài khoản của người phụ trách, hoặc sẽ khiến người ngoài nhìn thấy, thì trước tiên hãy theo quy trình phê duyệt hành động nguy hiểm của đội các bạn.
- Thật sự không kiểm được: nói thẳng "điểm này tôi không kiểm được, lý do là……", đánh dấu "chờ xác minh", không cố nói đã làm xong.

## 8. Dùng khi nào

Nhất loạt dùng trong những lúc sau:

- Mọi câu thể hiện "đã hoàn thành", "đã đúng rồi", "đã thành công", kể cả khi đổi cách nói và ngầm ám chỉ trong lời.
- Trước khi bàn giao, trước khi nói trong tiến độ rằng một phần nào đó đã làm xong, trước khi chuyển sang bước tiếp theo (chỉ báo đang đến đâu thì không tính).
- Sau khi giao việc đi, khi nhận được hồi báo "đã làm xong" (thu hồi trước, rồi xác minh).

---

## Nguồn và giấy phép

- Kho nguồn: kỹ năng verification-before-completion trong obra/superpowers (https://github.com/obra/superpowers/tree/main/skills/verification-before-completion ), đọc ngày 2026-10-20, ứng với commit bb92a77.
- Giấy phép: MIT (LICENSE ở gốc kho: https://github.com/obra/superpowers/blob/main/LICENSE ).
- Tính chất của kỹ năng này: **viết lại**. Giữ lại mạch tư duy cốt lõi của kỹ năng gốc (điều luật sắt, năm bước trước khi mở lời, bảng đối chiếu "muốn nói gì thì cần bằng chứng gì", những dấu hiệu nên dừng lại, các lý do bao biện thường gặp), dịch sang tiếng Trung và viết lại theo lối bàn giao hằng ngày của cộng tác đa trợ lý: giọng điệu dịu hơn; thay các ví dụ lập trình bằng tài liệu, video, hình ảnh, số liệu, đường link, sửa máy tính, đặt file; thêm mục 0 phân công, mục 6 cách nói với bên giao việc, mục 7 tự kiểm tra không được biến thành hành động nguy hiểm; cách gọi đối ngoại đổi thành người phụ trách / bên giao việc / người thực thi / trợ lý cộng tác.
- Tuyên bố bản quyền và giấy phép gốc (giữ lại theo yêu cầu của MIT):

> Copyright (c) 2025 Jesse Vincent
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
