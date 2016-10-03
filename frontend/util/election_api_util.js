export const fetchLocalElections = function(address, success){
  let location = address.geometry.location;
  let query = 'https://api.ballotpedia.org/v1/api.php';
      query += '?Key=035c0919b89a9a1d7e8c8a553606118e';
      query += '&DataSet=Districts';
      query += `&Contains=${location.lat}%2C${location.lng}`;

  $.ajax({
    method: 'GET',
    url: query,
    success
  });
};

export const fetchNationalElections = function(address, success){
  let state = address.address_components[4].short_name;
  let county = address.address_components[3].short_name;
  let city = address.address_components[2].short_name;

  let location = address.geometry.location;
  let query = 'https://api.ballotpedia.org/v1/api.php';
      query += `?Key=035c0919b89a9a1d7e8c8a553606118e`;
      query += `&DataSet=Elections`;
      query += `&State=${state}%7C*`;
      query += `&County=${county}%7C*`;
      query += `&City=${city}%7C*`;
      query += `&DateFrom=${getDate()}`;

  $.ajax({
    method: 'GET',
    url: query,
    success
  });
};

const getDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) { dd='0'+dd; }
  if(mm<10) { mm='0'+mm; }
  return yyyy+'-'+mm+'-'+dd;
};


export const fetchCanidates = function(id, success) {
  let nextElection = '2016-11-08';
  let query = 'https://api.ballotpedia.org/v1/api.php';
      query += `?Key=035c0919b89a9a1d7e8c8a553606118e`;
      query += `&DataSet=People`;
      query += `&Office.District.ID=${id}`;
      query += `&Office.DateNextElection=${nextElection}`;

  $.ajax({
    method: 'GET',
    url: query,
    success
  });
};

////////////////////////////////

export const createElection = function(election, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/elections',
    data: election,
    success,
    error
  });
};

export const updateElection = function(election, success){
  $.ajax({
    method: 'PATCH',
    url: `api/elections/${election.id}`,
    data: {election},
    success
  });
};

export const destroyElection = function(election, success){
  $.ajax({
    method: 'DELETE',
    url: `api/elections/${election.id}`,
    success
  });
};
