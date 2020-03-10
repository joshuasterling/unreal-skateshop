INSERT INTO cart
(user_id, product_id, qty)
VALUES
(${user_id}, ${product_id}, 1);

SELECT *
FROM cart
JOIN products on carts.product_id = products.product_id
WHERE user_id = ${user_id};