const home =async(req,res)=>{
    try{
        res.status(200).send("welcome apoorva shukla using router");

    }catch(error){
        console.log(error);
        
    }
};

const register = async(req,res)=>{

    try {
        console.log(req.body);
        res.status(200).json({message: req.body});
    
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    } 
};

module.exports ={home , register};