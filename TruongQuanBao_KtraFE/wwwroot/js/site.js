// Giá của một sản phẩm theo đề bài.
const GIA_SAN_PHAM = 1034550;

/**
 * Hàm tính giá trị Tạm tính = Số lượng * Giá sản phẩm.
 * Kết quả được hiển thị trực tiếp vào trường Tạm tính.
 */
function tinhTamTinh() {
    const quantityInput = document.getElementById('quantity');
    const subtotalElement = document.getElementById('subtotal');

    if (!quantityInput || !subtotalElement) return;

    let soLuong = parseInt(quantityInput.value, 10);
    if (Number.isNaN(soLuong) || soLuong < 1) soLuong = 1;
    if (soLuong > 99) soLuong = 99;

    quantityInput.value = soLuong;
    const tamTinh = soLuong * GIA_SAN_PHAM;
    subtotalElement.innerHTML = `${tamTinh.toLocaleString('vi-VN')}<sup>đ</sup>`;
}

function thayDoiSoLuong(delta) {
    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) return;

    const current = parseInt(quantityInput.value, 10) || 1;
    quantityInput.value = Math.min(99, Math.max(1, current + delta));
    tinhTamTinh();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('minusBtn')?.addEventListener('click', () => thayDoiSoLuong(-1));
    document.getElementById('plusBtn')?.addEventListener('click', () => thayDoiSoLuong(1));
    document.getElementById('quantity')?.addEventListener('input', tinhTamTinh);
    document.getElementById('quantity')?.addEventListener('change', tinhTamTinh);

    const mainImage = document.getElementById('mainProductImage');
    document.querySelectorAll('.thumb').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            if (mainImage) mainImage.src = button.dataset.img;
        });
    });

    tinhTamTinh();
});

// Giữ tên hàm theo đúng yêu cầu đề bài để có thể gọi trực tiếp nếu cần.
window.tinhTamTinh = tinhTamTinh;
