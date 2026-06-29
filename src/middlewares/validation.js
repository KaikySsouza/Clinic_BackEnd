import { z, ZodError } from "zod";
import bodyParser from "body-parser";


export const validate = (schema) => async (req, res, next) => {
    try { 
        await schema.parseAsync({
            body: req.body, 
            query: req.query,
            params: req.params,
        })
        next()
    }catch(error) {
        if(error instanceof ZodError){
            console.log(error)
            return res.status(400).json({error:  error.issues.map(e => e.message)} 
        )
        
                
        }
        next(error)
    }

} 


