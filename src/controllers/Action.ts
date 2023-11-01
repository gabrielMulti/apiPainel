import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient({
    errorFormat: 'minimal'
})

async function readActions(req: any, res: any){
    res.json(await prisma.actions.findMany())
}

async function updateActions(req: any, res: any){
    console.log(req.body)
    await prisma.actions.update({
        where: {
            id: req.body.key
        },
        data: {
            ...req.body.values
        }
    })
    res.json({})
}

async function deleteActions(req: any, res: any){
    await prisma.actions.delete({ where: { id: req.body.key } })
    console.log(req.body)
    res.json({})
}

async function createAction(req: any, res: any){
    try {
        console.log(req.body)
        const action = {
            idAction: req.body.idAction,
            topicName: req.body.topicName,
            table: req.body.table
        }
        await prisma.actions.create({
            data: {...action}
        })

        res.json({})
    } catch (error: any) {
        if(error.message.includes('is missing')) {
            const message = error.message.split('Argument')[1].replaceAll('`', '').trim()
            return res.status(500).json({
                message
                })
        }
        // console.error(error)
        res.status(500).json({
            message: error
        })
    }

}

const action = {
    createAction,
    readActions,
    updateActions,
    deleteActions
}

export default action