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
