SELECT *
FROM cart
JOIN products ON cart.product_id = products.product_id
WHERE user_id = $1;