# Dòng đăng ký giao – nhận việc (dùng để sao chép)

Cách dùng: mỗi khi giao ra một việc cần thu hồi, sao chép một dòng vào sổ giao – nhận／nối tiếp của ngày hôm đó. **Chỉ ghi thêm, không sửa, không xóa những dòng đã viết**: khi trạng thái thay đổi thì ghi thêm một dòng trạng thái mới ngay bên dưới, mở đầu bằng cùng một "mã định danh công việc", các trường của dòng cũ (nhất là giờ hẹn giao ban đầu, kết quả để ở đâu) giữ nguyên như cũ.

Nhìn theo mã định danh công việc để xem giai đoạn công việc còn hiệu lực gần nhất, không lọc theo tên ở dòng vật lý cuối cùng:

| Trạng thái | Ý nghĩa | Còn trong danh sách việc chưa xong không |
|---|---|---|
| `chờ nhận` | Việc đã giao ra (hoặc đã cho chạy), chưa có ai xác nhận nhận làm | Còn |
| `đã nhận việc` | Người thực thi xác nhận nhận việc này, **kết quả chưa đến** | Còn |
| `đã nhận được kết quả` | Sản phẩm bàn giao đã đến đúng vị trí đã hẹn, người nhận đã thấy; ghi rõ là chờ kiểm nhận, hoặc đã xác minh đạt và chờ người có quyền quyết định | Còn |
| `trả lại` | Phát hiện thiếu hạng mục, chờ người thực thi nộp bổ sung; việc gia hạn／nâng cấp xử lý sau đó không làm thay đổi giai đoạn này | Còn (chờ nộp lại) |
| `đã nghiệm thu` | Phiên bản hiện tại đã xác minh đạt, và người có quyền chấp nhận đã chấp nhận hoặc chấp nhận theo thẩm quyền sẵn có được xác định rõ là đang áp dụng; ghi lại người chấp nhận và căn cứ | **Không còn** |
| `đã hủy` | Người có quyền quyết định đã nói rõ là không làm nữa | **Không còn** |

`hối khởi công`, `gia hạn`, `nâng cấp xử lý` chỉ ghi nhận quá trình, không làm thay đổi giai đoạn công việc; dù có nhiều dòng liên tiếp cũng phải nhìn lại giai đoạn còn hiệu lực gần nhất. `hối khởi công｜chưa hồi âm` vẫn đang chờ nhận việc; chỉ khi có biên nhận nhận việc rõ ràng hoặc bằng chứng khởi công thì mới ghi thêm `đã nhận việc`. Bảng tổng hợp điểm danh không làm thay đổi trạng thái của từng hạng mục; những ghi chép không thể nhận diện thì trước tiên giữ nguyên giai đoạn cũ và làm rõ, không căn cứ vào đó để gạch tên. Chỉ những trường hợp đã nghiệm thu hoặc hủy có thẩm quyền đúng theo các điều kiện nêu trên mới kết thúc đơn này; các dòng quá trình về sau không mở lại đơn cũ. Đơn mới hoặc mở thêm một vòng mới thì nhất loạt dùng mã định danh công việc mới để đăng ký chờ nhận, không dùng lại mã định danh cũ; việc nộp bổ sung sau khi trả lại của cùng một đơn chưa kết thúc vẫn dùng mã định danh của đơn đó. Ghi bổ sung muộn cho đơn cũ chỉ thuộc về đơn cũ, không làm thay đổi giai đoạn của đơn mới.

Khi người xác minh đã có thẩm quyền chấp nhận được xác định rõ là đang áp dụng thì nghiệm thu thẳng theo thẩm quyền cũ, không hỏi lại; khi không có thì chỉ ghi là đã xác minh đạt và chờ quyết định. Người thực thi tự kiểm tra không thay thế cho việc kiểm duyệt độc lập mà công việc gốc yêu cầu, và nghiệm thu không tự động cho phép công bố, thanh toán hay các hành động khác.

Lưu ý:
- **Chờ kết thúc ≠ kết quả đã về**. Lệnh chạy nền đã dừng, hay đối phương nói "xong rồi", đều phải đến tận nơi lẽ ra kết quả phải ở đó để xem; thấy rồi mới ghi `đã nhận được kết quả`, chưa thấy thì vẫn là chưa xong.
- **Đến hạn thì kiểm tra mọi hạng mục chưa xong**: không chỉ kiểm tra những việc không có ai nhận; những việc đã nhận nhưng đến hạn chưa nộp, đã nhận được kết quả nhưng chưa kiểm nhận, bị trả lại đang chờ nộp lại, đều phải kiểm tra theo trạng thái tương ứng của chúng (mốc tương ứng xem mục 3 của `../SKILL.md`). Thời điểm kiểm tra có thể là giờ hẹn giao cộng khoảng 5 phút, đây chỉ là ví dụ, hãy điều chỉnh theo thời hạn của công việc.
- **Đến hạn thì ai kiểm tra phải ghi rõ người cụ thể**: người đó có thể không trực tuyến, thì ghi người được ủy quyền thay thế, hoặc thời điểm lần sau người đó có thể kiểm tra. Nếu thực tế kiểm tra muộn thì ghi đúng sự thật, không viết là "đã đỡ được".
- **Thời gian dự kiến mới ≠ đổi lịch chính thức**: viết dòng `gia hạn`, giữ lại cam kết gốc, nguyên nhân và ảnh hưởng; thời gian mới do người thực thi báo chỉ là dự kiến mới, sau khi người có quyền (thường là người điều hành, trong phạm vi thẩm quyền sẵn có) xác nhận thì mới ghi thêm một dòng nêu rõ ai xác nhận, lúc đó mới tính là đổi lịch chính thức. Trước khi xác nhận vẫn tính quá hạn theo cam kết gốc.
- Vị trí của skill đối chiếu evidence-before-done: `../../evidence-before-done/` **[M2]** (tương đối so với tệp này).

## Chờ nhận (viết ngay khi cho chạy)

```
chờ nhận｜mã định danh công việc：________｜việc gì：________｜ai đang làm：________｜ai nhận：________｜giờ hẹn giao：____-__-__ __:__｜đến hạn ai kiểm tra：________｜nếu không trực tuyến：người được ủy quyền thay thế________／thời điểm có thể kiểm tra lần sau__:__｜kết quả để ở đâu：________｜làm đến đâu thì coi là xong：________｜skill gợi ý cho chặng sau：（có thể để trống）
```

## Đã nhận việc (người thực thi xác nhận nhận làm; kết quả chưa đến)

```
đã nhận việc｜mã định danh công việc：________｜mấy giờ：__:__｜ai nhận：________｜giờ hẹn giao：（không đổi thì ghi "như dòng gốc"）
```

## Đã nhận được kết quả (sản phẩm bàn giao đã đến vị trí đã hẹn; chờ kiểm nhận hoặc đã xác minh đạt chờ quyết định)

```
đã nhận được kết quả｜mã định danh công việc：________｜mấy giờ：__:__｜kết quả ở đâu：________｜có đúng vị trí đã hẹn không：có／không｜xác minh：chờ kiểm nhận／đạt (căn cứ：________)｜quyết định chấp nhận：xử lý sau khi kiểm nhận／chờ người có quyền quyết định
```

## Đã nghiệm thu (xác minh đạt và có thẩm quyền chấp nhận; ra khỏi danh sách việc chưa xong)

```
đã nghiệm thu｜mã định danh công việc：________｜mấy giờ：__:__｜ai xác minh：________｜xác minh thế nào (một câu)：________｜ai chấp nhận：________｜quyết định chấp nhận／căn cứ thẩm quyền sẵn có：________｜giao cho ai／đóng lại：________
```

## Trả lại (đã kiểm nhận nhưng không đạt; vẫn trong danh sách việc chưa xong)

```
trả lại｜mã định danh công việc：________｜mấy giờ：__:__｜thiếu gì／sai ở đâu：________｜đã thông báo cho người thực thi：có／không｜dự kiến mới (ước tính của người thực thi)：__:__｜đổi lịch chính thức：chưa xác nhận／đã do ____ xác nhận
```

## Đã hủy (người có quyền quyết định không làm; ra khỏi danh sách việc chưa xong)

```
đã hủy｜mã định danh công việc：________｜mấy giờ：__:__｜ai quyết định：________｜lý do một câu：________
```

## Đến hạn chưa xong (gia hạn; không ghi đè cam kết gốc)

```
gia hạn｜mã định danh công việc：________｜cam kết gốc：__:__ (giữ nguyên)｜dự kiến mới (ước tính／đề xuất của người thực thi)：__:__｜đổi lịch chính thức：chưa xác nhận／đã do ____ xác nhận｜lý do một câu：________｜ảnh hưởng：________｜vẫn do ai nhận：________
```

Sau khi người có quyền xác nhận, ghi thêm một dòng `gia hạn` cùng định dạng, viết ô "đổi lịch chính thức" thành "đã do ____ xác nhận"; ô cam kết gốc vẫn giữ nguyên như cũ.

## Quá điểm nâng cấp xử lý (không ai nhận, đến hạn chưa nộp, đã nộp chưa kiểm nhận, khi đuổi không kịp)

```
nâng cấp xử lý｜mã định danh công việc：________｜tóm tắt dòng gốc：________｜trạng thái hiện tại：________｜thực tế kiểm tra lúc：__:__｜thời gian quá điểm：__｜ai đang đuổi：________｜bước tiếp theo：________
```

## Gọi khởi công sau khi thông qua (viết ngay tại chỗ khi có ủy quyền／thông qua)

```
hối khởi công｜mã định danh công việc：________｜tóm tắt cho phép／ủy quyền：(không ghi khóa bí mật)｜người thực thi：________｜sản phẩm bàn giao：________｜giờ giao：________｜biên nhận của đối phương：đã nhận việc (mấy giờ)／bằng chứng khởi công ở________／chưa hồi âm
```

## Điểm danh khởi công／thu công (quét những việc mình đã giao ra, chưa `đã nghiệm thu` hoặc `đã hủy`)

Quét theo giai đoạn còn hiệu lực gần nhất ở trên: chờ nhận (gồm cả gọi khởi công chưa hồi âm), đã nhận việc, đã nhận được kết quả (chờ kiểm nhận hoặc đã xác minh đạt chờ quyết định), trả lại. Gia hạn, nâng cấp xử lý, gọi khởi công không thay thế cho giai đoạn; chỉ ra khỏi danh sách sau khi nghiệm thu có hiệu lực hoặc hủy có thẩm quyền.

```
điểm danh xong｜còn N việc｜đến hạn sớm nhất：__:__｜quá điểm chưa nhận việc：N｜đã nhận việc đến hạn chưa nộp：N｜kết quả đã đến chưa kiểm nhận：N｜xác minh đạt chờ quyết định：N｜trả lại chờ nộp lại：N｜dự kiến mới chưa xác nhận：N｜cần báo thời gian mới：N
```
