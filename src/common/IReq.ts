import { payload } from "../common/IPayload";


declare global {
    namespace Express {
        interface Request {
            payload: payload 
        }
    }
}