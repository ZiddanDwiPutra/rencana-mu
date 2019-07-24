<?php 
include 'config.php';
$path = $_GET['path'];
if($path == 'save'){
    $name = $_POST['name'];
    $notes = $_POST['note'];
    $date = $_POST['date'];
    
    $sql = "INSERT INTO `all_note`(`id`, `name`, `note`, `date`) VALUES (null, $name, $notes, $date)";
    
    $result = mysqli_query($connection , $sql);
    if($result){
        echo "{'status': 'success'}";
    }else {
        echo "error saat query karena : " . mysqli_error($connection) . "<br>";
    }
}

?>