import express from "express";
import db from "./db";
import initializeDB from "./db";


const app =express();


const start = async () => {
    const controller = await initializeDB();


app.get("/",(req,res)=>{
    res.send("hello");
})

  ///////////**********Admin Table*************///////////
  app.get("/admin/create", async (req, res) => {
    const result = await controller.createAdmin(req.query);
    res.json(result);
  });
  app.get("/admin", async (req, res) => {
    const result = await controller.getAdmin();
    res.json(result);
  });
  app.get("/admin/id/:ID", async (req, res) => {
    const result = await controller.getAdminId(req.params.ID);
    res.json(result);
  });
  app.get("/admin/name/:NAME", async (req, res) => {
    const result = await controller.getAdminName(req.params.NAME);
    res.json(result);
  });
  app.get("/admin/update/:ID", async (req, res) => {
    const result = await controller.updateAdmin(req.params.ID,req.query);
    res.json(result);
  });
  app.get("/admin/delete/id/:ID", async (req, res) => {
    const result = await controller.deleteAdminId(req.params.ID);
    res.json(result);
  });
  app.get("/admin/delete/name/:NAME/:pass", async (req, res) => {
    const result = await controller.deleteAdminName(req.params.NAME);
    res.json(result);
  });

  ///////////**********Owner Table*************///////////



  app.get("/owner", async (req, res) => {
    const result = await controller.getOwner();
    res.json(result);
  });
  app.get("/owner/id/:ID", async (req, res) => {
    const result = await controller.getOwnerId(req.params.ID);
    res.json(result);
  });
  app.get("/owner/name/:NAME", async (req, res) => {
    const result = await controller.getOwnerName(req.params.NAME);
    res.json(result);
  });
  app.get("/owner/create", async (req, res) => {
    const result = await controller.createOwner(req.query);
    res.json(result);
  });
  // app.get("/owner/update/:ID", async (req, res) => {
  //   const result = await controller.updateOwner(req.params.ID,req.query);
  //   res.json(result);
  // });
  app.get("/owner/delete/id/:ID", async (req, res) => {
    const result = await controller.deleteOwnerId(req.params.ID);
    res.json(result);
  });
  app.get("/owner/delete/name/:NAME", async (req, res) => {
    const result = await controller.deleteOwnerName(req.params.NAME);
    res.json(result);
  });



  ///////////**********Image Table*************///////////

  app.get("/image", async (req, res) => {
    const result = await controller.getImage();
    res.json(result);
  });
  app.get("/image/id/:ID", async (req, res) => {
    const result = await controller.getImageId(req.params.ID);
    res.json(result);
  });
  app.get("/image/name/:NAME", async (req, res) => {
    const result = await controller.getImageName(req.params.NAME);
    res.json(result);
  });
  // app.get("/image/create", async (req, res) => {
  //   const result = await controller.createImage(req.query);
  //   res.json(result);
  // });









  ///////////**********product Table*************///////////


  app.get("/product", async (req, res) => {
    const result = await controller.getProduct();
    res.json(result);
  });
  app.get("/product/id/:ID", async (req, res) => {
    const result = await controller.getProductId(req.params.ID);
    res.json(result);
  });
  app.get("/product/name/:NAME", async (req, res) => {
    const result = await controller.getProductName(req.params.NAME);
    res.json(result);
  });
  app.get("/product/create", async (req, res) => {
    const result = await controller.createProduct(req.query);
    res.json(result);
  });









///////////**********testimonies Table*************///////////
app.get("/testomonie", async (req, res) => {
  const result = await controller.getTestimonie();
  res.json(result);
});
app.get("/testomonie/id/:ID", async (req, res) => {
  const result = await controller.getTestimonieId(req.params.ID);
  res.json(result);
});
app.get("/testomonie/desc/:NAME", async (req, res) => {
  const result = await controller.getTestimonieDescription(req.params.NAME);
  res.json(result);
});















































  

};
app.listen(8000, () => {
    console.log("port 8000");
  });
start();
  






