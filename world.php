<?php
mysql_connect(
"0.0.0.0",
"alexm52"
);
mysql_select_db("world");


$LOOKUP = $_REQUEST['lookup'];

# execute a SQL query on the database
$results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
print $results;
# loop through each country
while ($row = mysql_fetch_array($results)) {
  ?>
  <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
  <?php
}
?>
