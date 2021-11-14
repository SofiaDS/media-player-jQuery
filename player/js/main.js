//funzione globale per mettere in pause video e audio
function playPause(toPause, toPlay){
    if ( toPause.play()){
        toPause.pause();
        toPlay.play();
    }else{
        toPlay.play();
    }
}

// funzioni per i video
// chiamata ajax
$.ajax({
    method:'get',
    url:'./assets/json/video.json',
    dataType:'json',
    success: function(data){ 
        //avvia funzione sul file json
        var videos = data.video;

        //funzione che crea bottoni dinamici
        $.each(videos,function(any, some){
            var element = $('#template-bottoni div').clone();
            $(element)
            .attr('data-src', path + some.file)
            .text(some.title);

            var template = $('#template-bottoni').html();
            var path = '../assets/media/video/';
            var el = template
            .replace('##src##', path + some.file)
            .replace('##titolo##', some.title);

            $('.altri-video-container').append(el);
        });
    }
});

$('.altri-video-container').on('click','div',function(any){
    any.preventDefault;

    var clicksrc = $(this).attr('data-src');
    myVid.src = clicksrc;
    myVid.load();
    playPause(myaudio, myVid);
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
            var clone = $('#bottoni-canzoni div').clone();
            var interfaccia = $('#bottoni-canzoni').html();
            var percorso = 'assets/media/audio/';

            $(clone)
            .attr('data-src', percorso + some.filo)
            .text(some.title);

            var clone = interfaccia
            .replace('##source##', percorso + some.filo)
            .replace('##heading##', some.title);

            $('.altre-canzoni-container').append(clone);
        });

        //funzione toggle class 
        var bottoni = $('.bottoni');

        bottoni.click(function(){
            $(this).toggleClass('selected');
            bottoni.not(this).removeClass('selected');
        })
    }
});

$('.altre-canzoni-container').on('click','div',function(e){
    e.preventDefault();

    var sourceCliccato = $(this).attr('data-src');
    myaudio.src = sourceCliccato;
    
    myaudio.load();
    playPause(myVid, myaudio);

})