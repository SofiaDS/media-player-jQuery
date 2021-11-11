// funzioni per i video
// chiamata ajax
$.ajax({
    method:'get',
    url:'./assets/json/video.json',
    dataType:'json',
    success: function(data){ 
        //avvia funzione sul file json
        var videos = data.video;

        $.each(videos,function(any, some){
            var element = $('#template-bottoni div').clone();
            $(element)
            .attr('data-src',path + some.file)
            .text(some.title);

            var template = $('#template-bottoni').html();
            var path = '../assets/media/video/';
            var el = template
            .replace('##src##', path + some.file)
            .replace('##titolo##', some.title);

            $('.altri-video-container').append(el)
        })
    }
});

$('.altri-video-container').on('click','div',function(any){
    any.preventDefault;

    var clicksrc= $(this).attr('data-src');
    myVid.src = clicksrc;
    myVid.load();
})

// funzioni per gli audio

$.ajax({
    method:'get',
    url:'./assets/json/audio.json',
    dataType:'json',
    success: function(data){

        var songs = data.audio;

        $.each(songs, function(any,some){
            // clono il bottone
            var a=$('#bottoni-canzoni div').clone();

            $(a)
            .attr('data-src',percorso + some.filo)
            .text(some.title);

            var interfaccia = $('#bottoni-canzoni').html();
            var percorso = 'assets/media/audio/';
            var a = interfaccia
            .replace('##source##', percorso + some.filo)
            .replace('##heading##', some.title);

            $('.altre-canzoni-container').append(a);
        })
    }
});

$('.altre-canzoni-container').on('click','div',function(e){
    e.preventDefault();
    var sourceCliccato = $(this).attr('data-src');
    myaudio.src = sourceCliccato;
    myaudio.load();
})