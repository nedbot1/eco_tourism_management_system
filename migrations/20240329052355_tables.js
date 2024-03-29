exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("user_id").primary();
      table.string("username").unique().notNullable();
      table.string("salt", 32).notNullable();
      table.string("hash_password", 128).notNullable();
      table.string("email").unique().notNullable();
      table.enum("user_type", ["tourist"]).defaultTo("tourist").notNullable();
    })
    .createTable("tour_packages", function (table) {
      table.increments("package_id").primary();
      table.string("title").notNullable();
      table.text("description");
      table.integer("duration").notNullable();
      table.decimal("price", 10, 2).notNullable();
      table.string("location").notNullable();
    })
    .createTable("bookings", function (table) {
      table.increments("booking_id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users");
      table
        .integer("package_id")
        .unsigned()
        .references("package_id")
        .inTable("tour_packages");
      table.date("booking_date").notNullable();
      table.decimal("total_price", 10, 2).notNullable();
      table
        .enum("status", ["pending", "confirmed", "cancelled"])
        .defaultTo("pending")
        .notNullable();
    })
    .createTable("accommodations", function (table) {
      table.increments("accommodation_id").primary();
      table.string("name").notNullable();
      table.string("location").notNullable();
      table.text("description");
      table.decimal("price", 10, 2).notNullable();
      table.integer("capacity").notNullable();
    })
    .createTable("reviews", function (table) {
      table.increments("review_id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users");
      table
        .integer("package_id")
        .unsigned()
        .references("package_id")
        .inTable("tour_packages");
      table.integer("rating").notNullable(); // Rating out of 5
      table.text("comment");
      table.date("reviewDate").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("reviews")
    .dropTableIfExists("accommodations")
    .dropTableIfExists("bookings")
    .dropTableIfExists("tour_packages")
    .dropTableIfExists("users");
};
