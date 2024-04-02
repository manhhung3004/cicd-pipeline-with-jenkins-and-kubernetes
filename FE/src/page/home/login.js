// login.js
export function login() {
    // Xử lý đăng nhập
    console.log('Đăng nhập thành công!');
    document.getElementById('loginButton').classList.add('hidden');
    document.getElementById('logoutButton').classList.remove('hidden');
}

export function logout() {
    // Xử lý đăng xuất
    console.log('Đăng xuất thành công!');
    document.getElementById('loginButton').classList.remove('hidden');
    document.getElementById('logoutButton').classList.add('hidden');
}