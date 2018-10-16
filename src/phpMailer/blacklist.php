<?php
$emails = [];
$emails[] = 'emailbloqeuado@gmail.com';
$emails[] = 'email@bloqeuado.com';

file_put_contents('blacklist.json', json_encode($emails,TRUE));
