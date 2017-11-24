<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title>Residencial Demoiselle - Tour Virtual 360°</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		
		<script type="text/javascript" src="swfobject.js">
		</script>
		<script type="text/javascript">
			// hide URL field on the iPhone/iPod touch
			function hideUrlBar() {
				if (((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)))) {
					container = document.getElementById("container");
					if (container) {
						var cheight;
					  	switch(window.innerHeight) {
							case 208:cheight=268; break; // landscape
						 	case 260:cheight=320; break; // landscape, fullscreen
						 	case 336:cheight=396; break; // portrait, in call status bar
							case 356:cheight=416; break; // portrait 
							case 424:cheight=484; break; // portrait iPhone5, in call status bar
							case 444:cheight=504; break; // portrait iPhone5 
						 	default:
								cheight=window.innerHeight;
						}
						if ((cheight) && ((container.offsetHeight!=cheight) || (window.innerHeight!=cheight))) {
							container.style.height=cheight + "px";
							setTimeout(function() { hideUrlBar(); }, 1000);
						}
					}
				}
				
				document.getElementsByTagName("body")[0].style.marginTop="1px";
				window.scrollTo(0, 1);
			}
			window.addEventListener("load", hideUrlBar);
			window.addEventListener("resize", hideUrlBar);
			window.addEventListener("orientationchange", hideUrlBar);
		</script>
		<style type="text/css" title="Default">
			body, div, h1, h2, h3, span, p {
				font-family: Verdana,Arial,Helvetica,sans-serif;
				color: #000000; 
			}
			/* fullscreen */
			html {
				height:100%;
			}
			body {
				height:100%;
				margin: 0px;
				overflow:hidden; /* disable scrollbars */
			}
			body {
			  font-size: 10pt;
			  background : #ffffff; 
			}
			table,tr,td {
				font-size: 10pt;
				border-color : #777777;
				background : #dddddd; 
				color: #000000; 
				border-style : solid;
				border-width : 2px;
				padding: 5px;
				border-collapse:collapse;
			}
			h1 {
				font-size: 18pt;
			}
			h2 {
				font-size: 14pt;
			}
			.warning { 
				font-weight: bold;
			} 
			/* fix for scroll bars on webkit & Mac OS X Lion */ 
			::-webkit-scrollbar {
				background-color: rgba(0,0,0,0.5);
				width: 0.75em;
			}
			::-webkit-scrollbar-thumb {
    			background-color:  rgba(255,255,255,0.5);
			}
		</style>	
	</head>
	<body>
		<script type="text/javascript" src="pano2vr_player.js">
		</script>
		
<?php if ((strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")) || (strpos($_SERVER['HTTP_USER_AGENT'],"iPod")) || (strpos($_SERVER['HTTP_USER_AGENT'],"Android")) || (strpos($_SERVER['HTTP_USER_AGENT'],"webOS")) || (strpos($_SERVER['HTTP_USER_AGENT'],"Windows Phone"))) { ?>
	<script type="text/javascript" src="skin_phone.js">
<?php } else { ?>
	<script type="text/javascript" src="skin_desktop.js">
<?php } ?>
</script>

		<div id="container" style="width:100%;height:100%;">
		This content requires HTML5/CSS3, WebGL, or Adobe Flash Player Version 9 or higher.
		</div>
		<script type="text/javascript">
	

		// check for CSS3 3D transformations and WebGL
		if (ggHasHtml5Css3D() || ggHasWebGL()) {
	
			// create the panorama player with the container
			pano=new pano2vrPlayer("container");
			// add the skin object
			skin=new pano2vrSkin(pano);
			// load the configuration
			pano.readConfigUrl("TV_equi.xml");
			// hide the URL bar on the iPhone
			hideUrlBar();
		}
		</script>
		<noscript>
			<p><b>Please enable Javascript!</b></p>
		</noscript>
	</body>
</html>
