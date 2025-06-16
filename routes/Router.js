const router = require('express').Router()

let usuarios = [
    {
        id: 1,
        nome: 'Daniel'
    }
]

// Rota principal
router.get('/', (req, res) => {
    res.status(200).send('Seja Bem-Vindo')
})

// Listar usuários
router.get('/listar', (req, res) => {
    res.status(200).json(usuarios)
})

// Cadastrar novo usuário
router.post('/cadastrar', (req, res) => {
    const { id, nome } = req.body
    usuarios.push({ id, nome })
    res.status(201).json({ mensagem: 'Cadastro efetuado!', usuario: { id, nome } })
})

// Editar usuário
router.put('/editar/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { nome } = req.body
    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' })
    }

    usuario.nome = nome
    res.json({ mensagem: 'Usuário atualizado.', usuario })
})

// Deletar usuário
router.delete('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id)
    usuarios = usuarios.filter(u => u.id !== id)
    res.json({ mensagem: 'Usuário deletado.' })
})

module.exports = router