<?php

require_once realpath(dirname(__FILE__).'/ServiceProvider.php');

use \Core\ServiceProvider as ServiceProvider;

// Definimos los validadores personalizados que vamos a utilizar en
// este proyecto
// ServiceProvider::addValidationRule(
//   'nombre del validador', 
//   function($scope, $name, $value, $options) {
//   }
// );
// Instanciamos el provedor de servicios
$controller = new ServiceProvider(
  [
    // 'nombre del servicio global' => function($config) {
    // }
  ],
  [
    'GET' => [
      // 'nombre del servicio' => function($scope, $request) {
      // }
    ],
    'POST' =>  [
      // 'nombre del servicio' => function($scope, $request) {
      // }
    ]
  ]
);

// Proveemos el servicio
$controller->serveRemoteClient();

?>