const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('test toy')
})


app.get('/member/', (req, res) => {
    res.json(members)
})
,
app.get('/member/:id', (req, res) => {
    res.json(members.find(member => member.id === req.params.id))
})
,
app.post('/member', (req, res) => {
    member.push(req.body)
    res.status(200).json(req.body)
})
,
app.put('/member/:id', (req, res) => {
   const updateIndex = members.findIndex(member => member.id === req.params.id)
    res.json(Object.assign(members[updateIndex], req.body))
})
,
app.delete('/member/:id', (req, res) => {
    const deleteIndex = members.findIndex(member => member.id === req.params.id)
    members.splice(deleteIndex, 1)
    res.status(204).send()
})
,
app.listen(4200, () => {
    console.log('Start server at port 4200.')
})