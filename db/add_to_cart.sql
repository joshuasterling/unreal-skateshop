INSERT INTO cart
(user_id, product_id, qty)
VALUES
($1, $2, 1);

SELECT *
FROM cart
JOIN products on cart.product_id = products.product_id
WHERE user_id = $1;