console.log("Hello SolarHand! JS đang chạy 🚀");

// Ngày 4 //
// Bài 1: Biến và Quy tắc let/count //
let hoTen = "Nguyen Huy Hoang";                 // let có thể thay đổi giá trị
const tuoi = 20;                            // const không thể thay đổi giá trị;
let diemTB = 8.5;

hoTen = "Lap trinh vien" // thay đổi gia trị của biến hoTen
console.log(hoTen, "- có số tuổi là", tuoi, "- có điểm trung bình là", diemTB);

// Bài 2: Kiểu dữ liệu & typeof //
let chuoi = "Trái Đất";        // string
let so = 12742;                // number
let dungSai = true;            // boolean
let chuaBiet;                  // undefined (khai báo nhưng chưa gán)

console.log(typeof chuoi);     // "string"
console.log(typeof so);        // "number"
console.log(typeof dungSai);   // "boolean"
console.log(typeof chuaBiet);  // "undefined"

// BÀI 3: Toán tử số học (đặc biệt là %) //
let a = 10, b = 3;

console.log(a + b);    // 13   (cộng)
console.log(a * b);    // 30   (nhân)
console.log(a % b);    // 1    (chia lấy DƯ: 10 : 3 = 3 dư 1)
console.log(a ** 2);   // 100  (lũy thừa)

// ⭐ Vì sao % quan trọng với SolarHand?
console.log(4 % 2);    // 0 → 4 là số CHẴN
console.log(7 % 2);    // 1 → 7 là số LẺ

// Bài 4: So sánh: === vs == (bẫy kinh điển!) //
console.log(5 === "5");   // false — khác KIỂU dữ liệu (number vs string)
console.log(5 == "5");    // true  — JS tự "làm trò" chuyển kiểu ⚠️ NGUY HIỂM

// Quy tắc: CHỈ DÙNG === và !==, tuyệt đối quên == và != đi
console.log(10 > 5);        // true
console.log(10 !== 9);      // true

// Bài 5: Toán tử logic "&&"; "||"; "!" //
let diem = 8;
let diemDanh = true;

console.log(diem >= 5 && diemDanh);   // true — CẢ HAI phải đúng
console.log(diem < 5 || diemDanh);    // true — MỘT trong hai đúng là đủ
console.log(!diemDanh);               // false — đảo ngược

// Bài 6: Template literal (backtick ` chứ không phải nháy đơn!') //
let tenHT = "Sao Hỏa";
let kichThuoc = 6779;

console.log(`Hành tinh ${tenHT} có đường kính ${kichThuoc} km`);
console.log("Cách cũ xấu xí: " + tenHT + " - " + kichThuoc + " km");
// Nhớ: nhấn phím ` ở góc trái bàn phím (dưới Esc)

// Bài 7: If/ else if/ else //
let diemThi = 8.2;

if (diemThi >= 9) {
  console.log("Xuất sắc 🌟");
} else if (diemThi >= 7) {
  console.log("Giỏi 👍");          // 8.2 rơi vào đây
} else if (diemThi >= 5) {
  console.log("Khá");
} else {
  console.log("Cần cố gắng hơn");
}

// Ngày 5 //
// Bài 8: Hàm cơ bản (khai báo + tham số + return) //
// 1. Hàm không có tham số
function sayHello () {
    console.log("Xin chào các bạn! ");
}
sayHello();  // Gọi hàm

//2. Hàm có tham số + return
function congHaiso (a,b) {
    return a + b;   // đưa kết quả ra ngoài
}
let ketqua = congHaiso(5, 7);   // Gọi hàm và nhận kết quả
console.log(ketqua);  // 12

//3. Phân biệt console.log vs return (lỗi số 1 của người mới!)
function hamLog(x) {
    console.log(x);   // chỉ in ra màn hình, KHÔNG đưa ra ngoài
}
function hamReturn(y) {
    return y;        // đưa ra ngoài, KHÔNG in ra màn hình
}
hamLog(10) + 100;        // lỗi, vì hamLog không đưa ra ngoài
console.log(hamReturn(10) + 100);   // đúng, vì hamReturn đưa ra ngoài
hamReturn(10) + 100;     // đúng, vì hamReturn đưa ra ngoài

//Bài 9: Hàm mũi tên - Arrow function (cú pháp ngắn — sẽ gặp suốt trong Three.js!)//
const binhphuong = (n) => n * n;
console.log(binhphuong(5));   // 25

// Giống hệt với hàm function thường, viết gọn hơn:
function binhPhuong(n) {
    return n * n;
}
console.log(binhPhuong(2));   // 4

// Bài 10: Mảng //
let mauSac = ["đỏ", "xanh", "vàng"];   // tạo mảng

console.log(mauSac[0]);      // "đỏ"  ⭐ index bắt đầu từ 0!
console.log(mauSac[2]);      // "vàng"
console.log(mauSac.length);  // 3 — đếm số phần tử

mauSac.push("tím");          // thêm vào CUỐI
console.log(mauSac);         // ["đỏ", "xanh", "vàng", "tím"]
console.log(mauSac.length);  // 4

console.log(mauSac[3]);      // "tím" — truy cập phần tử tại index 3
console.log(mauSac[4]);      // undefined — chỉ có index 0→3, truy cập quá = undefined

// Bài 11: Object (kho lưu trữ dữ liệu của SolarHand!) //
let hanhTinh = {
  name: "Trái Đất",      // thuộc tính: giá trị
  size: 12742,
  coSong: true
};
console.log(hanhTinh.name);     // "Trái Đất" — cách 1: dấu chấm
console.log(hanhTinh["size"]);  // 12742 — cách 2: ngoặc vuông
console.log(hanhTinh.coSong);   // true
hanhTinh.matTroi = "Tập trung quanh";  // thêm thuộc tính mới
console.log(hanhTinh);

// Bài 12: Vòng lặp //
// 1. for cổ điển: biết chính xác số vòng
for (let i = 1; i <= 5; i++) {
  console.log(`Quỹ đạo vòng ${i}`);
}
// Đọc: bắt đầu i=1 → chạy khi i<=5 → mỗi vòng i tăng 1

// 2. for...of: duyệt từng phần tử mảng (dùng NHIỀU nhất về sau)
for (let mau of mauSac) {
  console.log(`Màu: ${mau}`);
}

// 3. for...in: duyệt từng thuộc tính object
for (let khoa in hanhTinh) {
  console.log(`${khoa}: ${hanhTinh[khoa]}`);
}

// 4. while: chạy khi điều kiện đúng
let j = 1;
while (j <= 5) {
    console.log(`Vòng lặp while thứ ${j}`);
    j++;   // tăng j lên 1, nếu quên sẽ thành vòng lặp vô hạn
}

// 5. do...while: chạy ít nhất 1 lần, sau đó kiểm tra điều kiện
let k = 1;
do {
    console.log(`Vòng lặp do...while thứ ${k}`);
    k++;
} while (k <= 5);

// 6. break: thoát vòng lặp khi gặp điều kiện
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        break;   // thoát vòng lặp khi i > 5
    }
    console.log(`Vòng lặp thứ ${i}`);
}

// 7. continue: bỏ qua vòng lặp hiện tại khi gặp điều kiện
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;   // bỏ qua vòng lặp khi i là số chẵn
    }
    console.log(`Số lẻ: ${i}`);
}

// MILESTONE 1: Hàm đếm số chẵn (cột mốc chính thức!)
function demSoChan(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}
// Test — kết quả ĐÚNG phải như comment:
console.log(demSoChan([1, 2, 3, 4, 5, 6]));   // 3  (số 2,4,6)
console.log(demSoChan([7, 9, 11]));            // 0  (toàn lẻ)
console.log(demSoChan([]));                    // 0  (mảng rỗng)


// MILESTONE 2 — Mảng 10 object hành tinh (tài sản của Tuần 3!)
const heMatTroi = [
  { name: "Mặt Trời",          size: 1392700 },
  { name: "Sao Thủy",          size: 4879 },
  { name: "Sao Kim",           size: 12104 },
  { name: "Trái Đất",          size: 12742 },
  { name: "Sao Hỏa",           size: 6779 },
  { name: "Sao Mộc",           size: 139820 },
  { name: "Sao Thổ",           size: 116460 },
  { name: "Sao Thiên Vương",   size: 50724 },
  { name: "Sao Hải Vương",     size: 49244 },
  { name: "Mặt Trăng",         size: 3474 }
];

// 1. In thông tin từng hành tinh (kết hợp MỌI thứ đã học!)
for (let ht of heMatTroi) {
  console.log(`${ht.name}: đường kính ${ht.size.toLocaleString("vi-VN")} km`);
}

// 2. Đếm số "hành tinh" có size > 10000 km (tự viết hàm!)
// Gợi ý: y hệt demSoChan, đổi điều kiện thành ht.size > 10000

// 3. Tìm vật thể to nhất (thử thách khó nhất 2 ngày!)
let toNhat = heMatTroi[0];            // giả sử đứa đầu tiên to nhất
for (let ht of heMatTroi) {
  if (ht.size > toNhat.size) {        // gặp đứa to hơn?
    toNhat = ht;                      // chuyển "vương miện" cho nó
  }
}
console.log(`🏆 To nhất: ${toNhat.name}`);   // Mặt Trời

// 4. In danh sách có số thứ tự (thử thách thêm)
heMatTroi.forEach((ht, i) => {
  console.log(`${i + 1}. ${ht.name}`);
}); 