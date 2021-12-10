exports.up = function (knex) {
    return knex.schema.createTable("movies_theaters", function (table) {
      table
        .integer("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("CASCADE");
      table
        .integer("theater_id")
        .references("theater_id")
        .inTable("theaters")
        .onDelete("CASCADE");
      table.boolean("is_showing");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("movies_theaters");
  };