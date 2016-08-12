app.factory('capstoneService', function($http){
  return {
    tunes: function(bandName){
      console.log(bandName);
      if(!bandName){
          bandName = "Slowdive"
      }
      return $http.get('https://api.spotify.com/v1/search?query=' + bandName + '&offset=0&limit=20&type=artist')
    }
  }
})
