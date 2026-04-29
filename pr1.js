/*
  NEOVIM PRACTICE FILE

  Mục tiêu:
  - Tập di chuyển: h j k l
  - Tập insert/normal mode
  - Tập copy, paste, delete, undo
  - Tập search
  - Tập visual mode
  - Tập edit code JavaScript

  PHÍM CƠ BẢN:

  i        vào Insert mode trước cursor
  a        vào Insert mode sau cursor
  o        tạo dòng mới bên dưới và vào Insert mode
  O        tạo dòng mới bên trên và vào Insert mode
  Esc      về Normal mode

  h        qua trái
  j        xuống
  k        lên
  l        qua phải

  w        nhảy tới đầu word tiếp theo
  b        nhảy về đầu word trước
  e        nhảy tới cuối word

  $        về cuối dòng
  gg       về đầu file
  G        về cuối file
  10G      đi tới dòng 10

  x        xoá 1 ký tự
  dd       xoá/cut 1 dòng
  yy       copy 1 dòng
  p        paste sau cursor/dòng
  P        paste trước cursor/dòng
  u        undo
  Ctrl+r   redo

  yy       copy 1 dòng
  /text    tìm text trong file
  n        kết quả tìm kiếm tiếp theo
  N        kết quả tìm kiếm trước

  v        visual mode chọn từng ký tự
  V        visual line mode chọn cả dòng
  y        copy vùng đang chọn
  :wd        delete vùng đang chọn

   ciw     change inside word
  diw      delete inside word
  yiw      yank/copy inside word
  cw       change word
  C        change từ cursor tới cuối dòng

  :w       save
  :q       quit
  :wq      save rồi quit
  :q!      quit không save
*/

const users = [
  {
    id: 1,
    name: "Truong",
    role: "Frontend Developer",
    active: true,
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    name: "Anna",
    role: "Backend Developer",
    active: false,
    skills: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Minh",
    role: "Fullstack Developer",
    active: true,
    skills: ["React", "Node.js", "MySQL"],
  },
];

function getActiveUsers(userList) {
  return userList.filter((user) => user.active);
}

function findUserByName(userList, name) {
  return userList.find((user) => user.name === name);
}

function printUser(user) {
  if (!user) {
    console.log("User not found");
    return;
  }

  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Role: ${user.role}`);
  console.log(`Skills: ${user.skills.join(", ")}`);
}

const activeUsers = getActiveUsers(users);
const selectedUser = findUserByName(users, "Truong");

console.log("Active users:");
console.log(activeUsers);

console.log("Selected user:");
printUser(selectedUser);

/*
  BÀI TẬP 1: DI CHUYỂN
  - Dùng gg để về đầu file
  - Dùng G để xuống cuối file
  - Dùng /selectedUser để tìm biến selectedUser
  - Dùng n và N để nhảy giữa các kết quả
*/

/*
  BÀI TẬP 2: EDIT WORD
  - Đưa cursor vào chữ Truong
  - Bấm ciw
  - Gõ tên khác
  - Bấm Esc
*/

/*
  BÀI TẬP 3: COPY / PASTE
  - Đưa cursor vào một dòng console.log
  - Bấm yy để copy dòng
  - Bấm p để paste xuống dưới
  - Bấm u để undo
*/

/*
  BÀI TẬP 4: DELETE
  - Đưa cursor vào dòng bất kỳ
  - Bấm dd để xoá dòng
  - Bấm u để khôi phục
*/

/*
  BÀI TẬP 5: VISUAL MODE
  - Bấm V để chọn cả dòng
  - Bấm j để chọn thêm dòng dưới
  - Bấm y để copy
  - Bấm p để paste
* 
*/

/*
  BÀI TẬP 6: TẠO FUNCTION MỚI
  Dùng phím o để tạo dòng mới bên dưới, rồi viết function này:

  function countUsers(userList) {
    return userList.length;
  }

  Sau đó gọi:
  console.log(countUsers(users));
*/

/*
  BÀI TẬP 7: TÌM VÀ SỬA
  - Tìm chữ Backend bằng /Backend
  - Dùng ciw để đổi Backend thành API
  - Bấm Esc
*/

/*
  BÀI TẬP 8: TẬP JUMP WORD
  Trên dòng dưới đây, dùng w, b, e để nhảy giữa các word.
*/

const practiceSentence = "React JavaScript TypeScript Neovim VSCode Terminal Git";

/*
  BÀI TẬP 9: TẬP DÒNG
  - Dùng 0 để về đầu dòng
  - Dùng $ để tới cuối dòng
  - Dùng C để xoá từ cursor tới cuối dòng và gõ lại
*/

const longMessage = "This is a long message for practicing line movement in Neovim.";

/*
  BÀI TẬP 10: SAVE / QUIT
  - :w để save
  - :q để quit
  - :wq để save và quit
*/



console.log("tesst c2")
console.log("test c3")
