import { Router } from "express" ;

import authControlers from "../controllers/authControllers";


let router = Router() ;


router.post("/login" , authControlers.login) ; 


export default router ;