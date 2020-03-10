UPDATE cart
  SET qty = qty + 1
WHERE user_id = ${user_id} AND product_id = ${product_id};

SELECT *
FROM cart
JOIN products ON cart.product_id = products.product_id
WHERE user_id = ${user_id};