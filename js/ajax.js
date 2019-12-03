//ajax獲取youtube api 添加到works內容
$(document).ready(function(){
$.get(
  "https://www.googleapis.com/youtube/v3/channels", {
    part: 'contentDetails',
    id: 'UCR-CQntPWCvRhjLhahudFaw',
    key: 'AIzaSyAwWIfxm7buvabj0HQnwaRDIL7GDTcrNTY'
  },
  function(data){
    $.each(data.items, function(i, item){
        // console.log(item);
      pid = item.contentDetails.relatedPlaylists.uploads;
      getVids(pid);              
    });
  }
);
    // 必須透過channel api 取得 pid
    // pid = "UUR-CQntPWCvRhjLhahudFaw";    
function getVids(){
  $.get(       
    "https://www.googleapis.com/youtube/v3/playlistItems", {
      part: 'snippet',
      maxResults: 8,
      playlistId: pid,
      key: 'AIzaSyAwWIfxm7buvabj0HQnwaRDIL7GDTcrNTY'
    },
    function(data){
      var output;
      var title;
      $.each(data.items, function(i, item){
        if(i === 0 || i === 1) return; // skip the first and second
        videoTitle = item.snippet.title;
        title = videoTitle;
        vId = item.snippet.resourceId.videoId;
        output = '<li>'+'<h4>'+title+'</h4>'+'<iframe src=\"//www.youtube.com/embed/'+vId+'\"></iframe></li>';
          $('#result').append(output);
          // console.log(output);
      });
    }
  );
}
})
