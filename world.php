<?php
mysql_connect(
"0.0.0.0",
"alexm52"
);
mysql_select_db("world");


$LOOKUP = $_REQUEST['lookup'];
$ALL = $_REQUEST['all'];
$FORMAT = $_REQUEST['format'];

# execute a SQL query on the database
if(sizeof($LOOKUP)==0){
  if($ALL == 'true'){
    $results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
    
    if($FORMAT == 'xml'){
      header('Content-Type: text/xml');
      echo '<?xml version="1.0" encoding="UTF-16"?>'; ?>
<countrydata><?php
      while ($row = mysql_fetch_array($results)) {
        ?>
<country>
<name><?php echo $row["name"]; ?></name>
<ruler><?php echo $row["head_of_state"]; ?></ruler>";
</country>
        <?php
      } ?>
</countrydata>
        <?php
    }else{
      print $results;
      # loop through each country
      
      while ($row = mysql_fetch_array($results)) {
        ?>
        <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
        <?php
      }
    }
  }else{
    // Effectively output nothing, but so client side still receives a response:
    ?>
      
      <?php
  }
}else{
  if($FORMAT == 'xml'){
      header('Content-Type: text/xml');
      echo '<?xml version="1.0" encoding="UTF-16"?>'; ?>
<countrydata><?php
      while ($row = mysql_fetch_array($results)) {
        ?>
<country>
<name><?php echo $row["name"]; ?></name>
<ruler><?php echo $row["head_of_state"]; ?></ruler>";
</country>
        <?php
      } ?>
</countrydata>
        <?php
  }else{
    $results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
    print $results;
    # loop through each country
    
    while ($row = mysql_fetch_array($results)) {
      ?>
      <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
      <?php
    }
  }
}
?>
