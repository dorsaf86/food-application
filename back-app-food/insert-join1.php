
<?php
require 'config-food.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  
  try {
    // Extract the data.
    $request = json_decode($postdata);

    $email = mysqli_real_escape_string($con, trim($request->email));
    $username = mysqli_real_escape_string($con, $request->username);
    $date = mysqli_real_escape_string($con, trim($request->date));
    $time = mysqli_real_escape_string($con, $request->time);
    $allergy = mysqli_real_escape_string($con, trim($request->allergy));
    $nbPersonnes = mysqli_real_escape_string($con, trim($request->nbPersonnes));

      $sql = "INSERT INTO `reservation`(      `username`,      `email`,      `date`,      `time`,      `allergy`,      `nb_personnes`) 
      VALUES (      '{$username}',      '{$email}',      '{$date}',      '{$time}',      '{$allergy}',      '{$nbPersonnes}') ";

      
       $sql = "INSERT INTO `users`(      `username`,      `email`,      `date`,      `time`,      `allergy`,      `nb_personnes`) 
       VALUES (      '{$username}',      '{$email}',      '{$date}',      '{$time}',      '{$allergy}',      '{$nbPersonnes}') ";

        if (mysqli_multi_query($con, $sql)) {
          echo json_encode("resarvation ajouter avec success");
        } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($con);
        }
      }
    
   catch (Exception $e) {
    echo 'Exception reçue : ',  $e->getMessage(), "\n";
  }
}

?>