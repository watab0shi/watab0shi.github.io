<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="utf-8">
	<title>Session</title>
</head>

<body>
	<?php
		mb_language( "Japanese" );
		mb_internal_encoding( "UTF-8" );

		$to      = 'wtbs.kani@gmail.com';
		$subject = '3DaysMaster_PHP';
		$body    = 'This is a test mail.';

		$result  = mb_send_mail( $to, $subject, $body );

		if( $result ) echo 'Succeeded!';
		else          echo 'Faild';
	?>
</body>

</html>
