import { Router } from "express" ;

import galleryControlers from "../controllers/galleryControllers" ;
import { Role } from "../common/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , galleryControlers.addPhoto) ; 

router.get("/all/my" , usersMiddleware([Role.Student]) , galleryControlers.getMyGallery) ; 

export default router ;