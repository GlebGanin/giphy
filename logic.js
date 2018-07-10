
 $(document).ready(function generatebuttons(){

var topics = ["Kardashians", "Jersey Shore", "Real Housewifes", "Southern Charm", "The Bachelor", "Rock of Love"]

var button;

    for (index in topics){
        button = $('<button class="eotwbutton">').text(topics[index]);
        $('#topicbuttons').append(button);
        }


        $(document).on('click', '#newbutton', function(){

            newinput = $('#newinput').val()
            newbutton = $('<button class="eotwbutton">').text(newinput);
    
            topics.push(newinput)
            // $('#topicbuttons').append(newinput);
            $('#topicbuttons').append(newbutton);

        });

    });


// $('button').on('click', function(){
    // event.preventDefault()

    // buttonpressed= $(this).text();



    

        $(document).on('click', '.eotwbutton', function(){

            event.preventDefault()

            buttonpressed= $(this).text();

        for (var i=0; i<10; i++){

        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" +buttonpressed;
    
        $.ajax({
        url: queryURL,
        }).then(function(response) {
    
            // console.log(response);
    
          var img = $('<img>'); 
    
          img.attr('src', response.data.image_url);
          
          $('#gifpictures').addClass("gifpic").append(img);
    
        
        });
    };
    });

    
