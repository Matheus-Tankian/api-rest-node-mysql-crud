const express = require('express')
const newroutes = express.Router()

//pegar livros

newroutes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{

        if(err) return res.send(err)

        conn.query('SELECT * FROM funcionarios', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


//adicionar

newroutes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{

        if(err) return res.send(err)

        conn.query('INSERT INTO funcionarios set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('funcionarios added!')
        })
    })
})

//excluir

newroutes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{

        if(err) return res.send(err)

        conn.query('DELETE FROM funcionarios WHERE id = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('funcionarios excluded!')
        })
    })
})

//atualizar

newroutes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{

        if(err) return res.send(err)

        conn.query('UPDATE funcionarios set ? WHERE id = ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('funcionarios aupdate!')
        })
    })
})


module.exports = newroutes