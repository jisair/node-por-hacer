// const argv = require('yargs').argv
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado.length > 0) {
            console.log(colors.green('======POR HACER====='));
            for (let tarea of listado) {
                console.log(' - Tarea:  ', tarea.descripcion);
                console.log('   Estado: ', tarea.completado);
            }
            console.log(colors.green('===================='));
        } else {
            console.log(colors.red('======== NO HAY REGISTROS EN DB ============'));
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado)
            console.log(borrado);
        else
            console.log(colors.red('======== NO SE ENCONTRÓ ELEMENTO EN DB ============'));
        break;
    default:
        console.log('Comando no reconocido');

}