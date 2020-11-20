$(document).ready(function() {

    setInterval ('cursorAnimation()', 600);

    var text = 'whois lars.re<br><br>Lars is a student.<br>Lars is a developer.<br><br>More coming soon.<br><br>Have a nice time.<br><br><br>Send me an email <a href="mailto:me@lars.re">me@lars.re</a><br><br><br>root@lars:~# ls<br><br><a href="https://alltubedownload.net/" target="_blank">recommended_youtube_downloader.sh</a><br><br><br>root@lars:~#';
    type(text);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
