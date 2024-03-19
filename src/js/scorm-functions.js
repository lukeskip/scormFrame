import pipwerks from  '../../node_modules/scorm-api-wrapper/src/JavaScript/SCORM_API_wrapper'
//inicializamos el objeto scorm
const scorm = pipwerks.SCORM;
const scormUtils = pipwerks.UTILS;

//Funcion para inicializar el curso
function init() {
  scorm.version = "2004";
  scorm.set("cmi.score.min", 0);
  scorm.set("cmi.score.max", 10);

  message("Initializing curse");
  let callSucceeded = scorm.init();
  message("Curse status:" + callSucceeded);
}

//Asigna el curso como completado
function finishingCourse() {
  let counter = 0;
  message("Marking curse as completed");

//   saving answers of questions from user in SCORM API
  for (const answer in user.answers) {
    scorm.set(`cmi.interactions.${counter}.id`, counter + 1);
    scorm.set(`cmi.interactions.${counter}.type`, "long-fill-in");
    scorm.set(
      `cmi.interactions.${counter}.learner_response`,
      user.answers[answer]
    );
    scorm.set(`cmi.interactions.${counter}.result`, "correct");
    counter += 1;
  }

  let callSucceeded = scorm.set("cmi.completion_status", "completed");
  message("Curso Completado? " + callSucceeded);

  if (!callSucceeded) {
    alert(
      `Error al registrar tu curso, repórtalo copiando y pegando este texto a Universidad.nestle1@mx.nestle.com y/o Gregorio.villanueva@mx.nestle.com ${scormUtils.report.toString()}`
    );
  }
}

// Pregunta ala plataforma por el nombre del usuario
function getStudentName() {
  let userName = scorm.get("cmi.core.student_name");
  
}

//Termina la conexion con el LMS
function end() {
  message("Conexion terminada.");
  let callSucceeded = scorm.quit();
  message("Termino correctamente? " + callSucceeded);
}

//Manda una Alert al usuario
function message(msg) {
  console.log(msg);
}

//Se ejecuta al cargar la pagina
window.onload = function () {
  init();
};

//Se ejucuta al terminar la pagina
window.onunload = function () {
  end();
};
