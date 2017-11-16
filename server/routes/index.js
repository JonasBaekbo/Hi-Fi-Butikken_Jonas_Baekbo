module.exports = (app) => {
    require('./produkter')(app);
    require('./kontakt')(app);
    require('./producent')(app);
    require('./kategori')(app);
    require('./login')(app);
};