// Bài 13: Tìm phần tử & đọc/sửa nội dung
// 1. Tìm phần tử theo id
let tenTieuDe = document.getElementById("tieu-de");
console.log(tenTieuDe);         // in thẻ h1
console.log(tenTieuDe.textContent); // in ra nội dung của thẻ h1

// 2. Sửa chữ và màu
tenTieuDe.textContent = "Đây là tiêu đề mới";
tenTieuDe.style.color = "red"; // đổi màu chữ

// Bài 14: querySelector + classList
// querySelector hiểu selector NHƯ CSS: "." cho class, "#" cho id
let doanVan = document.querySelector(".mo-dau");

doanVan.classList.add("noi-bat");       // dán nhãn -> nền đổi màu ngay
doanVan.classList.toggle("noi-bat");    // toggle = có thì gỡ, không thì dán

console.log(doanVan.classList);         // xem các nhãn đang có

// Bài 15: addEventListener (nút bấm đếm số lần)
let btn = document.getElementById("btn-tang");
let soLan = 0;

btn.addEventListener("click", function () {
  soLan++;                              // mỗi lần click tăng 1
  btn.textContent = `Đã bấm: ${soLan} lần`;
});
// Đọc: "Khi sự kiện CLICK xảy ra trên btn, chạy function này"
//**Bấm thử nút trên trang — chữ trên nút tự đổi. Đây chính là cách nút sidebar SolarHand hoạt động ở Tuần 6! */

// Bài 16: addEventListener (thay đổi màu nền)
let giayDaQua = 0;

const boHen = setInterval(function () {
  giayDaQua++;
  console.log(`⏱ Đã trôi qua ${giayDaQua} giây`);
}, 1000);   // 1000 ms = 1 giây

// Dừng đồng hồ sau 10 giây:
setTimeout(function () {
  clearInterval(boHen);
  console.log("Đồng hồ đã dừng!");
}, 10000);

// Bài 17: requestAnimationFrame ⭐ (bài quan trọng nhất Tuần 1!)
let hop = document.getElementById("hop");
let x = 0;        // vị trí ngang (px)
let huong = 1;    // 1 = sang phải, -1 = sang trái

function chayKhung() {
  x += 3 * huong;                        // mỗi khung hình đi 3px

  if (x > 500) huong = -1;               // chạm mép phải -> quay đầu
  if (x < 0) huong = 1;                  // chạm mép trái -> quay lại

  hop.style.transform = `translateX(${x}px)`;

  requestAnimationFrame(chayKhung);      // ⭐ gọi CHÍNH NÓ = lặp vô hạn
}

requestAnimationFrame(chayKhung);         // lần đầu tiên "khởi động máy quay"
//📦 chạy qua lại mượt mà trên trang. Cấu trúc "hàm tự gọi chính nó qua rAF" = vòng lặp vẽ 3D — nhớ kỹ dòng này!