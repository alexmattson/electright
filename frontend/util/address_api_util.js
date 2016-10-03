export const fetchAddress = function(address, success, error){
  $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDLsnWKas377GX0jcGlNbUqHY1dqNAvS_c`,
    success
  });
};
