const filme = require('../models/filme');
const filme =require('../models/filme');

const getAll = async (req, res)=>{
try{
    const filmes = await filme.findAll();
    res.render("index", {filmes, filmePut:null,filmeDel:null});
}catch(err){
    res.status(500).send({err: err.message});
}
};

const cadastro=(req, res)=>{
try{
res.render ("cadastro");
}catch(err){
    res.status(500).send({err: err.message});
}

};

const create = async (req,res)=>{
try{
const filme =req.body;
if(!filme){return res.redirect("/cadastro");}
await filme.create(filme);
res.redirect("/");
}catch(err){
    res.status(500).send({err: err.message});
}
};

const getById=async(req,res)=>{
    try{
const method=req.params.method;
const filmes = await filme.findAll();
const filme=await filme.findByPk(req.params.id);

if(method=='put'){
    res.render("index", {
    filmes,
    filmePut: filme,
    filmeDel:null,
    });
    }else{
        res.render("index", {
        filmes,
        filmePut: null,
        filmeDel:filme,
        });}

    }catch(err){
    res.status(500).send({err: err.message});
}
};

const update= async (req,res)=>{
    try{const filme=req.body;
        await filme.update(filme, {where:{id: req.params.id}});
        res.redirect("/");
    }catch(err){
    res.status(500).send({err: err.message});
}
};

const remove=async(req,res)=>{
    try{
        await filme.destroy({where: {id:req.params.id}});
        res.redirect("/");
    }catch(err){
        res.status(500).send({err: err.message});
    }
};

module.exports={
getAll,
cadastro,
create,
getById,
update,
remove,
};

