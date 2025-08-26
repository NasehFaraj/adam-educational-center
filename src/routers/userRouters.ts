import { Router } from "express" ;

import userControlers from "../controllers/userControlers" ;


let router = Router() ;


router.put("/" , userControlers.addUser) ; 


export default router ;