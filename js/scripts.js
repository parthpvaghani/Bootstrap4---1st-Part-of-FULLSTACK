    // $(document).ready(function(){
        //     $('[data-toggle="tooltip"]').tooltip();
        // });
       
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval:2000 } );
            $("#carouselButton").click(function(){
                if($("#carouselButton").children('span').hasClass('fa-pause')){
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children('span').removeClass('fa-pause');
                    $("#carouselButton").children('span').addClass('fa-play');
                }
                else if($("#carouselButton").children('span').hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children('span').removeClass('fa-play');
                    $("#carouselButton").children('span').addClass('fa-pause');
                }
                
            });
            $("#reservetable1").click(function(){
                // $("#reservetable1").attr('data-toggle','modal');
                // $("#reservetable1").attr('data-target','#reservetable');
                $("#reservetable").modal();
            });
            $("#loginbutton").click(function(){
                $("#loginModal").modal();
            });
            
            
        });