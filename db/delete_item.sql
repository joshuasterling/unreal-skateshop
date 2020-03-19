DELETE FROM cart
WHERE cart_id = $1;

SELECT *
FROM cart
JOIN products on cart.product_id = products.product_id
WHERE user_id = $2
ORDER BY cart_id;