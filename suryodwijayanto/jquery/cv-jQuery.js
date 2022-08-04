function submitFunc() {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var subject = document.getElementById('subject');
    if (name.value < 1 || phone.value < 1 || subject.value < 1) {
        alert('Please fill out this field!');
    } else {
        window.open('mailto:sahrulti12@gmail.com?subject='+name.value+', '+phone.value+'&body='+subject.value);
    }
}

function mPdf() {
    window.open('https://github.com/CusMeDroid/cv/raw/main/suryodwijayanto/cv_suryodwijayanto.pdf');
}

/* Info/Notification Music Audio
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        artist : 'THREESIXTY',
        title: 'JAWABAN DIBALIK SENYUMAN',
        artwork: [{
            src: 'https://i.ytimg.com/vi/p6G2ajnqB5c/maxresdefault.jpg',
            sizes: '320x180',
            type: 'image/png'
        }]
    })
}
*/

/* Birthday */
var birthday = new Date(1994, 06, 09);
