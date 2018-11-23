

/**
 * ADD_PRODUCT_TO_CART
 * REMOVE_PRODUCT_FROM_CART
 * PREV_PAGINATION
 * NEXT_PAGINATION
 * SELECT_PAGINATION
 */

 /** articles
  * ID : AI, PRIMARY_KEY
  * NAME : VARCHAR(255)
  * PRICE : INT
  * QUANTITY: INT
  * DATE: DATE
  */

  /**
   * POST /articles/qty/2/0
   * GET /articles/
   * GET /articles/2 <- pagination
   */


/*
CREATE DATABASE amazon

USE amazon

CREATE TABLE articles (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(255),
 date DATE,
 price INT,
 quantity INT
)


INSERT INTO articles (name, date, price, quantity)
VALUES
('Fitbit - Versa', NOW(), '159.00', '12'),
('Asus TUF705GE-EV130T PC Portable Gamer', NOW(), '999.00', '4'),
('Logitech G910 Clavier de jeu Mécanique', NOW(), '109.00', '38'),
('Amazon Echo ( le gros cancer )', NOW(), '59.00', '895'),
('OnePlus 6 Smartphone débloqué 4G', NOW(), '459.00', '30'),
('VicTsing Diffuseur Huiles Essentielles 300ml Humidificateur d\'air ', NOW(), '18.16', '103'),
('Bâtons de réglisse Bio 100g - 12 bâtons minimum', NOW(), '9.99', '4059');

 */