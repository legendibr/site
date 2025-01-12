<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $dir = $input['dir'];

    if (is_dir($dir)) {
        $size = 0;
        foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $file) {
            $size += $file->getSize();
        }
        echo json_encode(['size' => $size]);
    } else {
        echo json_encode(['error' => 'Directory not found']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>
