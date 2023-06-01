$(document).ready(function(){
    var userFeed = new Instafeed({
        get:'user',
        userId: '*****', //https://codeofaninja.com/tools/find-instagram-user-id
        limit:9,
        resolution: 'standard_resolution',
        accessToken: '***',//https://instagram.pixelunion.net/
        sortBy:'most-recent',
        template:'<div class="col-md-3 gallery"> <a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"></a> </div>',
    });
    userFeed.run();
})