function submitFunc() {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var subject = document.getElementById('subject');
    if (name.value < 1 || phone.value < 1 || subject.value < 1) {
        alert('Please fill out this field!');
    } else {
        window.open('mailto:mohammadjakayulianto@gmail.com?subject='+name.value+', '+phone.value+'&body='+subject.value);
    }
}

function mPdf() {
    window.open('https://github.com/CusMeDroid/cv/raw/main/mohjakayulianto/mohjakayulianto.pdf');
}

if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        artist : 'Denny Caknan.mp3',
        title: 'SATRU 2.mp3',
        artwork: [{
            src: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/07/01/1152666922.jpg',
            sizes: '320x180',
            type: 'image/png'
        }]
    })
}

/* Birthday */
var today = new Date();
var birthday = new Date(1997, 06, 16);
var year = 0;
if (today.getMonth() < birthday.getMonth()) {
    year = 1;
} else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
    year = 1;
}
var age = today.getFullYear() - birthday.getFullYear() - year;

if(age < 0){
    age = 0;
}
document.getElementById('myold').innerHTML = age;
