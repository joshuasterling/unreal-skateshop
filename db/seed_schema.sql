CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_email VARCHAR(250),
  user_password VARCHAR(250)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(250),
  product_price DECIMAL,
  product_image VARCHAR(300),
  product_type VARCHAR(250)
);

CREATE TABLE cart(
cart_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
product_id INTEGER REFERENCES products(product_id),
qty INTEGER
);