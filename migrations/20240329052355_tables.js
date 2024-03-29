exports.up = function (knex) {
  return knex.schema
    .createTable("Users", function (table) {
      table.increments("UserID").primary();
      table.string("Username").unique().notNullable();
      table.string("Password").notNullable(); // Assuming hashed password
      table.string("Email").unique().notNullable();
      table.enum("UserType", ["tourist"]).defaultTo("tourist").notNullable();
    })
    .createTable("TourPackages", function (table) {
      table.increments("PackageID").primary();
      table.string("Title").notNullable();
      table.text("Description");
      table.integer("Duration").notNullable(); // Duration in days
      table.decimal("Price", 10, 2).notNullable();
      table.string("Location").notNullable();
    })
    .createTable("Bookings", function (table) {
      table.increments("BookingID").primary();
      table.integer("UserID").unsigned().references("UserID").inTable("Users");
      table
        .integer("PackageID")
        .unsigned()
        .references("PackageID")
        .inTable("TourPackages");
      table.date("BookingDate").notNullable();
      table.decimal("TotalPrice", 10, 2).notNullable();
      table
        .enum("Status", ["pending", "confirmed", "cancelled"])
        .defaultTo("pending")
        .notNullable();
    })
    .createTable("Accommodations", function (table) {
      table.increments("AccommodationID").primary();
      table.string("Name").notNullable();
      table.string("Location").notNullable();
      table.text("Description");
      table.decimal("Price", 10, 2).notNullable();
      table.integer("Capacity").notNullable();
    })
    .createTable("Reviews", function (table) {
      table.increments("ReviewID").primary();
      table.integer("UserID").unsigned().references("UserID").inTable("Users");
      table
        .integer("PackageID")
        .unsigned()
        .references("PackageID")
        .inTable("TourPackages");
      table.integer("Rating").notNullable(); // Rating out of 5
      table.text("Comment");
      table.date("ReviewDate").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Reviews")
    .dropTableIfExists("Accommodations")
    .dropTableIfExists("Bookings")
    .dropTableIfExists("TourPackages")
    .dropTableIfExists("Users");
};
