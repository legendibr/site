<?php
if (isset($_POST)) {
    $content = file_get_contents("://input");
    $data = json_decode($content, true);

    echo json_encode($data);
} else {
    echo "No file found";
}
?>