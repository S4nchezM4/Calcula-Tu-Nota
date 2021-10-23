function matematicas() {
    //Se definen las variables que seran establecidas con las notas del periodo
    var exploracion = prompt("Cual es tu nota de exploración?");
    var quiz_1 = prompt("Cual es tu nota del quiz 1?");
    var quiz_2 = prompt("Cual es tu nota del quiz 2?");
    var evaluacion = prompt("Cual es tu nota del evaluacion?");
    var apropiacion = prompt("Cual es tu nota del apropiacion?");
    exploracion = parseInt(exploracion);
    quiz_1 = parseInt(quiz_1);
    quiz_2 = parseInt(quiz_2);
    evaluacion = eparseInt(valuacion);
    apropiacion = parseInt(apropiacion);
    var acumulado_periodo = ((exploracion *0.1) + (quiz_1 * 0.2) + (quiz_2 * 0.2) + (evaluacion * 0.3) + (apropiacion * 0.2));
    alert(acumulado_periodo);
}

function lengua_castellana() {
    var exploracion_meta1 = prompt("Cual es tu nota de exploracion meta 1?")
    var construccion_1_meta_1 = prompt("Cual es tu nota de construccion 1 meta 1?")
    var construccion_2_meta_1 = prompt("Cual es tu nota de construccion 2 meta 1?")
    var evaluacion_meta_1 = prompt("Cual es tu nota de evaluacion meta 1?")
    var apropiacion_meta_1 = prompt("Cual es tu nota de apropiacion meta 1?")
    exploracion_meta1 = parseInt(exploracion_meta1)
    construccion_1_meta_1 = parseInt(construccion_1_meta_1)
    construccion_2_meta_1 = parseInt(construccion_2_meta_1)
    evaluacion_meta_1 = parseInt(evaluacion_meta_1)
    apropiacion_meta_1 = parseInt(apropiacion_meta_1)
    var nota_final_meta_1 = ((exploracion_meta_1 * 0.1) + (construccion_1_meta_1 * 0.2) + (construccion_2_meta_1 * 0.2) + (evaluacion_meta_1 * 0.3) + (apropiacion_meta_1 * 0.2))
    var exploracion_meta2 = prompt("Cual es tu nota de exploracion meta 2?")
    var construccion_1_meta_2 = prompt("Cual es tu nota de construccion 1 meta 2?")
    var construccion_2_meta_2 = prompt("Cual es tu nota de construccion 2 meta 2?")
    var evaluacion_meta_2 = prompt("Cual es tu nota de evaluacion meta 2?")
    var apropiacion_meta_2 = prompt("Cual es tu nota de apropiacion meta 2?")
    exploracion_meta2 = parseInt(exploracion_meta2)
    construccion_1_meta_2 = parseInt(construccion_1_meta_2)
    construccion_2_meta_2 = parseInt(construccion_2_meta_2)
    evaluacion_meta_2 = parseInt(evaluacion_meta_2)
    apropiacion_meta_2 = parseInt(apropiacion_meta_2)
    var nota_final_meta_2 = ((exploracion_meta_2 * 0.1) + (construccion_1_meta_2 * 0.2) + (construccion_2_meta_2 * 0.2) + (evaluacion_meta_2 * 0.3) + (apropiacion_meta_2 * 0.2))
    var nota_final = ((nota_final_meta_1 * 0.5) + (nota_final_meta_2 * 0.5))
    alert(nota_final)
}
function definitiva_anual () {
    var primer_periodo = prompt("Cual es tu nota del primer periodo?")
    var segundo_periodo = prompt("Cual es tu nota del segundo periodo?")
    var tercer_periodo = prompt("Cual es tu nota del tercer periodo?")
    var cuarto_periodo = prompt("Cual es tu nota del cuarto periodo?")
}

