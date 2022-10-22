const connectInfo = {
    username: "ae",
    password: "mizuhara",
    cluster: "cluster0.pfer3qk.mongodb.net",
    authSource: "admin",
    authMechanism: "DEFAULT",
    dbName: "hm-286-001",
    heroesCollection: "heroes",
}

exports.connectInfo = connectInfo

/*
const username = encodeURIComponent(connectInfo.username);
const password = encodeURIComponent(connectInfo.password);
const cluster = connectInfo.cluster;
const authSource = connectInfo.authSource;
const authMechanism = connectInfo.authMechanism;
const dbName = connectInfo.dbName;
const heroesCollection = connectInfo.heroesCollection;
//`let uri = mongodb+srv://${username}:${password}@${cluster}/${dbName}?authSource=${authSource}&authMechanism=${authMechanism}`;
  */