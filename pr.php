<?php

	class Conexionbd{
		public static function conectarse(){
			$con=mysql_connect("http://ing-ramon.com:2082","ingramon_ramon","webmaster1989jorazx");
			mysql_select_db("ingramon_blog");
			mysql_query("SET NAMES 'utf-8'");

			return $con;
			}
	}

	class Consultas{
		public $datos=array();
		public function select(){
			$sql="SELECT * FROM noticias";
			$res=mysql_query($sql::Conexionbd());
			while ($registros=mysql_fetch_assoc($res)){

				$this->datos[]=$registros;
			}

			return $this->datos;
		}
	}

	class Persona{
		public $nombre;
		public function st_nombre($name){
			$this->nombre=$name;
		}
		public function gt_nombre(){

			return $this->nombre;
		}


	}

?>

<!doctype html>
<html lang="es">
<head>
	<title>Prueba</title>
	<meta charset="utf-8">
</head>
<body>
	<?php 
		$ingramon = new Persona();
		$tra= new Consultas();
		$tra->select();
		//$ingramon->st_nombre("Ramon");
		//echo $ingramon->gt_nombre();
	?>
	$text=$tra->select();
	<?php
		for ($i=0; $i>sizeof($text); $i++) { 
			
			echo $text[$i]["0"];
		}
	?>
</body>
</html>