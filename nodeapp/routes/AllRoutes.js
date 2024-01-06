const routes =require("express").Router();

routes.use("/api/city",(require("../controllers/CityControllers")))
routes.use("/api/signup",(require("../controllers/SignupControllers")))
routes.use("/api/auth",(require("../controllers/AuthController")))
routes.use("/api/user-profile",(require("../controllers/UserProfileController")))
routes.use("/api/admin-auth",(require("../controllers/AdminAuthController")))

module.exports = routes;