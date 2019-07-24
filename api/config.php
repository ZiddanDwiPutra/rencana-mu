<?php
	$domain = "127.0.0.1:3307";

	$name = "pma";
	$password = "";
	$dbtbl = "rm";

	$connection = mysqli_connect($domain , $name , $password , $dbtbl);
	if(!$connection){
		die("tidak tersmbung ke db krna : ". mysqli_error($connection));
	}
?>