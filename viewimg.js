       $(document).ready(function () {
            GetImg();
        });

        function loadMore(){
            $.getJSON("./data/img2.json", function (data) {
                renderImg(data);
            });
        }
        
        function GetImg() {
            $.getJSON("./data/img.json", function (data) {
                renderImg(data);
            });
        }

        function renderImg(data){
                for(var i=0; i<data.length; i++)
                {
                    //IE不支援QQ

                    // var li = `            
                    // <li align="center" class="col-xs-12 col-sm-4 col-md-3" data-responsive="${data[i].img} 375, ${data[i].img} 480, ${data[i].img} 800" data-src="${data[i].img}"
                    // data-sub-html="<h4>${data[i].name}</h4><p>${data[i].name}</p>">
                    //     <a href="" align="center">
                    //         <img class="img-responsive" src="${data[i].img}">   
                    //     </a>
                    //     <div >${data[i].name}</div> 
                    // </li>`;
                    var li = "<li align=\"center\" class=\"col-xs-12 col-sm-4 col-md-3\" data-responsive=\"" + data[i].img + " 375, " + data[i].img + " 480, " + data[i].img + " 800\" data-src=\"" + data[i].img + "\" data-sub-html=\"<h4>" + data[i].name + "</h4><p>" + data[i].name + "</p>\"><a href=\"\" align=\"center\"><img class=\"img-responsive\" src=\"" + data[i].img + "\"></a><div >" + data[i].name + "</div></li>";

                    $('#lightgallery').append(li);
                }
                if($("#lightgallery").data("lightGallery")){
                    $("#lightgallery").data("lightGallery").destroy(true);
                }
                $('#lightgallery').lightGallery({
                    thumbnail: true, //使否顯示清單 true 才有showThumbByDefault功能
                    showThumbByDefault: true, //清單自動展開
                    animateThumb: true                  
                });
        }