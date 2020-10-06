/**
 * npx sequelize-cli model:generate los atributos de la tabla o entidad
 *  ejemplo --name Usuarios --attributes nombre:string,apellidos:string,edad:number
 * 
 * Esto crea un archivo con las especificaciones que mandamos 
 * 
 *  
 */

  /*

  
==Napadensky
npx sequelize-cli model:generate --name sessions --attributes data:string, create_at:date, update_at:date
npx sequelize-cli model:generate --name coupons --attributes code:string, description:string, active:boolean, value:interger, multiple:boolean, start_date:date, end_date:date, inserted_at:date, updated_at:date 

==Braulio = npx sequelize-cli model:generate --name product --attributes name:string, create_at:date, update_at:date
product-stauts

Roles
npx sequelize-cli model:generate --name roles --attributes name:string, create_at:date, update_at:date
Tags 
npx sequelize-cli model:generate --name tags --attributes name:string, create_at:date, update_at:date
==Heriberto9
Users


 npx sequelize-cli model:generate --name Usuarios --attributes nombre:string,apellidos:string,edad:integer */

//  Product categories 
// Product tags
/* === NAPADENSKY
npx sequelize-cli model:generate --name product_categories --attributes category_id:integer, product_id:integer,create_at:date, update_at:date
npx sequelize-cli model:generate --name product_tags --attributes product_id:integer, tag_id:integer,create_at:date, update_at:date
*/


// user-roles
// npx sequelize-cli model:generate --name user_roles --attributes user_id:integer,role_id:integer,inserted_at:date,updated_at:date
// cc_transactions
// npx sequelize-cli model:generate --name cc_transactions --attributes code:string,order_id:integer,transdate:date,processor:string,processor_trans_id:string,amount:integer,cc_num:string,cc_type:string,response:string,inserted_at:date,updated_at:date

// order_products
// npx sequelize-cli model:generate --name order_products --attributes order_id:integer,sku:string,name:string,description:string,price:integer,quantity:integer,subtotal:integer,created_at:date,updated_at:date
// Sales_order
// npx sequelize-cli model:generate --name sales_orders --attributes order_date:date,total:integer,coupon_id:integer,session_id:string,user_id:integer,created_at:date,updated_at:date


// npx sequelize-cli model:generate --name products --attributes sku:string, name:string, description:string, product_status_id:integer, regular_price:integer, discount_price:integer, quantity:integer, taxable:boolean