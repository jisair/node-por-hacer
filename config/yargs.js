const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente una tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('borrar', 'Elimina una tarea de la lista', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada o pendiente una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}