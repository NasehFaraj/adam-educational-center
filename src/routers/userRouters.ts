import { Router } from "express" ;

import userControlers from "../controllers/userControllers" ;
import { Role } from "../common/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , userControlers.addUser) ; 

router.get("/all" , usersMiddleware([Role.Admin]) , userControlers.getUsers) ; 

export default router ;