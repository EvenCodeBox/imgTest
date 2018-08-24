FB.init({
    appId: '266319687311234',
    cookie: true,
    xfbml: true,
    version: 'v3.1'
});

FB.getLoginStatus(fbUnit.connected);
FB.AppEvents.logPageView();

        
fbUnit = {
    connected : false,
    getStatus: function(result){
        this.connected = result.status === 'connected';
    },    
    login: function(){
        FB.login(this.getStatus);
    },
    share: function() {
        FB.getLoginStatus(function (response) {
            console.log(response);
            if (response.status === 'connected') {
                var publish = {
                    display: 'iframe',
                    method: 'feed',
                    link: 'https://www.udemy.com/',
                    hashtag: '只能一個而且有字數限制span',
                    caption: '我想測試'
                    
                };
                FB.ui(publish, null);
            }
        });
    
    },
    


}



