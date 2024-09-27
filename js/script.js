$(document).ready(function () {
    $("#formOne").submit(function (e) {
        e.preventDefault();

        const senderInput = $("input#sender").val();
        const sendInput = $("input#send").val();
        const send2Input = $("input#send2").val();
        const send3Input = $("input#send3").val();
        const postInput = $("input#post").val();
        const post2Input = $("input#post2").val();
        const post3Input = $("input#post3").val();
        const post4Input = $("input#post4").val();
        const greetInput = $("input#greet").val();
        const headInput = $("input#head").val();

        $(".sender").html("<b>" + senderInput + "</b>");
        $(".send").text(sendInput);
        $(".send2").text(send2Input);
        $(".send3").text(send3Input);
        $(".post").text(postInput);
        $(".post2").text(post2Input);  
        $(".post3").text(post3Input);
        $(".post4").text(post4Input);
        $(".greet").text(greetInput);
        $(".head").text(headInput);


        $("#letter").show();
        $(".body").hide();
    });
});
$(document).ready(function(){
    $("#formal").click(function(){
        $(".img-bg").hide();
        $(".body").show();
        
    });
});

