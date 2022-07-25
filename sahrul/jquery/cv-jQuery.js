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
    window.open('https://github.com/CusMeDroid/cv/raw/main/sahrul/sahrul.pdf');
}

if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        artist : 'Maroon 5',
        title: 'Memories',
        artwork: [{
            src: 'https://1.bp.blogspot.com/-rIK1fSxr8Lw/Xb9PWSeAe2I/AAAAAAAAIfA/BU7xtpm35Jg3HCmmaIbD1RUMODHS2DgpACLcBGAsYHQ/s640/Memories.jpg',
            sizes: '320x180',
            type: 'image/png'
        }]
    })
}
