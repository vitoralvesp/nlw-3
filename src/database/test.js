const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
    lat: "-27.222366",
    lng: "-34.55676",
    name: "Lar",
    about::"Venha aqui",
    images: [
        "https://images.unsplash.com/photo-1600563997209-bc2964ffc7d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1602632066287-57f51d6288aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    ].toString(),

    })


    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')

    //deletar dado da tabela 
    await db.run("DELETE FROM orphanages WHERE id='4'")
})