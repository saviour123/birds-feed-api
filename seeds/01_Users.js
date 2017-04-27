
exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  
    var tableName = 'users';
    var currentTime = new Date();


    var rows = [
        {
            name: 'saviour gidi',
            username: 'saviour123',
            password: 'sav_gidi',
            email: 'profsaviour@gmail.com',
            guid: 'f03ede7c-b121-4112-bcc7-130a3e87988c',
            created_at: currentTime
        },
        {
            name: 'salma sualah',
            username: 's_salma123',
            password: 's_salma123',
            email: 'salma@example.com',
            guid: '571b1fdc-2b50-11e7-aabb-183da26ab8c4',
            created_at: currentTime,
        
        }
    ];



  return knex(tableName)
      .del()
      .then(function(){
        return knex.insert(rows).into(tableName) 
      });


};
