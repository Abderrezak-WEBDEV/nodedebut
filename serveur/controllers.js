module.exports.hello = (req, res)=> {
    //pour recuperer sur le front une reponse en forme json
    res.json({message: "Votre resultat"});
};
module.exports.multiple = (req, res)=>{
    const nombre = parseInt(req.params.nb);
    resultat = nombre * 2;
    res.json({message : resultat}) 
}