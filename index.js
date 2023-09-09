import express from "express";
import { pool } from "./database";

const router =express.Router();


router.post("/addUser",async(req,res)=>{
    try {
        let callAddUser = "CALL addUser()";

        pool.query(callAddUser,(err,result)=>{
            if(err){
                res.send(new Error(400,err.message));
            }else{
                console.log(result);
            }
        })
    } catch (error) {
        res.send(new Error(400,error.message));
    }
})