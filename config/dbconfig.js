module.exports.dbconfig = () => {
    const dbconf = {};
    dbconf.port= process.env.PORT;
    dbconf.user= process.env.USER;
    dbconf.password='';
    dbconf.database= process.env.DATABASE;

    return conf;
}

