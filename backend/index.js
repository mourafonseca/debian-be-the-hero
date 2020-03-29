const express = require('express');

const app = express();

app.get('/', (request, Response) => {
    return Response.json({
        evento:'Semana Omnistack 11.0',
        aluno: 'Alessandro Fonseca'
    });
    

});

app.listen(3333);