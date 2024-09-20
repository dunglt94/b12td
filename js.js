let eng = [
    "apple", "banana", "cat", "dog", "elephant", "fish", "giraffe",
    "house", "ice cream", "jelly", "kite", "lion", "monkey", "nest",
    "orange", "penguin", "queen", "rabbit", "sun", "tiger", "umbrella",
    "violin", "whale", "xylophone", "yogurt", "zebra"
];

let vie = [
    "táo", "chuối", "mèo", "chó", "voi", "cá", "hươu cao cổ",
    "nhà", "kem", "thạch", "diều", "sư tử", "khỉ", "tổ", "cam",
    "chim cánh cụt", "nữ hoàng", "thỏ", "mặt trời", "hổ", "ô",
    "đàn violin", "cá voi", "đàn ghi ta", "sữa chua", "ngựa vằn"
];

let str = document.getElementById('word');
let index = -1;
let result = "";
let show_result = document.getElementById("result");
function EtoV() {
    for (let i = 0; i < eng.length; i++) {
        if (str.value == eng[i]) {
            index = i;
            for (let j = 0; j < vie.length; j++) {
                if (index == j) {
                    result = vie[j];
                }
            }
            break;
        } else {
            result = 'Không tìm thấy từ.';
        }
    }
    show_result.innerHTML = ` ${result}`;
}
