<?php

namespace DataBase;

require_once realpath(dirname(__FILE__)."/../config/db.php");


// Una interfaz para acceder a y modificar los datos almacenados dentro de una 
// tabla especifica en la base de datos
class DataBaseTable
{ 
  // Interfaz que representa la conexion a la base de datos
  protected static $db;
     
  // El nombre de la tabla que este objeto representa
  protected $table;
 
  // Crea una interfaz para interactuar con la tabla en la base de datos que 
  // tenga el nombre especificado
  // [in]   table (string): el nombre de la tabla que el objeto representara
  function __construct($table) {
    $this->table = $table;
  }

  // Intenta establecer una conexion a la base de datos y almacena una instancia
  // de la interfaz que representa dicha conexion para su uso futuro
  static function connectToDataBase() {
    self::$db = new \PDO(
      'mysql:host='.HOST.';'.
      'dbname='.DATA_BASE.';charset=utf8mb4',
      USER,
      PASSWORD,
      [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_EMULATE_PREPARES => false
      ]   
    );
  }

  // Retorna verdadero si la conexion a la base de datos fue establecida o falso
  // en caso contrario
  static function isDataBaseConnectionEstablished() {
    return isset(self::$db);
  }
}   // class DataBaseTable


// Intenta conectarse a la base de datos
DataBaseTable::connectToDataBase();

?>