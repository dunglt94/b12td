let eng = [
    "apple", "banana", "cat", "dog", "elephant", "fish", "giraffe",
    "house", "ice cream", "jelly", "kite", "lion", "monkey", "nest",
    "orange", "penguin", "queen", "rabbit", "sun", "tiger", "umbrella",
    "violin", "whale", "xylophone", "yogurt", "zebra"
];

let Eng = [
    "Apple", "Banana", "Cat", "Dog", "Elephant", "Fish",
    "Giraffe", "House", "Ice cream", "Jelly", "Kite",
    "Lion", "Monkey", "Nest", "Orange", "Penguin",
    "Queen", "Rabbit", "Sun", "Tiger", "Umbrella",
    "Violin", "Whale", "Xylophone", "Yogurt", "Zebra"
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
        if (str.value == eng[i] || str.value == Eng[i]) {
            index = i;
            for (let j = 0; j < vie.length; j++) {
                if (index == j) {
                    result = vie[j];
                    // Nếu chữ cái đầu của từ cần dịch là viết hoa thì chữ cái đầu của kết quả sẽ thành viết hoa
                    if (str.value == Eng[i]) {
                        let letter = result.split('') //Tách (split) string thành mảng (arra)
                        letter[0] = letter[0].toUpperCase();
                        result = letter.join('');
                    }
                }
            }
            break;
        } else {
            result = 'Không tìm thấy từ.';
        }
    }
    show_result.style.fontWeight = "bold"; //In đậm kết quả
    show_result.innerHTML = ` ${result}`;

}
//Làm trống Input
function cleanInput() {
    document.getElementById("word").value = "";
}
//Show list của từ có trong database
let wordlist = document.getElementById("wordlist");
function showWordlist() {
    wordlist.innerHTML = `List: <br> - ${eng.join('<br>- ')}`;
}
// Hide list
function hideWordList() {
    wordlist.innerHTML = ``;
}