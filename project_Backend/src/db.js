import sqlite from 'sqlite';
import express from "express";



const initializeDB = async () => {
    const db = await sqlite.open("./db.sqlite");
        // await db.run(`CREATE TABLE admin (
        //     admin_id integer NOT NULL CONSTRAINT admin_pk PRIMARY KEY UNIQUE,
        //     admin_user text NOT NULL,
        //     admin_pass text NOT NULL
        // );`);



        //  await db.run(`CREATE TABLE owner (
        //     owner_id integer NOT NULL CONSTRAINT owner_pk PRIMARY KEY,
        //     owner_name text NOT NULL
        // );`);

      
  


        // await db.run(`CREATE TABLE image (
        //     image_id integer NOT NULL CONSTRAINT image_pk PRIMARY KEY,
        //     product_product_id integer NOT NULL,
        //     image_name text NOT NULL,
        //     CONSTRAINT image_product FOREIGN KEY (product_product_id)
        //     REFERENCES product (product_id)
        // );`) 


        // await db.run(`CREATE TABLE testimonies (
        //     testimonie_id integer NOT NULL CONSTRAINT testimonie_pk PRIMARY KEY,
        //     testimonie_product_id integer NOT NULL AUTOINCREMENT,
        //     Description text NOT NULL,
        //     date text,
        //     CONSTRAINT product_seller FOREIGN KEY (testimonie_product_id)
        //     REFERENCES product (product_id)
        // );`)

        // await db.run(`CREATE TABLE product (
        //     product_id integer NOT NULL CONSTRAINT product_pk PRIMARY KEY,
        //     owner_product_id integer NOT NULL,
        //     product_name text NOT NULL,
        //     product_price integer NOT NULL,
        //     product_amount integer NOT NULL,
        //     product_expiry_date text NOT NULL,
        //     product_season text NOT NULL,
        //     CONSTRAINT owner_product_id FOREIGN KEY (owner_product_id)
        //     REFERENCES owner (owner_id)
        // );`);

     


//needs to be inserted 
// insert into image(product_product_id,image_name) VALUES (1,'image1')

// insert into product (owner_product_id,product_name,product_price,product_amount,product_expiry_date,product_season) values (4,'cocnut',250,25,'2-2-2020','fall')



         //await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)
         //await db.run(`insert into product (owner_product_id,product_name,product_price,product_amount,product_expiry_date,product_season) values (4,'cocnut',250,25,'2-2-2020','fall')`)







         //await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)

        //await db.run(`insert into testimonies (testimonie_product_id,Description,date) values (2,'very fat','2-2-2020')`)
        //await db.run(`insert into product (testimonie_product_id,Description,date) values (1,'fat','2-2-2020')`)

        // await db.run(`select * from testimonies`)

        //  await db.run(`INSERT into product (product_name,product_price,
        //     product_amount,product_expiry_date,
        //     product_season)
        //     values("oil",25000,20,"2020-1-8","Fall")`) 



        // await db.run(`INSERT INTO 'testimonies'
        //     ("Description", "date")
        //     VALUES ("Good product", "20-2-2020"); `) 



        
        
        
        
        
  const createAdmin= async (props) => {
        const {admin_user,admin_pass}=props;
          if(admin_user && admin_pass){
             try{
              const rows = await db.run(`insert into admin (admin_user,admin_pass) values ('${admin_user}','${admin_pass}')`);
              if(rows.stmt.changes>0)
                return rows.stmt.lastID;
              else
                return false;
            }catch(err){
              console.log(err)
              throw new Error("Error conection with database")
            } 
        }
          return "Enter user and pass";
  }
      
  const getAdmin = async () => {
    try{
    const rows = await db.all(`select * from admin`);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }


  const getAdminId = async (id) => {
    try{
    const rows = await db.all(`select * from admin where admin_id=${id}`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getAdminName= async (name) => {
    try{
    const rows = await db.all(`select * from admin where admin_user='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const updateAdmin= async (id,props) => {
    const {admin_user,admin_pass}=props;
    let query=" ";
    if(admin_user && admin_pass){
      query=`update admin set admin_user='${admin_user}', admin_pass='${admin_pass}' where admin_id=${id}`;
    }
    else if(admin_user && !admin_pass)
      query=`update admin set admin_user='${admin_user}' where admin_id=${id}`;
    else
      query=`update admin set admin_pass='${admin_pass}' where admin_id=${id}`;
    try{
    const rows = await db.run(query);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const deleteAdminId= async (id) => {
    try{
    const rows = await db.run(`delete from admin where admin_id=${id}`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const deleteAdminName= async (name) => {
    try{
    const rows = await db.run(`delete from admin where admin_user='${name}'`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getOwner = async () => {
    try{
    const rows = await db.all(`select * from 'owner'`);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }

  const getOwnerId = async (id) => {
    try{
    const rows = await db.all(`select * from 'owner' where owner_id=${id}`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getOwnerName = async (name) => {
    try{
    const rows = await db.all(`select * from 'owner' where owner_name='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const createOwner= async (props) => {
    const {owner_name}=props;
    console.log(props)
    if(owner_name){
       try{
        const rows = await db.run(`INSERT INTO 'owner'
        ("owner_name")
        VALUES ('${owner_name}')`);
        if(rows.stmt.changes>0)
          return rows.stmt.lastID;
        else
          return false;
      }catch(err){
        throw new Error("Error conection with database")
      } 
    }
    return "Enter owner name please!!";
  }

  // const updateOwner= async (id,props) => {
  //   const {owner_name}=props;
  //   console.log(props)
  //   let query=" ";
  //   if(owner_name){
  //     query=`update owner set owner_name='${owner_name}' where owner_id=${id}`;
  //   }
  //   try{
  //   const rows = await db.run(query);
  //   if(rows.stmt.changes>0)
  //     return true;
  //   else
  //     return false;
  //   }catch(err){
  //     console.log(err)
  //     throw new Error("Error conection with database")
  //   }
  // }

  const deleteOwnerId= async (id) => {
    try{
    const rows = await db.run(`delete from 'owner' where owner_id=${id}`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

const deleteOwnerName= async (name) => {
    try{
    const rows = await db.run(`delete from 'owner' where owner_name='${name}'`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }























  const getImage = async () => {
    try{
    const rows = await db.all(`select * from 'image'`);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }

  const getImageId = async (id) => {
    try{
    const rows = await db.all(`select * from 'image' where image_id=${id}`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getImageName = async (name) => {
    try{
    const rows = await db.all(`select * from 'image' where image_name='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  // const createImage= async (props) => {
  //   const {image_name}=props;
  //   if(image_name){
  //      try{
  //       const rows = await db.run(`INSERT INTO 'image'
  //       ("image_name" , "product_product_id")
  //       VALUES ('${image_name}')`);
  //       if(rows.stmt.changes>0)
  //         return rows.stmt.lastID;
  //       else
  //         return false;
  //     }catch(err){
  //       throw new Error("Error conection with database")
  //     } 
  //   }
  //   return "Enter all necessary data!!";
  // }

  // const updateOwner= async (id,props) => {
  //   const {owner_name}=props;
  //   console.log(props)
  //   let query=" ";
  //   if(owner_name){
  //     query=`update owner set owner_name='${owner_name}' where owner_id=${id}`;
  //   }
  //   try{
  //   const rows = await db.run(query);
  //   if(rows.stmt.changes>0)
  //     return true;
  //   else
  //     return false;
  //   }catch(err){
  //     console.log(err)
  //     throw new Error("Error conection with database")
  //   }
  // }

  // const deleteOwnerId= async (id) => {
  //   try{
  //   const rows = await db.run(`delete from 'owner' where owner_id=${id}`);
  //   if(rows.stmt.changes>0)
  //     return true;
  //   else
  //     return false;
  //   }catch(err){
  //     throw new Error("Error conection with database")
  //   }
  // }

// const deleteOwnerName= async (name) => {
//     try{
//     const rows = await db.run(`delete from 'owner' where owner_name='${name}'`);
//     if(rows.stmt.changes>0)
//       return true;
//     else
//       return false;
//     }catch(err){
//       throw new Error("Error conection with database")
//     }
//   }














const getProduct = async () => {
  try{
  const rows = await db.all(`select * from 'product'`);
  return rows
  }catch(err){
    throw new Error("Error connection with database")
  }
}

const getProductId = async (id) => {
  try{
  const rows = await db.all(`select * from 'product' where product_id=${id}`);
  if(rows.length>0)
    return rows;
  else
    return false;
  }catch(err){
    throw new Error("Error conection with database")
  }
}

const getProductName = async (name) => {
  try{
  const rows = await db.all(`select * from 'product' where product_name='${name}'`);
  if(rows.length>0)
    return rows;
  else
    return false;
  }catch(err){
    throw new Error("Error conection with database")
  }
}

const createProduct = async (props) => {
    const {product_name,product_price,product_amount,product_expiry_date,product_season}=props;
    if(product_name && product_price && product_amount && product_expiry_date && product_season){
       try{
       const rows = await db.run(`INSERT INTO 'product'
        ("product_name", "product_price", "product_amount", "product_expiry_date", "product_season")
        VALUES ('${product_name}','${product_price}', '${product_amount}', '${product_expiry_date}', '${product_season}')`);
        if(rows.stmt.changes>0)
          return rows.stmt.lastID;
        else
          return false;
      }catch(err){
        throw new Error("Error conection with database")
      } 
    }
    return "Enter all necessary data!!";
}

// const updateProduct = async (id,props) => {
  //   const {owner_name}=props;
  //   console.log(props)
  //   let query=" ";
  //   if(owner_name){
  //     query=`update owner set owner_name='${owner_name}' where owner_id=${id}`;
  //   }
  //   try{
  //   const rows = await db.run(query);
  //   if(rows.stmt.changes>0)
  //     return true;
  //   else
  //     return false;
  //   }catch(err){
  //     console.log(err)
  //     throw new Error("Error conection with database")
  //   }
  // }

  // const deleteProductId= async (id) => {
  //   try{
  //   const rows = await db.run(`delete from 'product' where product_id=${id}`);
  //   if(rows.stmt.changes>0)
  //     return true;
  //   else
  //     return false;
  //   }catch(err){
  //     throw new Error("Error conection with database")
  //   }
  // }

// const deleteOwnerName= async (name) => {
//     try{
//     const rows = await db.run(`delete from 'owner' where owner_name='${name}'`);
//     if(rows.stmt.changes>0)
//       return true;
//     else
//       return false;
//     }catch(err){
//       throw new Error("Error conection with database")
//     }
//   }




















const getTestimonie = async () => {
  try{
  const rows = await db.all(`select * from testimonies`);
  return rows
  }catch(err){
    throw new Error("Error connection with database")
  }
}


const getTestimonieId = async (id) => {
  try{
  const rows = await db.all(`select * from testimonies where testimonie_id=${id}`);
  if(rows.length>0)
    return rows;
  else
    return false;
  }catch(err){
    throw new Error("Error conection with database")
  }
}

const getTestimonieDescription = async (id) => {
  try{
  const rows = await db.all(`select Description from testimonies where testimonie_id='${id}'`);
  if(rows.length>0)
    return rows;
  else
    return false;
  }catch(err){
    throw new Error("Error conection with database")
  }
}

// const updateAdmin= async (id,props) => {
//   const {admin_user,admin_pass}=props;
//   let query=" ";
//   if(admin_user && admin_pass){
//     query=`update admin set admin_user='${admin_user}', admin_pass='${admin_pass}' where admin_id=${id}`;
//   }
//   else if(admin_user && !admin_pass)
//     query=`update admin set admin_user='${admin_user}' where admin_id=${id}`;
//   else
//     query=`update admin set admin_pass='${admin_pass}' where admin_id=${id}`;
//   try{
//   const rows = await db.run(query);
//   if(rows.stmt.changes>0)
//     return true;
//   else
//     return false;
//   }catch(err){
//     throw new Error("Error conection with database")
//   }
// }

// const deleteAdminId= async (id) => {
//   try{
//   const rows = await db.run(`delete from admin where admin_id=${id}`);
//   if(rows.stmt.changes>0)
//     return true;
//   else
//     return false;
//   }catch(err){
//     throw new Error("Error conection with database")
//   }
// }

// const deleteAdmin = async (name) => {
//   try{
//   const rows = await db.run(`delete from admin where admin_user='${name}'`);
//   if(rows.stmt.changes>0)
//     return true;
//   else
//     return false;
//   }catch(err){
//     throw new Error("Error conection with database")
//   }
// }











  const controller = {
   
    getAdmin,
    getAdminId,
    getAdminName,
    deleteAdminId,
    deleteAdminName,
    createAdmin,
    updateAdmin,
    getOwner,
    getOwnerId,
    getOwnerName,
    createOwner,
    //updateOwner,
    deleteOwnerId,
    deleteOwnerName,
    getImage,
    getImageId,
    getImageName,
    // createImage,




    getProduct,
    getProductId,
    getProductName,
    

    getTestimonie,
    getTestimonieId,
    getTestimonie,
    getTestimonieId,
    getTestimonieDescription,





   
  };
  return controller;
};




export default initializeDB ;
