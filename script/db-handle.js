function setBackgroundImg(img) {
    idbKeyval
        .set('background-img', img)
        .then(() => {
            console.log(`setImg success`);
        })
        .catch((error) => {
            console.error('setImg error:', error);
        });
}

function getBackgroundImg() {
    return idbKeyval
        .get('background-img')
        .then((value) => {
            console.log('getImg success');
            return value;
        })
        .catch((error) => {
            console.error('getImg error', error);
            return null;
        });
}
